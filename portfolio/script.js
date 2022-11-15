let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');
let sideMenu = document.getElementById('sidemenu');
console.log(tabLinks);
console.log(tabContents);
function openTab(tabname){
  for(tabLink of tabLinks ){
    tabLink.classList.remove('active-link');
  }
  for(tabContent of tabContents){
    tabContent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-link');

  document.getElementById(tabname).classList.add('active-tab');
}
function openMenu(){
  sideMenu.style.right = "0";
}
function closeMenu(){
  sideMenu.style.right = "-200px";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbwgHx1XggLUuqba03vmv0Jhrkn2DdEuzp7A-BpWPl0Rk_rkbfQPdR9SAFt4OfJ81012sQ/exec'
const form = document.forms['submit-to-google-sheet']
let msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = 'Message sent successfully'
      setTimeout(function(){
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


