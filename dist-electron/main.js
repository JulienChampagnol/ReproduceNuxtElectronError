import { app as e, BrowserWindow as o } from "electron";
const t = async () => {
  const n = new o({
    center: !0,
    webPreferences: {
      nodeIntegrationInWorker: !0,
      contextIsolation: !0,
      nodeIntegration: !1,
      webSecurity: !1
    }
  });
  e.isPackaged ? await n.loadFile("../index.html") : await n.loadURL(process.env.VITE_DEV_SERVER_URL);
};
e.whenReady().then(() => {
  t();
});
e.on("window-all-closed", () => {
  e.quit();
});
