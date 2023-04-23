const uniqArrayObject = (req, res) => {
  try {
    const { arr } = req.body;
    const result = arr.filter((value, index, array) => {
      return (
        array.findIndex((item) => {
          return JSON.stringify(item) === JSON.stringify(value);
        }) === index
      );
    });
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = uniqArrayObject;
