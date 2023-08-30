const express = require('express');
const ExpressError = require('./expressError')
const { createErrStr, createQueryArr, findMean, findMedian, findMode } = require('./helpers')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    next()
})

app.get('/mean', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError("Numbers are required", 400)
        }
    } catch (error) {
        next(error)
    }

    let numsArr = createQueryArr(req.query.nums)
    let errorString = createErrStr(numsArr)

    try {
        if (errorString.length != 0) {
            errRes = ''
            if (errorString.includes(',')) {
                errRes = ' are not numbers.'
            } else { errRes = ' is not a number.' }
            throw new ExpressError(`${errorString}${errRes}`, 400)
        }
    } catch (error) {
        next(error)
    }

    return res.json(
        {
            response: {
                operation: "mean",
                value: findMean(numsArr)
            }
        })
});

app.get('/median', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError("Numbers are required", 400)
        }
    } catch (error) {
        next(error)
    }

    let numsArr = createQueryArr(req.query.nums)
    let errorString = createErrStr(numsArr)

    try {
        if (errorString.length != 0) {
            errRes = ''
            if (errorString.includes(',')) {
                errRes = ' are not numbers.'
            } else { errRes = ' is not a number.' }
            throw new ExpressError(`${errorString}${errRes}`, 400)
        }
    } catch (error) {
        next(error)
    }

    return res.json(
        {
            response: {
                operation: "median",
                value: findMedian(numsArr)
            }
        })
});

app.get('/mode', (req, res, next) => {
    try {
        if (!req.query.nums) {
            throw new ExpressError("Numbers are required", 400)
        }
    } catch (error) {
        next(error)
    }

    let numsArr = createQueryArr(req.query.nums)
    let errorString = createErrStr(numsArr)

    try {
        if (errorString.length != 0) {
            errRes = ''
            if (errorString.includes(',')) {
                errRes = ' are not numbers.'
            } else { errRes = ' is not a number.' }
            throw new ExpressError(`${errorString}${errRes}`, 400)
        }
    } catch (error) {
        next(error)
    }

    return res.json(
        {
            response: {
                operation: "mode",
                value: findMode(numsArr)
            }
        })
});



app.use((error, req, res, next) => {
    res.status(error.status).send(error.msg)
})

/** Start server on port 3000 */
app.listen(3000, function () {
    console.log('Server started on port 3000.');
});

