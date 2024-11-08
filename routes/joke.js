
const express = require("express");
const {approveJoke, rejectJoke, getNewJoke, updateJoke, getJokeTypes, addNewJoke, submitToDeliverJokes } = require("../controllers/joke");
const { authMiddleware } = require("../middlewares/auth");
const router = express.Router();

router.get('/jokes/getNewJoke',authMiddleware, getNewJoke);
router.put('/jokes/update/:id',authMiddleware, updateJoke);
router.put('/jokes/approve/:id',authMiddleware, approveJoke);
router.delete('/jokes/reject/:id',authMiddleware, rejectJoke);
router.get('/jokes/types', getJokeTypes);
router.post('/jokes/newJoke',authMiddleware, addNewJoke);
router.put('/jokes/submitToDeliverJokes/:id',authMiddleware, submitToDeliverJokes);
module.exports = router;
