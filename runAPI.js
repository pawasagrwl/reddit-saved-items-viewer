const { exec } = require('child_process');
const fs = require('fs').promises; // Use promises version for async/await

(async () => {
  try {
    // Read and parse the JSON file
    const data = await fs.readFile('./public/saved_items.json', 'utf8');
    const savedItems = JSON.parse(data);
    const lastPulled = savedItems.last_pulled;

    // Dynamically import inquirer
    const inquirerModule = await import('inquirer');
    const inquirer = inquirerModule.default;

    // Now, use `lastPulled` in your prompt message
    inquirer.prompt([
      {
        type: 'confirm',
        name: 'fetch',
        message: `Last pulled: ${lastPulled}.\n Do you want to pull saved posts again?`,
        default: false,
      },
    ]).then((answers) => {
      if (answers.fetch) {
        exec('python3 ./api/fetch_saved.py', (err, stdout, stderr) => {
          if (err) {
            console.error(`exec error: ${err}`);
            return;
          }
          console.log(`Python script output: ${stdout}`);
        });
      }
    });
  } catch (error) {
    console.error('Failed to read or parse saved_items.json:', error);
    // Handle error or fallback scenario here, perhaps by proceeding without the last pull date
  }
})();
