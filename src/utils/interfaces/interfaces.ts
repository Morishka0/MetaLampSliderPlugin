type SubscribeEvent = (data?: any) => void;

interface ISubscribers {
	[key: string]: SubscribeEvent[];
}

interface IEnds {
	min: number;
	max: number;
}

interface IHorizontalSliderCoords {
		left:number,
		width:number
}

interface ISliderParams {
	min:number,
	max:number,
	step:number
}

export { SubscribeEvent, ISubscribers, IEnds, IHorizontalSliderCoords,ISliderParams };