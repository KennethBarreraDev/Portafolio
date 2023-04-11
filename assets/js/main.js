const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


let skilsContent = select('.skills-content');
if (skilsContent) {
    let progress = select('.progress .progress-bar', true);
    progress.forEach((el) => {
      el.style.width = el.getAttribute('aria-valuenow') + '%'
    });
}




