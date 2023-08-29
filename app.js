const express = require('express');
const ExpressError = require('./expressError')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean', (req, res) => {
    if (!req.query.nums) {
        throw new ExpressError("Numbers are required", 400)
    }

    let numsQuery = req.query.nums;
    let nums = numsQuery.split(',');
    let errors = []

    nums.forEach((num) => {
        if (Number(num) == NaN) {
            errors.push(num)
        }
    })



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


/** Start server on port 3000 */
app.listen(3000, function () {
    console.log('Server started on port 3000.');
});

