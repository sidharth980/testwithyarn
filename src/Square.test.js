import Square from "./Square/Square.js";
import { render } from "@testing-library/react";

describe("Basic rendering of squares",() => {
    it("Should render squares",() => {
        const square = render(<Square 
            value={0}
            setPlayer={() => {}}
            gameArray={Array(9).fill(null)}
            saveSquare={Array(9).fill(null)}
            setSaveSquare={() => {}}/>);
        expect(square.getAllByTestId("square0")).toBeDefined();
    });
    it("Should render with empty Boxes",() => {
        const square = render(<Square 
            value={0}
            setPlayer={() => {}}
            gameArray={Array(9).fill(null)}
            saveSquare={Array(9).fill(null)}
            setSaveSquare={() => {}}/>);
        expect(square.getAllByTestId("square0").textContnet).toBeUndefined();
    });
})