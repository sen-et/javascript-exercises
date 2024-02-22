const removeFromArray = function(arr, ...valRemove) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!valRemove.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
