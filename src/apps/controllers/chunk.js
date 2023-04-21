const chunk = (req, res) => {
  const { arr, size } = req.body;
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  res.status(200).json(result);
};

module.exports = chunk;
