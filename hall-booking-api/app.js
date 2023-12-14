// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/bookings', bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
