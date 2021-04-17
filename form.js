

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCcbUzG0ON-BEmnVMIN_t2dpDi7K6RIY0g",
    authDomain: "fakenews-aa8a7.firebaseapp.com",
    projectId: "fakenews-aa8a7",
    storageBucket: "fakenews-aa8a7.appspot.com",
    messagingSenderId: "61332180525",
    databaseURL: "https://fakenews-aa8a7-default-rtdb.firebaseio.com",
    appId: "1:61332180525:web:540e7ded4c4141c03e72a4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    const inputDOM = document.getElementById("input");
    const input = inputDOM;
    const inputSearch = document.getElementById("input-search");
    const info = document.getElementById("result");
    const upvoteSearch = document.getElementById("upvote-result");
    const downSearch = document.getElementById("downvote-result");
    const siteUrl = document.getElementById("site-result");
    const trust = document.getElementById('trust');
    const untrust = document.getElementById('notrust');
    const site = document.getElementById('site');
  const auth = firebase.auth();
  function signUp(){
      var email= document.getElementById("email");
      var password = document.getElementById("password");

       auth.createUserWithEmailAndPassword(email.value, password.value).then(()=>{
           alert("sign up. Now sign in")
       }).catch((error)=>{
           alert(error);
       })


  }
  function checkSite(){
    const url = inputSearch.value.replace(".", "");
    database.ref('sites/'+ url).get().then(response =>{
        info.setAttribute("style","display: flex");
        upvoteSearch.innerHTML = `${response.val().upVotes} upvotes`;
        downSearch.innerHTML = `${response.val().downVotes} downvotes`;
        siteUrl.innerHTML = `${inputSearch.value}`
        // console.log(response.val().googlero.upVotes)

    })
  }






  function signIn(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");

    auth.signInWithEmailAndPassword(email.value, password.value)
    .then((user)=>{
        console.log(user);
        console.log(auth.currentUser)
        window.location = 'home.html'
    })
    .catch((error) =>{
        alert(error.message);
    });

  }






  function upScore() {
      const user = auth.currentUser;

   database.ref('users/' + user.uid).get().then(response =>{
       if(response.val()){
        const websites = Object.values(response.val())

        if(websites.find(element => element === input.value)){

            alert("Ai mai votat o data")
        }
        else{
           

            database.ref('users/' + user.uid).push(
                input.value
            )
            const url = input.value.replace(".", "");
    database.ref('sites/'+ url).get().then(response =>{

        if(response.val()){
            let upVotes = response.val().upVotes;
            let downVotes = response.val().downVotes;
            site.innerHTML = `site-ul ${input}`
         
            console.log("line 101");
            trust.innerHTML= `${upVotes + 1} au votat increderea site-ului`;
            untrust.innerHTML= `${downVotes} nu au votat increderea site-ului`;

            database.ref('sites/' + url).update(
                {upVotes: upVotes+1
                }
            )
            inputDOM.value = "";
         }
        else{
            site.innerHTML = `site-ul ${input.value}`
                console.log("line 114")
               
                trust.innerHTML= `1 a votat increderea site-ului`;
                untrust.innerHTML= `0 nu au votat increderea site-ului`;

            database.ref('sites/' + url).update(
                {upVotes: 1,
                downVotes:0
                }
            )
            inputDOM.value = "";
        }
    })

        }
       }
       else{
        const url = input.value.replace(".", "");
        database.ref('users/' + user.uid).push(
            input.value
        )
        database.ref('sites/'+ url).get().then(response =>{

            if(response.val()){
                let upVotes = response.val().upVotes;
                let downVotes = response.val().downVotes;
                site.innerHTML = `site-ul ${input.value}`
                console.log("line 139")
                trust.innerHTML= `${upVotes + 1} au votat increderea site-ului`;
                untrust.innerHTML= `${downVotes} nu au votat increderea site-ului`;

                database.ref('sites/' + url).update(
                    {upVotes: upVotes+1
                    }
                )
                inputDOM.value = "";
             }
             
            else{
                site.innerHTML = `site-ul ${input.value}`
                console.log("line 152")
                console.log(input);
                trust.innerHTML= `1 a votat increderea site-ului`;
                untrust.innerHTML= `0 nu au votat increderea site-ului`;

                database.ref('sites/' + url).update(
                    {upVotes: 1,
                    downVotes:0
                    }
                )
                inputDOM.value = "";
            }
        })

       }

   })

  }

  function downScore() {
    const user = auth.currentUser;

   database.ref('users/' + user.uid).get().then(response =>{
       if(response.val()){
        const websites = Object.values(response.val())

        if(websites.find(element => element === input.value)){

            alert("Ai mai votat o data")
        }
        else{
            site.innerHTML = `site-ul ${input.value}`

            database.ref('users/' + user.uid).push(
                input.value
            )
            const url = input.value.replace(".", "");
    database.ref('sites/'+ url).get().then(response =>{

        if(response.val()){
            let upVotes = response.val().upVotes;
            let downVotes = response.val().downVotes;
            site.innerHTML = `site-ul ${input.value}`
            trust.innerHTML= `${upVotes} au votat increderea site-ului`;
            untrust.innerHTML= `${downVotes + 1} nu au votat increderea site-ului`;

            database.ref('sites/' + url).update(
                {downVotes: downVotes+1
                }
            )
            inputDOM.value = "";
         }
        else{
            site.innerHTML = `site-ul ${input.value}`
            trust.innerHTML= `0 au votat increderea site-ului`;
            untrust.innerHTML= `1 nu au votat increderea site-ului`;

            database.ref('sites/' + url).update(
                {upVotes: 0,
                downVotes:1
                }
            )
            inputDOM.value = "";
        }
    })
        }
       }
       else{
        const url = input.value.replace(".", "");
        database.ref('users/' + user.uid).push(
            input.value
        )
        database.ref('sites/'+ url).get().then(response =>{

            if(response.val()){
                let upVotes = response.val().upVotes;
                let downVotes = response.val().downVotes;
                site.innerHTML = `site-ul ${input.value}`
                trust.innerHTML= `${upVotes } au votat increderea site-ului`;
                untrust.innerHTML= `${downVotes + 1} nu au votat increderea site-ului`;

                database.ref('sites/' + url).update(
                    {downVotes: downVotes+1
                    }
                )
                inputDOM.value = "";
             }
            else{
                site.innerHTML = `site-ul ${input.value}`
                trust.innerHTML= `0 a votat increderea site-ului`;
                untrust.innerHTML= `1 nu au votat increderea site-ului`;

                database.ref('sites/' + url).update(
                    {upVotes: 0,
                    downVotes:1
                    }
                )
                inputDOM.value = "";
            }
        })

       }

   })


  }
  function signOut(){
      auth.signOut();
      window.location='index.html';
      alert("Signed Out");
  }
