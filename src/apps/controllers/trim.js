const trimAll = (req, res) => {
  try {
    const { str } = req.body;
    const result = str.trim().split(/\s+/).join(" ");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = trimAll;
