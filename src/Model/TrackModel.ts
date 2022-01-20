import Observer from "../Observer/Observer";
import {
	Direction,
	Ends,
	SliderFillState,
	SliderParams,
	SliderTrackState,
} from "../Interfaces/interfaces";

class TrackModel extends Observer {
	private root: string;
	public isRange: boolean;
	public direction: Direction;
	public ends: Ends;
	public size: number;
	public fillSize: number;
	public fillOffset: number;
	public hasFill: boolean;
	public hasTips: boolean;
	public hasScale: boolean;
	constructor(root: string) {
		super();
		this.root = root;
		this.ends = { min: 1, max: 100 };
		this.size = 200;
		this.isRange = false;
		this.direction = "horizontal";
		this.fillSize = 0;
		this.fillOffset = 0;
		this.hasFill = true;
		this.hasTips = true;
		this.hasScale = true;
	}

	public setEnds({ min, max }: Ends) {
		this.ends = { min, max };
	}

	public setSize(size: number) {
		this.size = size;
	}
	public setIsRange(isRange: boolean) {
		this.isRange = isRange;
	}

	public setDirection(direction: Direction) {
		this.direction = direction;
	}
	public setSubViews(hasFill: boolean, hasTips: boolean, hasScale: boolean) {
		this.hasScale = hasScale;
		this.hasTips = hasTips;
		this.hasFill = hasFill;
	}

	public calculateFillSize(direction: Direction) {
		let fillSize = 0;
		if (this.isRange) {
			if (direction === "horizontal") {
				fillSize += parseInt($(`${this.root} .slider__thumb-1`).css("left")) -
					parseInt($(`${this.root} .slider__thumb-0`).css("left"));
			} else {
				fillSize += parseInt($(`${this.root} .slider__thumb-0`).css("top")) -
					parseInt($(`${this.root} .slider__thumb-1`).css("top"));
			}
		} else {
			fillSize += parseInt(
				$(`${this.root} .slider__thumb-0`).css(
					direction === "horizontal" ? "left" : "bottom"
				)
			);
			if (direction === "vertical") {
				fillSize += parseInt($(`${this.root} .slider__thumb-0`).css("height"));
			}
		}

		return fillSize;
	}

	public setFillSize(fillSize: number) {
		this.fillSize = fillSize;
	}

	public calculateFillOffset(direction: Direction) {
		if (this.isRange) {
			if (direction === "horizontal") {
				return parseInt(
					$(`${this.root} .slider__thumb-0`).css("left"),
					10
				);
			} else {
				return parseInt(
					$(`${this.root} .slider__thumb-1`).css("top"),
					10
				);
			}
		} else {
			return 0;
		}
	}

	public setFillOffset(fillOffset: number) {
		this.fillOffset = fillOffset;
	}

	public updateTrackFill(direction: Direction) {
		this.setFillSize(this.calculateFillSize(direction));
		this.setFillOffset(this.calculateFillOffset(direction));
		this.notify("UpdateTrackFillPosition", this.fillSize, this.fillOffset);
	}


	public prepareChooseStance(cursorCoordinate: number) {
		const cursorOffset = cursorCoordinate / this.size * 100;
		let stance = 0;
		const chooseCorrectStance = cursorOffset > (this.fillSize / this.size * 100 / 2) + (this.fillOffset / this.size * 100);
		if (chooseCorrectStance && this.isRange) stance = 1;
		if (this.direction === "vertical") stance = +!stance;
		this.notify("UpdateThumbModelValue", stance, cursorCoordinate, this.direction, this.size);
	}


	public getState(): SliderTrackState {
		return {
			ends: this.ends,
			size: this.size,
			isRange: this.isRange,
			direction: this.direction,
			hasFill: this.hasFill,
			hasTips: this.hasTips,
			hasScale: this.hasScale,
		};
	}


	public getFillState(): SliderFillState {
		return {
			fillSize: this.fillSize,
			fillOffset: this.fillOffset,
		};
	}
}

export default TrackModel;
