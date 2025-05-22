// controllers/dashboardController.js
exports.getDashboard = (req, res) => {
  // Return dummy data for now; later, query the database for real data.
  res.json({
    message: 'Welcome to your dashboard!',
    data: {
      videos: [],
      audios: [],
      pdfs: [],
      pictures: [],
      favorites: []
    }
  });
};