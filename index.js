var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    strings:['a html developer','a css developer','a js developer'],
    autoStart:true,
    loop: true
});

// NOTE LOCALSTORAGE

var button = document.getElementById("button");

button.addEventListener("click",submit);

function submit(e){
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mob = document.getElementById("mobile").value;
    var reason = document.getElementById("reason").value;

    if(name.length !== 0 && email.length !== 0 && mob.length !== 0 && reason.length !== 0){
        localStorage.setItem("Name",name);
        localStorage.setItem("Email",email);
        localStorage.setItem("Mobile",mob);
        localStorage.setItem("Reason",reason);

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("reason").value = ""; 
    }else{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("reason").value = ""; 
        alert("Enter full details");
    } 
};


//NOTE FLOATING BUTTON

var mybutton = document.getElementById("Button");

window.onscroll = function() {scrolling()};

function scrolling() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
