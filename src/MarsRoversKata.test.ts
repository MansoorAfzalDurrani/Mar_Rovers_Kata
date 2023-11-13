import {turnRight, turnleft } from "./MarsRoversKata";
import{move} from "./MarsRoversKata";

type Heading = "N"|"W"|"S"|"E";
type Coordinates =[x:number, y:number];

type Rover={
  heading: Heading,
  position: Coordinates
}
//state: { heading: any; position?: number[]; }
const  execute =(command:string , state: Rover)=>{
  if(command === "L") return{ ...state, heading: turnleft(state.heading),};
  if(command === "R") return { ...state, heading: turnRight(state.heading),};
};
test.each`
  original | expected | direction
  ${"N"}   | ${"W"}   | ${"L"}
  ${"W"}   | ${"S"}   | ${"L"}
  ${"S"}   | ${"E"}   | ${"L"}
  ${"E"}   | ${"N"}   | ${"L"}

  ${"N"}   | ${"E"}   | ${"R"}
  ${"E"}   | ${"S"}   | ${"R"}
  ${"S"}   | ${"W"}   | ${"R"}
  ${"W"}   | ${"N"}   | ${"R"}
`(
  "when facing $original, turning $direction should cause us to face $expected", 
({ original, expected, direction }) => {
  const initialState = { heading: original, position : [1,1] as Coordinates};
  expect(execute(direction, initialState)).toEqual({
    ...initialState,
    heading: expected,
  });
}
);

describe("For Moving Rover North", () => {
  test("When Moving N, We Should Increment the Y cordinate", () => {
    expect(move("N",[1,1])).toEqual([[1,2]]);
  });
});
describe("For Moving Rover East", () => {
  test("When Moving E, We Should Increment the X cordinate", () => {
    expect(move("E",[1,1])).toEqual([[2,1]]);
  });
});
describe("For Moving Rover South", () => {
  test("When Moving S, We Should Decrement the Y cordinate", () => {
    expect(move("S",[1,1])).toEqual([[1,0]]);
  });
});
describe("For Moving Rover West", () => {
  test("When Moving W, We Should Decrement the X cordinate", () => {
    expect(move("W",[1,1])).toEqual([[0,1]]);
  });
});


/* test.each`
  original | expected 
  ${"N"}   | ${"E"}
  ${"E"}   | ${"S"}
  ${"S"}   | ${"W"}
  ${"W"}   | ${"N"}
`(
  "when facing $original, turning right should cause us to face $expected",
   ({ original, expected }) => {
 const initialState={heading:original, position:[1,1] as Coordinates};
  expect(execute("R",initialState)).toEqual({
    ...initialState,
    heading: expected,
  });
});
*/

/*
test.each`
  original | expected 
  ${"N"}   | ${"E"}
  ${"E"}   | ${"S"}
  ${"S"}   | ${"W"}
  ${"W"}   | ${"N"}
`("when facing $original, turning right should cause us to face $expected", ({ original, expected }) => {
  expect(turnRight(original)).toBe(expected);
});
*/

/*
describe("Turning A Rover right", () => {
  test("When Facing N, turning Ritgh should cause us to face W", () => {
    expect(turnRight("N")).toBe("E");
  });
  test("When Facing W, turning Ritgh should cause us to face S", () => {
    expect(turnRight("E")).toBe("S");
  });
  test("When Facing W, turning Ritght should cause us to face S", () => {
    expect(turnRight("S")).toBe("W");
  });
  test("When Facing S, turning Ritght should cause us to face E", () => {
    expect(turnRight("W")).toBe("N");
  });

});
*/

/* //turn left coding
test.each`
  original | expected 
  ${"N"}   | ${"W"}
  ${"W"}   | ${"S"}
  ${"S"}   | ${"E"}
  ${"E"}   | ${"N"}
`("when facing $original, turning left should cause us to face $expected", ({ original, expected }) => {
  expect(turnleft(original)).toBe(expected);
});
*/

/*
describe("Turning A Rover left", () => {
  test("When Facing N, turning left should cause us to face W", () => {
    expect(turnleft("N")).toBe("W");
  });
  test("When Facing W, turning left should cause us to face S", () => {
    expect(turnleft("W")).toBe("S");
  });
  test("When Facing W, turning left should cause us to face S", () => {
    expect(turnleft("S")).toBe("E");
  });
  test("When Facing S, turning left should cause us to face E", () => {
    expect(turnleft("E")).toBe("N");
  });
});
*/
