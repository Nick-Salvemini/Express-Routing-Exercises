const express = require('express');
const ExpressError = require('./expressError')
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

    let numsQuery = req.query.nums;
    let nums = numsQuery.split(',');
    let errors = ''

    nums.forEach((num) => {
        // console.log(typeof (num), Number(num))
        if (Number(num) == NaN) {
            // console.log(num)
            if (errors == '') {
                errors += num
            } else {
                errors += ', and ';
                errors += num
            }
        }
        // console.log('xxxxxxxxxx', errors)
    })

    // console.log('********', numsQuery)
    // console.log('!!!!!!!!!!', nums)
    // console.log('xxxxxxxxxx', errors)

    try {
        if (errors.length != 0) {
            throw new ExpressError("Numbers are required", 400)
        }
    } catch (error) {
        next(error)
    }

    let mean = 0;

    for (let i = 0; i < nums.length; i++) {
        mean += nums[i]
    }

    let valueNum = mean / nums.length

    return res.json(
        {
            response: {
                operation: "mean",
                value: valueNum
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

