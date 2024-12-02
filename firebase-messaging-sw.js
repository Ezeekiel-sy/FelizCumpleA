importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAAyb70maz_p0io4ReeRrP-PGIm42YMHhk",
    authDomain: "feliz-cumple-amor-e05e2.firebaseapp.com",
    projectId: "feliz-cumple-amor-e05e2",
    storageBucket: "feliz-cumple-amor-e05e2.firebasestorage.app",
    messagingSenderId: "533401638338",
    appId: "1:533401638338:web:547e3446d18963ac5c325b",
    measurementId: "G-YGMWW589WC"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
    console.log('Mensaje en segundo plano:', payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon,
    });
});
