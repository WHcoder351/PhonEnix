var firebaseConfig = {
      apiKey: "AIzaSyDs1kgMLMlqIXjQ--cvhPdH9no7UtLp_Uc",
      authDomain: "orionus-82de9.firebaseapp.com",
      databaseURL: "https://orionus-82de9-default-rtdb.firebaseio.com",
      projectId: "orionus-82de9",
      storageBucket: "orionus-82de9.appspot.com",
      messagingSenderId: "725640852491",
      appId: "1:725640852491:web:606e74eb384aad52cd830e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
UNVar = localStorage.getItem("Username!");
document.getElementById("unV").innerHTML = "Welcome " + UNVar + "";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("Nebula").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  //Start code
                  console.log("Room Name=" + Room_names);
                  row = "<div  class = 'room_name' id = " + Room_names + " onclick = 'Redirect(this.id)' >#" + Room_names + " </div><hr>";
                  document.getElementById("TR").innerHTML += row;
                  //End code
            });
      });
}
getData();
function AR(name) {
      console.log(name);
      Room = document.getElementById("Nebula").value;
      localStorage.setItem("RoomName", Room);
      firebase.database().ref("/").child(Room).update({
            purpose: "add Room"
      });
      window.location = "kwitter_page.html"
}
function Redirect(name) {
      console.log(name);
      localStorage.setItem("RoomName", name)
      window.location = "kwitter_page.html"
}
function LoG(){
      localStorage.removeItem("USER!!");
      localStorage.removeItem("RoomName");
      localStorage.removeItem("Message:");
      window.location = "index.html";
}
