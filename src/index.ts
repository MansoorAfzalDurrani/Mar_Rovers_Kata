import { turnleft } from "./MarsRoversKata";
//const turnleft = (x)=> "W";
describe("Turning A Rover", () => {
    test("When Facing N, turning left should cause us to face W", () => {
      expect(turnleft("N")).toBe("W");
    });
  });
  