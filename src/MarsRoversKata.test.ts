import { turnleft } from "./MarsRoversKata";

describe("Turning A Rover", () => {
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


