
  const navbar = document.getElementById('navbar');

function opensidebar(){
  navbar.classList.add('show')
}

function closesidebar(){
  navbar.classList.remove('show')
}




document.querySelector('.Projects').addEventListener('click', function() {
  fetch('about.html') // Load another page
    .then(response => response.text())
    .then(html => {
      document.getElementById('skill').innerHTML = html;

      // Wait a bit to make sure content is loaded
      setTimeout(() => {
        const target = document.querySelector('.projects');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          alert("Couldn't find this page (2)");
        }
      }, 100);
    });
});


document.addEventListener('click', function() {
  fetch('about.html') // Load another page
  .then(response => response.text())
    .then(html => {
      document.getElementById('page-body').innerHTML = html;

      // Wait a bit to make sure content is loaded
      setTimeout(() => {
        const target = document.querySelector('.projects');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          alert("Couldn't find this page (3)");
        }
      }, 100);
    });
});

document.addEventListener('click', function() {
  fetch('about.html') // Load another page
  .then(response => response.text())
    .then(html => {
      document.getElementById('mbody').innerHTML = html;

      // Wait a bit to make sure content is loaded
      setTimeout(() => {
        const target = document.querySelector('.projects');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          alert("Couldn't find this page (4)");
        }
      }, 100);
    });
});



