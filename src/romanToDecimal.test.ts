import { romanToDecimal } from "../src/romanToDecimal";
describe("test romanToDecimal",()=>{
    it(" should return 1 for (I)",()=>{
        expect(romanToDecimal('I')).toBe(1);
    });
    it("should return 581 for DCXXXI",()=>{
        expect(romanToDecimal('DCXXXI')).toBe(631);
    })
   it("should return 2219 for MMCCXIX",()=>{
        expect(romanToDecimal('MMCCXIX')).toBe(2219)
   });
});



