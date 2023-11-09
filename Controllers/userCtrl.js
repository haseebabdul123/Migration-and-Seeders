const {Collages} = require("../models/collages");

const collage_list = async (req, res) => {
  try {
    let data = await Collages.findAll({});
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { collage_list };
