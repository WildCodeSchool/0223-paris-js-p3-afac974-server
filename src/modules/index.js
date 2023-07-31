const router = require("express").Router();

const userRouter = require("./users");
const techniqueRouter = require("./technique");
const categoryRouter = require("./category");
const artsRouter = require("./arts");
const authorsRouter = require("./authors");

router.use("/users", userRouter);
router.use("/technique", techniqueRouter);
router.use("/category", categoryRouter);
router.use("/arts", artsRouter);
router.use("/authors", authorsRouter);

module.exports = router;