(function(){

    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCDBVquGHPaQUN2PnLAo38atbk3-XzB1i0",
      authDomain: "test-project-cccfb.firebaseapp.com",
      databaseURL: "https://test-project-cccfb.firebaseio.com",
      storageBucket: "test-project-cccfb.appspot.com",
    };
    firebase.initializeApp(config);
//var count=0;
//get elements
  const txtEmail=document.getElementById('txtEmail');
  const txtPassword=document.getElementById('txtPassword');
  const btnLogin=document.getElementById('btnLogin');
  const btnSignup=document.getElementById('btnSignup');
  const btnSignout=document.getElementById('btnSignout');

//add login event
  btnLogin.addEventListener("click", e=> {
  //get email and password
    const email=txtEmail.value;
    const pass=txtPassword.value;
    const auth=firebase.auth();
  //signin
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e=>console.log(e.message));
  //count++;
  });

//signup
  btnSignup.addEventListener("click",e=>
  {
  //get email and password
  //todo check for email
    const email=txtEmail.value;
    const pass=txtPassword.value;
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
      location='index.html';
    }else {
      {
        console.log('not logged in');
      //  if(count!=0){location='login.html';}
      }
    }
  });
}());
