const uniqArrayObject = (req, res) => {
  const { arr } = req.body;
  const result = arr.filter((value, index, array) => {
    return (
      array.findIndex((item) => {
        return JSON.stringify(item) === JSON.stringify(value);
      }) === index
    );
  });
  res.status(200).json({ result });
};
module.exports = uniqArrayObject;
