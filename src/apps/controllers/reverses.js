const reverseArray = (req, res) => {
  const { arr } = req.body;
  const result = arr.reduce((value, index) => [index, ...value], []);
  res.status(200).json({ result });
};

module.exports = reverseArray;
