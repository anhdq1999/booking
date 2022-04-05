const userRouter = require('./users.js');


function route(app){

    app.use('/users',userRouter);
    
    app.get('/', (req, res) => {
        res.send('hello World');
    });
}
module.exports = route
