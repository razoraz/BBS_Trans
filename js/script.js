const sections = document.querySelectorAll('.fade-section');

window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    // Kalau bagian masuk ke layar (misal 100px sebelum viewport bawah)
    if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
      section.classList.add('show');
      section.classList.remove('hide');
    }
    // Kalau bagian sudah keluar layar
    else {
      section.classList.remove('show');
      section.classList.add('hide');
    }
  });
});

function toggleMenu() {
  const menuList = document.getElementById('menu-list');
  const menuExtra = document.getElementById('menu-extra');

  menuList.classList.toggle('show');
  menuExtra.classList.toggle('show');
}
