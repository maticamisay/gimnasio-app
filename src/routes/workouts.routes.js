const express = require("express");
const read = require("../services/read.services");
const {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controller/workouts.controllers");
const exampleMiddle = require("../middleware/exampleMiddle");
const router = express.Router();

// READ ALL
router.get("/", getAllWorkouts);

// READ ONE
router.get("/:id", getOneWorkout);

// CREATE
router.post("/", createWorkout);

// UPDATE
router.put("/", updateWorkout);

// DELETE
router.delete("/", deleteWorkout);

module.exports = router;
