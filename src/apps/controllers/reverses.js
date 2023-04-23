const reverseArray = (req, res) => {
  try {
    const { arr } = req.body;
    const result = arr.reduce((value, index) => [index, ...value], []);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = reverseArray;
