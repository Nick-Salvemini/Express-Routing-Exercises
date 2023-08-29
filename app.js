const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean', (req, res) => {
    return res.send("hello")
});


/** Start server on port 3000 */
app.listen(3000, function () {
    console.log('Server started on port 3000.');
});

