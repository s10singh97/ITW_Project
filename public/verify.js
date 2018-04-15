// Initialize Firebase
var config = {
    apiKey: "AIzaSyBtCUoxY6tj4Uvc83gHRnJPca3_ccp9EzA",
    authDomain: "student-resource-center.firebaseapp.com",
    databaseURL: "https://student-resource-center.firebaseio.com",
    projectId: "student-resource-center",
    storageBucket: "student-resource-center.appspot.com",
    messagingSenderId: "162447915857"
};
firebase.initializeApp(config);

var storage = firebase.storage();
var storageRef = storage.ref();
var imgRef = storageRef.child("bg.jpg");

imgRef.getDownloadURL().then(function(url){
    document.querySelector("body").style.backgroundImage = "url('" + url + "')";
}).catch(function(error) {
    console.error(error);
});

var database = firebase.database().ref("Users");
var id = new Array();
var pa = new Array();
var i = 0, flag = 0;
var query = firebase.database().ref("Users").orderByKey();
  query.once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var childData = childSnapshot.val();
        id[i] = childData.email;
        pa[i] = childData.pass;
        i++;
    });
  });

function verify(form){
  for(var j = 0; j < i; j++){
    if((id[j] == form.email.value) && (pa[j] == form.pass.value)){
      flag = 1;
      break;
    }
  }
  if(flag == 1){
    window.alert("Login Successful !!");
    window.location="smaple2.html";
  }
  else{
    window.alert("Wrong Credentials !!");
    form.email.value = "";
    form.pass.value = "";
  }
}

function sp(){
  window.location="signup.html";
}