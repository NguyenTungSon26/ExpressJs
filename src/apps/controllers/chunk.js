const chunk = (req, res) => {
  try {
    const { arr, size } = req.body;
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = chunk;
