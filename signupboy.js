(function(){

    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCDBVquGHPaQUN2PnLAo38atbk3-XzB1i0",
      authDomain: "test-project-cccfb.firebaseapp.com",
      databaseURL: "https://test-project-cccfb.firebaseio.com",
      storageBucket: "test-project-cccfb.appspot.com",
    };
    firebase.initializeApp(config);

    const signEmail=document.getElementById('signemail');
    const signPassword=document.getElementById('signpass');
    const btnSignup=document.getElementById('btnSignup');

    btnSignup.addEventListener("click",e=>
    {
    //get email and password
    //todo check for email
      const email=signEmail.value;
      const pass=signPassword.value;
      const auth=firebase.auth();
    //signin
      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(e=>console.log(e.message));
    });

    //add realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser=>{
      if(firebaseUser)
      {
        console.log(firebaseUser);
        location='login.html';
      }else {
        {
          console.log('not logged in');
        //  if(count!=0){location='login.html';}
        }
      }
    });
  }());
