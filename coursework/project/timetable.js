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

function div2(){
    var imgRef = storageRef.child("timetable/TimeTable_EvenSem_2017-18_20180301.1.pdf");

    imgRef.getDownloadURL().then(function(url){
        window.open(url,"_self");
    }).catch(function(error) {
        console.error(error);
    });
}

function div1(){
    var imgRef2 = storageRef.child("timetable/TimeTable_EvenSem_2017-18_20180301.2.pdf");

    imgRef2.getDownloadURL().then(function(url){
        window.open(url,"_self");
    }).catch(function(error) {
        console.error(error);
    });
}

function div4(){
    var imgRef3 = storageRef.child("timetable/TimeTable_EvenSem_2017-18_20180301.3.pdf");

    imgRef3.getDownloadURL().then(function(url){
        window.open(url,"_self");
    }).catch(function(error) {
        console.error(error);
    });
}

function div3(){
    var imgRef4 = storageRef.child("timetable/TimeTable_EvenSem_2017-18_20180301.4.pdf");

    imgRef4.getDownloadURL().then(function(url){
        window.open(url,"_self");
    }).catch(function(error) {
        console.error(error);
    });
}

function div6(){
    var imgRef5 = storageRef.child("timetable/TimeTable_EvenSem_2017-18_20180301.5.pdf");

    imgRef5.getDownloadURL().then(function(url){
        window.open(url,"_self");
    }).catch(function(error) {
        console.error(error);
    });
}

function div5(){
    var imgRef6 = storageRef.child("timetable/TimeTable_EvenSem_2017-18_20180301.6.pdf");

    imgRef6.getDownloadURL().then(function(url){
        window.open(url,"_self");
    }).catch(function(error) {
        console.error(error);
    });
}

// var imgRef7 = storageRef.child("timetable/TimeTable_EvenSem_2017-18_20180301.7.pdf");

// imgRef7.getDownloadURL().then(function(url){
//     document.writeln("<a href='" + url + "' download><br>VIII Sem CSE</a>");
// }).catch(function(error) {
//     console.error(error);
// });