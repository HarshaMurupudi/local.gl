const express = require("express");

const router = express.Router();

router.get("/folders/parts/:partID", async (req, res) => {
  try {
    const { partID } = req.params;

    await require("child_process").exec(
      `start "" \\\\gl-fs01\\GLIParts\\${partID}\\`
    );

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "Error",
      message: error.message,
      code: error.code,
    });
  }
});

module.exports = router;
