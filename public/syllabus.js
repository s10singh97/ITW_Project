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

var sylRef1 = storageRef.child("syllabus/IIITK_CSE_Syllabus_Draft.1.pdf");
sylRef1.getDownloadURL().then(function(url){
    document.getElementById("div1").innerHTML += "<a class='gg' href='" + url + "' download>Download</a>";
}).catch(function(error) {
    console.error(error);
});

var sylRef2 = storageRef.child("syllabus/IIITK_CSE_Syllabus_Draft.2.pdf");
sylRef2.getDownloadURL().then(function(url){
    document.getElementById("div2").innerHTML += "<a class='gg' href='" + url + "' download>Download</a>";
}).catch(function(error) {
    console.error(error);
});

var sylRef3 = storageRef.child("syllabus/IIITK_CSE_Syllabus_Draft.3.pdf");
sylRef3.getDownloadURL().then(function(url){
    document.getElementById("div3").innerHTML += "<a class='gg' href='" + url + "' download>Download</a>";
}).catch(function(error) {
    console.error(error);
});

var sylRef4 = storageRef.child("syllabus/IIITK_CSE_Syllabus_Draft.4.pdf");
sylRef4.getDownloadURL().then(function(url){
    document.getElementById("div4").innerHTML += "<a class='gg' href='" + url + "' download>Download</a>";
}).catch(function(error) {
    console.error(error);
});

var sylRef5 = storageRef.child("syllabus/IIITK_CSE_Syllabus_Draft.5.pdf");
sylRef5.getDownloadURL().then(function(url){
    document.getElementById("div5").innerHTML += "<a class='gg' href='" + url + "' download>Download</a>";
}).catch(function(error) {
    console.error(error);
});

var sylRef6 = storageRef.child("syllabus/IIITK_CSE_Syllabus_Draft.6.pdf");
sylRef6.getDownloadURL().then(function(url){
    document.getElementById("div6").innerHTML += "<a class='gg' href='" + url + "' download>Download</a>";
}).catch(function(error) {
    console.error(error);
});

var sylRef7 = storageRef.child("syllabus/IIITK_CSE_Syllabus_Draft.7.pdf");
sylRef7.getDownloadURL().then(function(url){
    document.getElementById("div7").innerHTML += "<a class='gg' href='" + url + "' download>Download</a>";
}).catch(function(error) {
    console.error(error);
});

var sylRef8 = storageRef.child("syllabus/IIITK_CSE_Syllabus_Draft.8.pdf");
sylRef8.getDownloadURL().then(function(url){
    document.getElementById("div8").innerHTML += "<a class='gg' href='" + url + "' download>Download</a>";
}).catch(function(error) {
    console.error(error);
});

var sylRef9 = storageRef.child("syllabus/IIITK_CSE_Syllabus_Draft.9.pdf");
sylRef9.getDownloadURL().then(function(url){
    document.getElementById("div9").innerHTML += "<a class='gg' href='" + url + "' download>Download</a>";
}).catch(function(error) {
    console.error(error);
});