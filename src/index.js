const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('combined'));
app.get('/', (res, req) => {
    return res.send('hello World');
});
app.listen(port, () => console.log(`Server is running at port :${port}`));
