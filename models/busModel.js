const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the BusSchedule model
const BusSchedule = sequelize.define('BusSchedule', {
  busNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  departureTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  route: {
    type: DataTypes.STRING,
    allowNull: false
  },
  availableSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'bus_schedules',
  timestamps: false, // Disable Sequelize's automatic timestamp columns (createdAt, updatedAt)
});

module.exports = BusSchedule;
