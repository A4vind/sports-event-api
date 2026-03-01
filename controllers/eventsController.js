const db = require('../config/db');

exports.getAllEvents = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM events");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.createEvent = async (req, res) => {
  const { event_name, sport_type, location, event_date, max_participants } = req.body;

  try {
    await db.query(
      "INSERT INTO events (event_name, sport_type, location, event_date, max_participants) VALUES ($1,$2,$3,$4,$5)",
      [event_name, sport_type, location, event_date, max_participants]
    );

    res.status(201).json({ message: "Event created successfully" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};