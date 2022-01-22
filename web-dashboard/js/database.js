
  // Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0KRlil7QoaqaZvWNLszBVfWcC47Ry33M",
  authDomain: "ai-based-prison-management.firebaseapp.com",
  databaseURL: "https://ai-based-prison-management-default-rtdb.firebaseio.com",
  projectId: "ai-based-prison-management",
  storageBucket: "ai-based-prison-management.appspot.com",
  messagingSenderId: "854442664893",
  appId: "1:854442664893:web:79b42e08ec3dcab76a28d4",
  measurementId: "G-R24EKKRZ18"
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

  function isEmpty(object) {
    return object == null || object == "undefined" || object.toString().trim().length === 0;
  }

  function notEmpty(object) {
    return !isEmpty(object) ? object : " ";
  }

  function showToast(message, button, link) {
    AioNem.toast("<span>"+message+"</span>&nbsp<a class=&quot;btn light-default_color bold &quot; href='"+link+"'>"+button, 6000, "rounded");
  }
