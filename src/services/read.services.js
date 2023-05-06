const fs = require("fs");

const read = () => {
  const data = fs.readFileSync("./src/db/workouts.db.json", "utf8");
  // console.log(data);
  return JSON.parse(data);
};

module.exports = read;