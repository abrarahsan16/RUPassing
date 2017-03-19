(function(){

    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCDBVquGHPaQUN2PnLAo38atbk3-XzB1i0",
      authDomain: "test-project-cccfb.firebaseapp.com",
      databaseURL: "https://test-project-cccfb.firebaseio.com",
      storageBucket: "test-project-cccfb.appspot.com",
    };
    firebase.initializeApp(config);
const btnSignout=document.getElementById('btnSignout');

btnSignout.addEventListener("click", e=> {
firebase.auth().signOut().then(function() {
  console.log('Signed Out');
  location='login.html';
}, function(error) {
  console.error('Sign Out Error', error);
});
});

    console.log(firebase);
    var database=firebase.database();
    var ref=database.ref('scores');

    var data={
      name:"MTH240",
      score:100
    }
    ref.push(data);
    }());
