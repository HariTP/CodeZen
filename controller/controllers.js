const problemList = require("../models/problemList");
const problemDescription = require("../models/problemDescription");

const handleGetProblemList = async (req, res) => {
  const data = await problemList.find({});
  res.send(data);
};

const handleGenerateProblemList = async (req, res) => {
  const body = req.body;
  await problemList
    .create({
      status: body.status,
      title: body.title,
      topics: body.topics,
      difficulty: body.difficulty,
    })
    .then(() => {
      console.log("data created");
      return res.json({ message: "Data created :)" });
    })
    .catch((err) => {
      console.log("data creation error: ", err);
      return res.status(500).json({ error: "Internal Servor error!" });
    });
};

const handleGetProblemDesc = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await problemDescription.findOne({ id: id });
  res.send(data);
};

const handleGenerateProblemDesc = async (req, res) => {
  const body = req.body;
  await problemDescription
    .create({
      id: body.id,
      problemStatement: body.problemStatement,
      examples: body.examples,
      constraints: body.constraints,
      // testcase: body.testcase,
    })
    .then(() => {
      console.log("data created");
      return res.json({ message: "Data created :)" });
    })
    .catch((err) => {
      console.log("data creation error: ", err);
      return res.status(500).json({ error: "Internal Servor error!" });
    });
};

module.exports = {
  handleGetProblemList,
  handleGenerateProblemList,
  handleGenerateProblemDesc,
  handleGetProblemDesc,
};
