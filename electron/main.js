import { app, BrowserWindow } from "electron";

const createWindow = async () => {
  const win = new BrowserWindow({
    center: true,
    webPreferences: {
      nodeIntegrationInWorker: true,
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false,
    },
  });
  if (app.isPackaged) {
    await win.loadFile("../index.html");
  } else {
    await win.loadURL(process.env.VITE_DEV_SERVER_URL);
  }
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});
