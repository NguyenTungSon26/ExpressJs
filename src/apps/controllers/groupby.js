const groupBy = (req, res) => {
  try {
    const { collection, field } = req.body;
    const result = collection.reduce((result, item) => {
      const key = item[field];
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(item);
      return result;
    }, {});
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = groupBy;
