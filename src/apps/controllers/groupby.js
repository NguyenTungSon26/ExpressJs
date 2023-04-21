const groupBy = (req, res) => {
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
};
module.exports = groupBy;
