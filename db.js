const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost/workshop').
then(conn=>{
    global.conn =conn.db('workshop')
}).catch(err=>console.log(err));
module.exports = {}