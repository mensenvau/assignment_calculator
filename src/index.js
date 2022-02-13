const { app, BrowserWindow } = require('electron');
const path = require('path');


const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 420,
    maxWidth: 400,
    maxHeight: 420,
    minWidth: 400,
    minHeight: 420 ,
    icon: __dirname + '\\logo.ico',
    autoHideMenuBar: true,
  });

  console.log(__dirname + '\\logo.ico' )
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  // mainWindow.webContents.openDevTools();  
};

 
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
}) 


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

 

