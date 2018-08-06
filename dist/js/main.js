// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

/* CONTACT FORM */
function submitForm(){
  document.getElementById("mybtn").disabled = true;
  document.getElementById("status").innerHTML = 'please wait ...';
  var formdata = new FormData();
  formdata.append("n", document.getElementById("n").value);
  formdata.append("e", document.getElementById("e").value);
  formdata.append("m", document.getElementById("m").value);
  var ajax = new XMLHttpRequest();
  ajax.open("POST", "../dist/contact_parser.php");
  ajax.onreadystatechange = function() {
      if(ajax.readyState == 4 && ajax.status == 200) {
          if(ajax.responseText == "success"){
            document.getElementById("my_form").innerHTML = '<h2>Thanks ' + document.getElementById("n").value + ', your message has been sent!</h2>';
              setTimeout(function(){ location.reload(); }, 3000);
          } else {
            document.getElementById("status").innerHTML = ajax.responseText;
            document.getElementById("mybtn").disabled = false;
          }
      }
  }
  ajax.send( formdata );
}
