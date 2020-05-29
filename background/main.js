const { app, BrowserWindow } = require("electron");


function createWindow() {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    transparent: true,
    frame: false,
    resizable: false,
  });

  win.loadFile("./renderer/index.html");

  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
