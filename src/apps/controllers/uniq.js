const uniq = (req, res) => {
  try {
    const { arr } = req.body;
    const result = arr.filter(
      (value, index, array) => array.indexOf(value) === index
    );
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = uniq;
