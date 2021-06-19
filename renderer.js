document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
  })
  
  document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.system()
    document.getElementById('theme-source').innerHTML = 'Syncing'
  })
console.timeLog("Sending notification")

const NOTIFICATION_TITLE = 'Show Support'
const NOTIFICATION_BODY = 'Star this project on GitHub to show your support!'
new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => open("https://github.com/Pugga12/my-first-nodejs-electron-app")