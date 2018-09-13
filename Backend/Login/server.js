const port = process.env.SERVER_PORT || 9999;
const http = require('http');
const db = require('mongoose');
const app = require('./app.js');

//Node JS Web Server
http.createServer(app).listen(port, () => { console.log(`NODE JS Server online on port ${port}`) });

//MongoDB Database Server
db.connect(process.env.MONGO_DB_CONNECTIONSTRING, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Database Server online on port 27017'))
    .catch((err) => { console.log(err) });

db.set('useCreateIndex', true);