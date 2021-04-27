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
//YOUR FIREBASE LINKS
Rn = localStorage.getItem("RoomName");
un = localStorage.getItem("Username!!");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
console.log(firebase_message_id);
console.log(message_data);
 name= message_data['name'];
message= message_data['message'];
like= message_data['like'];
nameTag = "<h4>" + name + "<img src = 'tick.png' class = 'user_tick'></h4>";
Messa = "<h4 class = 'message_h4'>" + message + "</h4>";
button_ = "<button class = 'btn btn-danger' id = " + firebase_message_id + " value=" +like + " onclick = 'updateLike(this.id)'>";
Swtu = "<span class = 'glyphicon glyphicon-thumbs-up'> Likes: " + like +"</span></button></hr>" ;
row = nameTag + Messa + button_ + Swtu;

                        //End code
                  }
            });
      });
}
getData();
function updateLike(message_id){
console.log(message_id);
button_Id = message_id;
likes = document.getElementById(button_Id).value;
uplike = Number(likes) + 1;
console.log(uplike);
firebase.database().ref(Rn).child(message_id).update({
   likes:uplike   
});
}
function SendMSG() {
      msg = document.getElementById("MSG").value;
      firebase.database().ref(Rn).push({
            name: un,
            message: msg,
            like: 0
      });
      document.getElementById("MSG").value = "";
      document.getElementById("output").innerHTML += row;
}
function L0G(){
      localStorage.removeItem("Username!");
      localStorage.removeItem("RoomName");
      window.location = "index.html";
}