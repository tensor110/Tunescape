const { app, BrowserWindow } = require('electron');
const express = require('express');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Create an Express.js app instance
  const expressApp = express();

  // Start the Express.js server
  const server = expressApp.listen(5000, () => {
    const port = server.address().port;
    console.log(`Express server running on port ${port}`);
  });

  mainWindow.loadURL(`http://localhost:6969/tunescape.com/stream`);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
