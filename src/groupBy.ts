function Split(numberOfGroups: number, result: any[], collection: any[], size: number) {
    //Split the collection into chunks
    for (let i = 0; i < numberOfGroups; i++) {
        //Push each chunk into the Result and then remove from the collection
        result.push(collection.slice(0, size));
        collection.splice(0, size);
    }
}

export const groupBy = (collection: any[], numberOfGroups: number) => {

    //function guards
    if (!collection) throw new Error("Array parameter cannot be null or undefined");
    if (collection.length == 0) throw new Error("Array parameter cannot be empty");
    if (numberOfGroups === 0 || numberOfGroups < 0) throw new Error('numberOfGroups cannot be 0 or negative number');
    if (numberOfGroups > collection.length) throw new Error('numberOfGroups cannot be more than collection length');


    //Workout if the Array can be split evenly into N number of groups. Remainder have to be zero.
    const remainder = collection.length % numberOfGroups;

    //Initialize the resulted collection
    let result : any[] = [];

    // If remainder is zero, then all groups will be split evenly
    if (remainder === 0) {
        //Get size of group
        const size = collection.length / numberOfGroups
        Split(numberOfGroups, result, collection, size);
    } else {
        /*
        If collection cannot be split evenly, then the last group will contain the remainder.
        That means that instead of dividing the collection on N - which represent the number of groups-, we will
         divide on N-1 instead. That's becuase 1 group will contain remainder.
         */
        const size = Math.floor((collection.length-1) / Math.max((numberOfGroups - 1), 2))
        Split(numberOfGroups-1, result, collection, size);
        //add the remainder to the result
        result.push(collection.slice(0));

    }
    return result;
};
