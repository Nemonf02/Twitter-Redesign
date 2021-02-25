const mongoose = require('mongoose');
const mongoPath = 'Mongodb://localhost:27017/twitter?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

module.exports = async() => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  return mongoose;
  
} 