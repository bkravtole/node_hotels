const mongoose = require('mongoose');
const mongourl ='mongodb://localhost:27017/hotels'
mongoose.connect(mongourl ,
     {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected to mongo server');
})

db.on('error', (err) => {
    console.log('error' , err)
})
db.on('disconnect' , () => {
    console.log('mongodb disconnect');
    
})

module.exports  = db