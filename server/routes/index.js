const userRouter = require('./users.js');

const authRouter = require('./auth.js');

function route(app) {
    app.use('/users', userRouter);

    app.use('/auth', authRouter);

    app.get('/', (req, res) => {
        res.send('hello World');
    });
}
module.exports = route;
