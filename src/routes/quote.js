const express = require("express");
const fs = require("fs"); // Or `import fs from "fs";` with ESM

const router = express.Router();

router.get("/folders/quotes/:quoteID", async (req, res) => {
  try {
    const { quoteID } = req.params;

    if (fs.existsSync(`\\\\gl-fs01\\GLIQuotes\\Q${quoteID}\\`)) {
      // Do something
      await require("child_process").exec(
        `start "" \\\\gl-fs01\\GLIQuotes\\Q${quoteID}\\`
      );

      res.status(200).json({
        status: "success",
      });
    } else {
      res.status(400).json({
        status: "Error",
        message: "No folder",
      });
    }
    ``;
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