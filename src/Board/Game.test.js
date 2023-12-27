import Board from "./Board";
import { render,fireEvent, screen,cleanup} from "@testing-library/react";

describe("Test Winner X",()=>{
    it("Should declare X Winner",() => {
        const square = render(<Board />)
        fireEvent.click(square.getByTestId("square0"));
        fireEvent.click(square.getByTestId("square3"));
        fireEvent.click(square.getByTestId("square2"));
        fireEvent.click(square.getByTestId("square4"));
        fireEvent.click(square.getByTestId("square1"));
        expect(square.getByTestId("info").textContent).toBe("Winner X");
    });
});

describe("Test Winner O",()=>{
    it("Should declare O Winner",() => {
        const square = render(<Board />)
        fireEvent.click(square.getByTestId("square0"));
        fireEvent.click(square.getByTestId("square3"));
        fireEvent.click(square.getByTestId("square2"));
        fireEvent.click(square.getByTestId("square4"));
        fireEvent.click(square.getByTestId("square6"));
        fireEvent.click(square.getByTestId("square5"));
        expect(square.getByTestId("info").textContent).toBe("Winner O");
    });
})


describe("Test Tie",()=>{
    it("Should declare game tie",() => {
    const square = render(<Board />)
    fireEvent.click(square.getByTestId("square0"));
    fireEvent.click(square.getByTestId("square1"));
    fireEvent.click(square.getByTestId("square2"));
    fireEvent.click(square.getByTestId("square5"));
    fireEvent.click(square.getByTestId("square3"));
    fireEvent.click(square.getByTestId("square6"));
    fireEvent.click(square.getByTestId("square4"));
    fireEvent.click(square.getByTestId("square8"));
    fireEvent.click(square.getByTestId("square7"));
    expect(square.getByTestId("info").textContent).toBe("Game Tie");
});
})