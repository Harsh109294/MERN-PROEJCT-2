const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');  // <-- yahi fix

dotenv.config();

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const existing = await User.findOne({ email: 'admin@example.com' });
    if(existing){
      console.log('Admin already exists');
    } else {
      const admin = new User({ email: 'admin@example.com', password: 'admin123' });
      await admin.save();
      console.log('Admin created');
    }
    mongoose.disconnect();
  })
  .catch(err => console.log(err));
