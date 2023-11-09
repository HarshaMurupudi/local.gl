const express = require("express");
const fs = require("fs"); // Or `import fs from "fs";` with ESM

const router = express.Router();

router.get("/folders/quotes/:quoteID", async (req, res) => {
  try {
    const { quoteID } = req.params;
    var isWin = process.platform === "win32";
    const parentQuote = quoteID.split("-")[0];

    const filePath = isWin
      ? `\\\\gl-fs01\\GLIQuotes\\Q${parentQuote}\\`
      : `/Volumes/GLIQuotes/Q${parentQuote}/`;
    const execPath = isWin ? `start "" "${filePath}"` : `open "${filePath}"`;

    if (fs.existsSync(filePath)) {
      // Do something
      await require("child_process").exec(execPath);

      res.status(200).json({
        status: "success",
      });
    } else {
      res.status(400).json({
        status: "Error",
        message: "No folder",
      });
    }
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
