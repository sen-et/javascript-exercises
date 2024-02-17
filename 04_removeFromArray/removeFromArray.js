const removeFromArray = function(arr, ...valRemove) {
    let newArray = [];
    arr.forEach((i) => {
        if (!valRemove.includes(i)) {
            newArray.push(i);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
