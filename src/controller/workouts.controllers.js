const read = require("../services/read.services");

exports.getAllWorkouts = (req, res) => {
  console.log(req.body)
  const data = read();
  res.json({ workouts: data });
};

exports.getOneWorkout = (req, res) => {
  const { id } = req.params;
  const data = read();
  const workout = data.find((workout) => workout.id === id);
  res.json({ workout });
};

exports.createWorkout = (req, res) => {
  const { body } = req;
  const data = read();
  data.push(body);
  res.json({ workouts: data });
};

exports.updateWorkout = (req, res) => {
  const { body } = req;
  const data = read();
  const index = data.findIndex((workout) => workout.id === body.id);
  data[index] = body;
  res.json({ workouts: data });
};

exports.deleteWorkout = (req, res) => {
  const { body } = req;
  const data = read();
  const index = data.findIndex((workout) => workout.id === body.id);
  data.splice(index, 1);
  res.json({ workouts: data });
}; 