const trimAll = (req, res) => {
  const { str } = req.body;
  const result = str.trim().split(/\s+/).join(" ");
  res.status(200).json(result);
};

module.exports = trimAll;
