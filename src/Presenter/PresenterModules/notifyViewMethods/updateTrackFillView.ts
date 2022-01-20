import Presenter from "../../Presenter";


const updateTrackFillView = function(this:Presenter,size: number, offset: number) {
    this.view.fillView.setSize(size);
    this.view.fillView.setOffset(offset);
}

export default updateTrackFillView