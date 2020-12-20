"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var groupBy_1 = require("./groupBy");
describe("groupBy utility", function () {
    it("should throw an exception when array parametr is empty or its length is zero", function () {
        var input = [];
        var numberOfGroups = 10;
        expect(function () { return groupBy_1.groupBy(input, numberOfGroups); }).toThrow();
    });
    it("should throws an exception when array parameter is an undefined or null object", function () {
        var input = undefined;
        var numberOfGroups = 10;
        expect(function () { return groupBy_1.groupBy(input, numberOfGroups); }).toThrow();
    });
    it("should throw an exception if the number-of-groups paramter is a negative number", function () {
        var input = [1, 2, 3, 5];
        var size = -5;
        expect(function () { return groupBy_1.groupBy(input, size); }).toThrow();
    });
    it("should throw an exception if the group size paramter is zero", function () {
        var input = [1, 2, 3, 5];
        var size = 0;
        expect(function () { return groupBy_1.groupBy(input, size); }).toThrow();
    });
    it("should throws an excepton if the group size is bigger than the length of the array", function () {
        var input = [1, 2, 3, 5];
        var size = 5;
        expect(function () { return groupBy_1.groupBy(input, size); }).toThrow();
    });
    it("should return equally sized chunks if array length is diviable by the required number of chunks", function () {
        var input = [1, 2, 3, 4, 5, 6];
        var numberOfGroups = 3;
        var sizeOfChunck = Math.ceil(input.length / numberOfGroups);
        var remainder = input.length % sizeOfChunck;
        var expectedOutput = [[1, 2], [3, 4], [5, 6]];
        var actualOutput = groupBy_1.groupBy(input, numberOfGroups);
        expect(actualOutput).toBeTruthy();
        expect(actualOutput.length).toEqual(numberOfGroups);
        expect(actualOutput).toEqual(expectedOutput);
        actualOutput.forEach(function (item) {
            expect(item.length).toEqual(sizeOfChunck);
        });
    });
    it("should return N number of groups with N-1 groups are equal in size , if array length is not" +
        " diviable" +
        " by the required number" +
        " of chunks", function () {
        var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var numberOfGroups = 3;
        var output = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]];
        var actualOutput = groupBy_1.groupBy(input, numberOfGroups);
        expect(actualOutput).toBeTruthy();
        expect(actualOutput.length).toEqual(numberOfGroups);
        expect(actualOutput).toEqual(output);
    });
});
