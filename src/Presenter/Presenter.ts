import View from "../View/View";
import TrackModel from "../Model/TrackModel";
import { Direction, ISliderParams } from "../Interfaces/interfaces";
import ThumbModel from "../Model/ThumbModel";
import clearHTML from "./PresenterModules/clearHTML";

class Presenter {
	public sliderClass: string;
	private trackModel: TrackModel;
	private view: View;
	private params: ISliderParams;
	private thumbs: ThumbModel[];
	private thumbStance: number;
	private clearHTML: () => void;
	constructor(sliderClass: string, params: ISliderParams) {
		this.sliderClass = sliderClass;
		this.trackModel = new TrackModel(sliderClass);
		this.view = new View(sliderClass);
		this.thumbs = [];
		this.params = params;
		this.thumbStance = 0;
		this.init(params, "init");
		this.addListeners(params.isRange);
		this.clearHTML = clearHTML.bind(this);
	}

	public init(params: ISliderParams, mode: string) {
		if (mode === "rebuild") {
			this.params = params;
			this.clearHTML();
			this.thumbStance = 0;
			this.thumbs = [];
		}

		$(document).ready(() => {
			this.setTrackModelState(params).setTrackViewState();
		});
		this.createSlider(params);
		this.subscribe();
	}

	private setTrackModelState({
		min,
		max,
		isRange,
		direction,
	}: ISliderParams) {
		const size =
			direction === "horizontal"
				? $(".slider").width()!
				: $(".slider").height()!;
		this.trackModel.setSize(size);
		this.trackModel.setEnds({ min, max });
		this.trackModel.setIsRange(isRange);
		this.trackModel.setDirection(direction);
		return this;
	}
	private setTrackViewState() {
		this.view.setState(this.trackModel.getState());
		return this;
	}

	public createSlider({
		isRange,
		step,
		value,
		min,
		max,
		direction,
	}: ISliderParams) {
		$(this.sliderClass).addClass(`slider-${direction}`);
		this.createTrackView(direction);
		this.createScaleView(direction, step, max, min);
		this.creteFillView(direction);

		this.createThumb(this.thumbStance);
		this.setThumbModelState(
			this.thumbStance,
			step,
			Array.isArray(value) ? value[0] : value,
			min,
			max
		);
		this.createThumbView(this.thumbStance);
		this.creteTipView(direction, this.thumbStance);
		this.setThumbViewStateAndPlacement(direction, this.thumbStance);
		this.setTipPlacement(direction, this.thumbStance);
		if (isRange) {
			this.thumbStance += 1;
			this.createThumb(this.thumbStance);
			this.setThumbModelState(
				this.thumbStance,
				step,
				Array.isArray(value) ? value[1] : value,
				min,
				max
			);
			this.createThumbView(this.thumbStance);
			this.creteTipView(direction, this.thumbStance);
			this.setThumbViewStateAndPlacement(direction, this.thumbStance);
			this.setTipPlacement(direction, this.thumbStance);
		}

		this.setTrackFillAndPlacement(direction);
		return this;
	}

	private setThumbModelState(
		stance: number,
		step: number,
		value: number,
		min: number,
		max: number
	) {
		this.thumbs.forEach((thumb) => {
			thumb.setStep(step, { min, max });
		});
		this.thumbs[stance].setStance(stance);
		this.thumbs[stance].setValue(value);
		this.thumbs[stance].setOffset({ min, max });

		return this;
	}
	private setThumbViewStateAndPlacement(
		direction: Direction,
		stance: number
	) {
		const { step, stepCount, stepPercent, value, offset } =
			this.thumbs[stance].getState();
		this.view.thumbView.setStep(step, stepPercent, stepCount);
		this.view.thumbView.setValue(value, stance);
		this.view.thumbView.setOffset(offset, stance);
		this.view.initialThumbPlacement(direction, stance);

		return this;
	}

	private setTrackFillAndPlacement(direction: Direction) {
		$(document).ready(() => {
			this.trackModel.setFillSize(direction);
			this.trackModel.setFillOffset(direction);
			this.view.setFillState(this.trackModel.getFillState());
			this.view.initialFillPlacement(direction);
		});
	}

	private setTipPlacement(direction: Direction, stance: number) {
		this.view.initialTipPlacement(direction, stance);
	}

	private createThumb(stance: number) {
		this.thumbs.push(new ThumbModel(this.sliderClass, stance));
	}

	private createThumbView(stance: number) {
		this.view.thumbView.createThumb(stance);
	}

	private createTrackView(direction: Direction) {
		this.view.trackView.createTrack(direction);
	}

	private createScaleView(
		direction: Direction,
		step: number,
		max: number,
		min: number
	) {
		this.view.scaleView.createScale(direction);
		this.view.scaleView.createScaleMarks(step, max, min, direction);
		this.view.scaleView.createScaleNumbers(step, max, min, direction);
	}

	private creteFillView(direction: Direction) {
		this.view.fillView.createFill(direction);
	}

	private creteTipView(direction: Direction, stance: number) {
		this.view.tipView.createTip(direction, stance);
	}

	private addListeners(isRange: boolean) {
		this.view.thumbView.dragThumb(0);
		this.view.trackView.clickTrack();

		if (isRange) {
			this.view.thumbView.dragThumb(1);
		}
	}

	private updateTrackFillModelState() {
		this.trackModel.updateTrackFill(this.view.direction);
	}

	private updateTrackFillPosition(width: number, offset: number) {
		this.view.fillView.setSize(width);
		this.view.fillView.setOffset(offset);
	}

	private updateThumbModelValue(stance: number, cursorOffset: number) {
		this.thumbs[stance].updateThumbValue(
			stance,
			this.view.ends,
			cursorOffset
		);
	}
	private updateThumbPosition(value: number, offset: number, stance: number) {
		this.view.thumbView.setOffset(offset, stance);
		this.view.thumbView.setValue(value, stance);
	}

	// private getRangeValues(): number[] {
	// 	const result: number[] = []
	// 	this.thumbs.forEach(thumb => result.push(thumb.getValue()))
	// 	return result
	// }

	private subscribe() {
		this.view.thumbView.subscribe(
			"UpdateThumbModelValue",
			this.updateThumbModelValue.bind(this)
		);

		this.view.trackView.subscribe(
			"UpdateThumbModelValue",
			this.updateThumbModelValue.bind(this)
		);

		this.view.trackView.subscribe(
			"UpdateTrackModelFill",
			this.updateTrackFillModelState.bind(this)
		);

		this.trackModel.subscribe(
			"UpdateTrackFillPosition",
			this.updateTrackFillPosition.bind(this)
		);

		this.thumbs.forEach((thumb) =>
			thumb.subscribe(
				"UpdateThumbPosition",
				this.updateThumbPosition.bind(this)
			)
		);
	}
}

export default Presenter;
