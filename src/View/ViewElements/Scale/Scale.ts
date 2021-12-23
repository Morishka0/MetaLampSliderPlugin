import { Direction } from "../../../Interfaces/interfaces";
import View from "../../View";
import createScaleMarks from "./utils/createScaleMarks";
import createScaleNumbers from "./utils/createScaleNumbers";

class Scale {
	public createScaleMarks:(step:number,max:number,min:number)=>void
	public createScaleNumbers:(step:number,max:number,min:number)=>void
	private parentElement: View;
	constructor(parentElement: View) {
		this.parentElement = parentElement;
		this.createScaleMarks = createScaleMarks.bind(this)
		this.createScaleNumbers = createScaleNumbers.bind(this)
	}

	public createScale(direction: Direction) {
		this.parentElement.parent.append(`<div class="slider__scale slider__scale-${direction}"></div>`);
	}

}


export default Scale;
