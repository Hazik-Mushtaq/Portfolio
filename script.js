
  const navBtns = document.querySelectorAll('.navBtn');

  navBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      // Optional: prevent the link from jumping if you’re not navigating
      // e.preventDefault(); 

      navBtns.forEach(b => b.classList.remove('active')); // remove active from all
      this.classList.add('active'); // set active on clicked one
    });
  });
