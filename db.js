const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

MongoClient.connect('mongodb://localhost/workshop').
then(conn=>{
    global.conn =conn.db('workshop')
}).catch(err=>console.log(err));

function findAll(callback){
    global.conn.collection("customers").find().toArray(callback);
}
function findOne(id,callback){
    global.conn.collection("customers").findOne({_id:new ObjectId(id)},callback);
}

module.exports = {
    findAll,
    findOne
}