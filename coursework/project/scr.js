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

var database = firebase.database().ref("Users");
var flag = 0;

var storage = firebase.storage();
var storageRef = storage.ref();
var imgRef = storageRef.child("bg.jpg");

imgRef.getDownloadURL().then(function(url){
    document.querySelector("body").style.backgroundImage = "url('" + url + "')";
}).catch(function(error) {
    console.error(error);
});



function send(form){
    var n = document.getElementById("name").value;
    var m = document.getElementById("mob").value;
    var em = document.getElementById("email").value;
    var pas = document.getElementById("pass").value;
    var passrep = document.getElementById("passrepeat").value;
    var dob = form.day.value + " " + form.month.value + " " + form.year.value;
    
    if(n == ""){
        alert("Enter name !!");
    }
    else if(m == ""){
        alert("Enter Mobile Number !!");
    }
    else if(em == ""){
        alert("Enter Email Id !!");
    }
    else if(pas == ""){
        alert("Enter Password !!");
    }
    else if(pas != passrep){
        alert("Password does not match !!");
    }
    else{
        flag = 1;
        var ob = {
            name : n,
            mob : m,
            email : em,
            pass : pas,
            dob : dob
        };
        database.push(ob);
        console.log("Pushed Successfully");
    }
    if(flag == 1){
        window.location="file:///F:/ITW/project/home.html";
    }
}