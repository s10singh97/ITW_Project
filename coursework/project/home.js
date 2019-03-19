// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBtCUoxY6tj4Uvc83gHRnJPca3_ccp9EzA",
//     authDomain: "student-resource-center.firebaseapp.com",
//     databaseURL: "https://student-resource-center.firebaseio.com",
//     projectId: "student-resource-center",
//     storageBucket: "student-resource-center.appspot.com",
//     messagingSenderId: "162447915857"
// };
// firebase.initializeApp(config);

// var storage = firebase.storage();
// var storageRef = storage.ref();
// var imgRef = storageRef.child("img1.jpg");

// imgRef.getDownloadURL().then(function(url){
//     document.querySelector("body").style.backgroundImage = "url('" + url + "')";
//     document.querySelector("body").style.backgroundSize = "100% 80%";
// }).catch(function(error) {
//     console.error(error);
// });