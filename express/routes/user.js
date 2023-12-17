const user = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.post("/", user.create);
router.get("/", user.getUsers);
router.get("/:id", user.getUser);
router.put("/:id", user.updateUser);
router.delete("/:id", user.deleteUser);

module.exports = router;
