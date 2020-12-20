import {groupBy} from "./groupBy";

describe("groupBy utility", () => {
    it("should throw an exception when array parametr is empty or its length is zero", () => {
        const input: number[] = [];
        const numberOfGroups = 10;

        expect(() => groupBy(input, numberOfGroups)).toThrow();
    });

    it("should throws an exception when array parameter is an undefined or null object", () => {
        const input: any = undefined;
        const numberOfGroups = 10;

        expect(() => groupBy(input, numberOfGroups)).toThrow();
    });

    it("should throw an exception if the number-of-groups paramter is a negative number", () => {
        const input: number[] = [1, 2, 3, 5];
        const size = -5;

        expect(() => groupBy(input, size)).toThrow();
    });

    it("should throw an exception if the group size paramter is zero", () => {
        const input: number[] = [1, 2, 3, 5];
        const size = 0

        expect(() => groupBy(input, size)).toThrow();
    });

    it("should throws an excepton if the group size is bigger than the length of the array", () => {

        const input: number[] = [1, 2, 3, 5];
        const size = 5;
        expect(()=>groupBy(input, size)).toThrow();
    });


    it("should return equally sized chunks if array length is diviable by the required number of chunks", () => {
        const input: number[] = [1, 2, 3, 4, 5, 6];
        const numberOfGroups = 3;
        const sizeOfChunck = Math.ceil(input.length / numberOfGroups);
        const remainder = input.length % sizeOfChunck;
        const expectedOutput = [[1, 2], [3, 4], [5, 6]]
        const actualOutput = groupBy(input, numberOfGroups);


        expect(actualOutput).toBeTruthy();
        expect(actualOutput.length).toEqual(numberOfGroups);
        expect(actualOutput).toEqual(expectedOutput);
        actualOutput.forEach((item: any[]) => {
            expect(item.length).toEqual(sizeOfChunck);
        });
    });

    it("should return N number of groups with N-1 groups are equal in size , if array length is not" +
        " diviable" +
        " by the required number" +
        " of chunks", () => {
        const input: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const numberOfGroups = 3;
        const output = [[1, 2, 3 ,4], [5, 6,7,8], [9,10]];

        const actualOutput = groupBy(input, numberOfGroups);

        expect(actualOutput).toBeTruthy();
        expect(actualOutput.length).toEqual(numberOfGroups);
        expect(actualOutput).toEqual(output);
    });
});
