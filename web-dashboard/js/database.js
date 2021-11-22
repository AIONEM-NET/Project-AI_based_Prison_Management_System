
  // Web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA_-eys-mMu9A63YZmPNGB6pzBDGYQbZ1g",
    authDomain: "mobile-money-fraud-detection.firebaseapp.com",
    databaseURL: "https://mobile-money-fraud-detection-default-rtdb.firebaseio.com",
    projectId: "mobile-money-fraud-detection",
    storageBucket: "mobile-money-fraud-detection.appspot.com",
    messagingSenderId: "486574900235",
    appId: "1:486574900235:web:0f62cb1a93c71845d4330e",
    measurementId: "G-4BGTTSM698"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
