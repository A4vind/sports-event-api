app.use('/events', eventRoutes);
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const eventRoutes = require('./routes/events');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/events', eventRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get('/', (req, res) => {
  res.send("Sports Event API is Running 🚀");
});