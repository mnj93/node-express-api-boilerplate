const indexRoute = require('./server/routes/index');

module.exports = (app)=>{
    app.get('/',indexRoute);
}