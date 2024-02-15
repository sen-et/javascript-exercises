const repeatString = function(string, num) {
    let strReturn = '';
    for (let i = 1; i <= num; i++) {
        strReturn += string;
    }
    if (num < 0) {
        return 'ERROR';
    } else {
        return strReturn;
    }
};

// Do not edit below this line
module.exports = repeatString;
