const express = require('express');
const sequelize = require('./config/db');
const busRoutes = require('./routes/busRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', busRoutes); // ✅ Using correct routes

const PORT = process.env.PORT || 5000;

sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected');
    return sequelize.sync();
  })
  .then(() => {
    console.log('✅ Models synchronized');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ DB connection error:', err.message);
  });
