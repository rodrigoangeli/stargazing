const { app, BrowserWindow, globalShortcut, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const fs = require("fs");
const exec = require("child_process").exec;

const { CATCH_ON_MAIN, SEND_TO_RENDERER } = require("../src/Utils/constants");

let mainWindow;
let veja = [];
function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    titleBarStyle: "hidden",
    minWidth: 800,
    minHeight: 600,
    autoHideMenuBar: true,
    show: false,
    frame: false,
    transparent: true,
    //fullscreen:true,
    icon: path.join(__dirname, "assets/logo.png"),
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on("closed", () => (mainWindow = null));

  mainWindow.on("maximize", () => {
    mainWindow.webContents.send("maximized");
  });
  mainWindow.setMenu(null);

  mainWindow.on("unmaximize", () => {
    mainWindow.webContents.send("unmaximized");
  });

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
  /* globalShortcut.register('Esc', () => {
      app.quit();
  });*/
}
var dataEscrever = "";
ipcMain.on(CATCH_ON_MAIN, (event, arg) => {
  var consultaPerfil = exec("node src/Utils/vamove.js " + arg + " 80", {
    maxBuffer: 1024 * 5000,
  });

  consultaPerfil.stdout.on("data", function (data) {
    dataEscrever += data;
    mainWindow.send(SEND_TO_RENDERER, data);
  });
  consultaPerfil.on("error", function () {
    fs.writeFileSync("error.json", dataEscrever);
  });
  consultaPerfil.on("close", function () {
    fs.writeFileSync("close.json", dataEscrever);
  });
  consultaPerfil.stdout.on("end", function () {
    fs.writeFileSync("end.json", dataEscrever);
  });

  /*   exec("node src/Utils/vamove.js " + arg, function (error, stdout, stderr) {
    //adicionar "arg" depois do diretório.
    mainWindow.send(SEND_TO_RENDERER, stdout);
    if (error !== null) {
      console.log("exec error: " + error);
    }
  }); */
});

ipcMain.handle("minimize-event", () => {
  mainWindow.minimize();
});

ipcMain.handle("maximize-event", () => {
  mainWindow.maximize();
});

ipcMain.handle("unmaximize-event", () => {
  mainWindow.unmaximize();
});

ipcMain.handle("close-event", () => {
  app.quit();
});

app.on("browser-window-focus", () => {
  mainWindow.webContents.send("focused");
});

app.on("browser-window-blur", () => {
  mainWindow.webContents.send("blurred");
});

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
