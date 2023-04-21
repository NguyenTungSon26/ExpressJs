const uniq = (req, res) => {
  const { arr } = req.body;
  const result = arr.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  res.status(200).json({ result });
};

module.exports = uniq;
