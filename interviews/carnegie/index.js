const registerNow = () => {
  alert('Register Now button was clicked!');
}

const viewVisitOptions = () => {
  alert('View Visit Options button was clicked!');
}

const showModal = () => {
  let modal = document.querySelector('.modal');
  modal.style.display = "block";
}

document.addEventListener('click', function(e) {
  let modal = document.querySelector('.modal');
  let button = document.querySelector('.show-modal-button');
  if (!modal.contains(e.target) && !button.contains(e.target)) {
      modal.style.display = 'none';
  }
});