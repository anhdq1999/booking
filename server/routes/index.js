const userRouter = require('./users.js');
const roleRouter = require('./roles.js')

function route(app){

    app.use('/users',userRouter);
    
    app.use('/roles',roleRouter);

    app.get('/', (req, res) => {
        res.send('hello World');
    });
}
module.exports = route
