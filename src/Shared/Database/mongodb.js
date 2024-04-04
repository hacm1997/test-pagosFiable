const mongoose = require('mongoose');

const mongoUser = process.env.NODE_MONGO_USER;
const mongoPassword = process.env.NODE_MONGO_PASSWORD;
const mongoHost = process.env.NODE_MONGO_HOST;
const mongoPort = process.env.NODE_MONGO_PORT;
const replicaSet = process.env.NODE_MONGO_REPLICA_SET;

const mongoURI = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort},${mongoHost}:${mongoPort},${mongoHost}:${mongoPort}/?replicaSet=${replicaSet}&ssl=true&authSource=admin`;
console.log(process.env.NODE_ENV)
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conection to MongoDB success');
})
.catch(err => {
    console.error('Error to conect to MongoDB:', err.message);
});
