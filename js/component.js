function loadFooter() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        document.getElementById('load-footer').innerHTML = xhr.responseText;
      } else {
        console.log('Error loading footer:', xhr.status);
      }
    }
  };
  xhr.open('GET', '../html/footer.html', true);
  xhr.send();
}
document.addEventListener('DOMContentLoaded', function () {
  loadFooter();
});
