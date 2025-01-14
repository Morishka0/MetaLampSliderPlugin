import { screen, waitFor } from "@testing-library/dom";
import View from "../../../src/View/View";
import Track from "../../../src/View/ViewElements/Track/Track";
import handleClick from '../../../src/View/ViewElements/Track/utils/handleClick';
import calculateCursorCoordinate from '../../../src/View/ViewModules/calculateCursorCoordinate';

describe("Track test", () => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
	const root = ".slider-1";
	const view = new View(root);
	const track = new Track(view);

	test("constructor test", () => {
		expect(track).toHaveProperty("view");
	});

	test("correct track click test", () => {
		
	});

	test("correct track model notify before click track  test", async () => {
		const fn = jest.fn;
		track.createTrack("horizontal");
		track.subscribe("UpdateThumbModelBeforeTrackClick", fn);
		waitFor(() => {
			const DOMTrack = screen.getByTestId("test-track");
			DOMTrack.dispatchEvent(new MouseEvent("mousedown"));
			expect(fn).toBeCalled();
		});
	});

	test("correct track model fill notify before click track  test", async () => {
		const fn = jest.fn;
		track.createTrack("horizontal");
		track.subscribe("UpdateTrackModelFill", fn);
		waitFor(() => {
			const DOMTrack = screen.getByTestId("test-track");
			DOMTrack.dispatchEvent(new MouseEvent("mousedown"));
			expect(fn).toBeCalled();
		});
	});
});
