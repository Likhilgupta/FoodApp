const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
const mongoURI = 'mongodb://5556srahul:rahul123@ac-0p2kwlv-shard-00-00.rjgzev6.mongodb.net:27017,ac-0p2kwlv-shard-00-01.rjgzev6.mongodb.net:27017,ac-0p2kwlv-shard-00-02.rjgzev6.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-urkd0v-shard-0&authSource=admin&retryWrites=true&w=majority' 

module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("foodCategory");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
            // listCollections({name: 'food_items'}).toArray(function (err, database) {
            // });
            //     module.exports.Collection = database;
            // });
        }
    })
};
