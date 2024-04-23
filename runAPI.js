const { exec } = require("child_process");
const fs = require("fs").promises;
const path = require("path");

// Define paths for source and destination files
const sourcePath = path.join(__dirname, "saved_items.json");
const destinationPath = path.join(__dirname, "public", "saved_items.json");

/**
 * Moves the saved_items.json file from the root to the public folder.
 */
async function moveFile() {
  try {
    await fs.rename(sourcePath, destinationPath);
    console.log("File moved to the public folder successfully.");
  } catch (error) {
    console.error("Error moving the file:", error);
  }
}

/**
 * Executes the Python script to fetch saved Reddit items, then moves the output file.
 */
function runPythonScriptAndMoveFile() {
  console.log("Running Python script to fetch saved items...");
  exec("python ./api/fetchItems.py", (err, stdout) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    console.log(`Python script output: ${stdout}`);
    moveFile(); // Move file after Python script execution
  });
}

/**
 * Checks if the saved_items.json file exists in the public folder and decides whether to fetch new data.
 */
async function checkFileAndDecideAction() {
  try {
    await fs.access(destinationPath);

    const data = await fs.readFile(destinationPath, "utf8");
    const { last_pulled: lastPulled } = JSON.parse(data);

    // Dynamically import inquirer to prompt the user
    const { default: inquirer } = await import("inquirer");
    const answers = await inquirer.prompt({
      type: "confirm",
      name: "fetch",
      message: `Last pulled: ${lastPulled}.\n Do you want to pull saved posts again?`,
      default: false,
    });

    if (answers.fetch) {
      runPythonScriptAndMoveFile();
    }
  } catch (error) {
    console.log(
      "No saved_items.json found or an error occurred, automatically fetching saved items..."
    );
    runPythonScriptAndMoveFile();
  }
}

// Initiate the check and possibly fetch process
checkFileAndDecideAction();
