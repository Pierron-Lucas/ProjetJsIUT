// Enregistrement du Service Worker

if ('serviceWorker' in navigator) {

    navigator.serviceWorker
  
      .register('/my-custom-pwa/sw.js') // à adapter à l'URL du projet
  
      .then(() => { console.log('Service Worker Registered'); });
  
  }