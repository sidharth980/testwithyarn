import Board from "./Board/Board.js";
import { render,fireEvent, screen,cleanup} from "@testing-library/react";


describe("Basic rendering of board",() => {
    it("Should render box",() => {
        render(<Board />);
        expect(screen.getByTestId("board0")).toBeDefined();
    });
    it("Should render with empty Boxes",() => {
        const square = render(<Board />);
        expect(square.getAllByTestId("square1").value).toBeUndefined();
    });
})

describe("Functioning of board",()=>{
    it("Should change to X when Pressed",() => {
        const square = render(<Board />).getByTestId("square0");
        fireEvent.click(square);
        expect(square.textContent).toBe("X");
    });
    
    it("Should change to O when Pressed a 2nd square",() => {
        render(<Board />);
        const square0 = screen.getByTestId("square0");
        fireEvent.click(square0);
        const square1 = screen.getByTestId("square1");
        fireEvent.click(square1);
        expect(square1.textContent).toBe("O");
    });
    it("Should not change when pressed twice",() => {
        const square = render(<Board />).getByTestId("square2");
        fireEvent.click(square);
        fireEvent.click(square);
        expect(square.textContent).toBe("X");
    });
})



// describe("Test Game Functions",()=>{
//     it("Should declare 'X' as the winner",() => {
//         const square = render(<Board />).getAllByRole("button");
//         fireEvent.click(square[0]);
//         // fireEvent.click(screen.getByTestId("square3"));
//         // fireEvent.click(screen.getByTestId("square1"));
//         // fireEvent.click(screen.getByTestId("square4"));
//         // fireEvent.click(screen.getByTestId("square2"));
//         screen.debug();
//         expect(square[0].textContent).toBe("X")
//         // expect(screen.getByTestId("info").textContent).toBe("Winner X");
//     });
//     // it("Should declare 'O' as the winner",() => {
//     //     const square = render(<Board />)
//     //     fireEvent.click(square.getByTestId("square3"));
//         // fireEvent.click(square.getByTestId("square3"));
//         // fireEvent.click(square.getByTestId("square6"));
//         // fireEvent.click(square.getByTestId("square4"));
//         // fireEvent.click(square.getByTestId("square7"));
//         // fireEvent.click(square.getByTestId("square5"));
//         // console.log(square.debug());
//         // expect(square.getByTestId("info").textContent).toBe("Winner O");
//     //     expect(square[0].textContent).toBe("X")
//     // });
//     // it("Should declare game tie",() => {
//     //     const square = render(<Board />)
//     //     fireEvent.click(square.getByTestId("square0"));
//     //     fireEvent.click(square.getByTestId("square1"));
//     //     fireEvent.click(square.getByTestId("square2"));
//     //     fireEvent.click(square.getByTestId("square5"));
//     //     fireEvent.click(square.getByTestId("square3"));
//     //     fireEvent.click(square.getByTestId("square6"));
//     //     fireEvent.click(square.getByTestId("square4"));
//     //     fireEvent.click(square.getByTestId("square8"));
//     //     fireEvent.click(square.getByTestId("square7"));
//     //     expect(square.getByTestId("info").textContent).toBe("Game Tie");
//     // });
// })