const fs = require('fs');
const path = require('path');

// Function to create directories recursively
function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Root directory
const projectRoot = 'Hackathon-Project';

// Directories structure
const directories = [
  `${projectRoot}/server/controllers`,
  `${projectRoot}/server/models`,
  `${projectRoot}/server/routes`,
  `${projectRoot}/server/middleware`,
  `${projectRoot}/server/config`,
  `${projectRoot}/server/utils`,
  `${projectRoot}/model/data`,
  `${projectRoot}/model/scripts`,
  `${projectRoot}/model/models`,
  `${projectRoot}/client/public`,
  `${projectRoot}/client/src`,
  `${projectRoot}/client/components`,
  `${projectRoot}/client/pages`,
  `${projectRoot}/client/services`,
  `${projectRoot}/client/store`,
];

// Files to create
const files = [
  `${projectRoot}/server/app.js`,
  `${projectRoot}/server/server.js`,
  `${projectRoot}/server/package.json`,
  `${projectRoot}/model/requirements.txt`,
  `${projectRoot}/client/App.js`,
  `${projectRoot}/client/package.json`,
  `${projectRoot}/README.md`,
];

// Create directories
directories.forEach(createDirectory);

// Create files
files.forEach((filePath) => {
  fs.writeFileSync(filePath, '', { flag: 'wx' });
  console.log(`Created file: ${filePath}`);
});

console.log('Project structure created successfully!');
