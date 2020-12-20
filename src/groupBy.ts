export const groupBy = (array: any[], groupNumber: number) => {

    //function guards
    if (!array) throw new Error("Array parameter cannot be null or undefined");
    if (array.length == 0) throw new Error("Array parameter cannot be empty");
    if (groupNumber === 0 || groupNumber < 0) throw new Error('groupNumber cannot be 0 or negative number');
    if (groupNumber > array.length) throw new Error('groupNumber cannot be more than array length');


    //Get group size and sizeOfLastGroup
    const remainder = array.length % groupNumber;

    //initialze the resulted array
    let result = [];

    // Start splitting the array
    if (remainder === 0) {
        const chunkSize = array.length / groupNumber
        //Split array into equal-size chunks if array length is dividable by number of groups
        for (let i = 0; i < groupNumber; i++) {
            //Add the chunk to the result and remove it from original array and loop
            result.push(array.slice(0, chunkSize));
            array.splice(0, chunkSize);
        }
    } else {
        //if the array.length is not dividable by the number of groups, work out the largest equal
        const chunkSize = Math.floor((array.length - 1) / Math.max((groupNumber - 1), 2))
        for (let i = 0; i < groupNumber; i++) {
            if (i === groupNumber - 1)
                result.push(array.slice(0));
            else
                result.push(array.slice(0, chunkSize));
            array.splice(0, chunkSize);
        }
        console.log(result);
    }
    return result;
};
