const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 1600,
        height: 1000,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,                            // 设置为false，才能在渲染进程中使用electron api
            preload: path.join(__dirname, 'preload.js')             // 预加载js
        }
    });

    win.loadFile('index.html');
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
})