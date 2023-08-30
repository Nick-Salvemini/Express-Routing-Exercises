function createQueryArr(queryStr) {
    let nums = queryStr.split(',');
    return nums
}

function createErrStr(arr) {
    let errorString = ''

    arr.forEach((num) => {
        if (!Number(num)) {
            if (errorString == '') {
                errorString += num
            } else {
                errorString += ', and ';
                errorString += num
            }
        }
    })
    return errorString
}

function findMean(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += Number(arr[i])
    }

    return total / arr.length
}

function findMedian(arr) {
    let median = 0
    arr.sort()
    if (arr.length % 2 != 0) {
        median = arr[Math.floor(arr.length / 2)]
    } else {
        median = findMean([arr[Math.floor(arr.length / 2)], arr[Math.floor(arr.length / 2) - 1]])
    }
    return median
}

function findMode(arr) {
    let obj = {}
    arr.forEach((num) => {
        if (Object.keys(obj).includes(num)) {
            obj[num] += 1
            console.log(Object.keys(obj).includes(num), obj, num)
        } else {
            obj[num] = 1
            console.log(Object.keys(obj).includes(num), obj, num)
        }
    })

    let max = 0
    let mode

    for (let num in obj) {
        if (obj[num] > max) {
            max = obj[num];
            mode = num
        }
    }

    return mode
}

module.exports = { createErrStr, createQueryArr, findMean, findMedian, findMode };