const mapKey = (req, res) => {
  try {
    const { keys, collections } = req.body;
    const result = collections.reduce((acc, obj) => {
      const newObj = {};
      keys.forEach((key) => {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = obj[key];
        }
      });
      return [...acc, newObj];
    }, []);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = mapKey;
