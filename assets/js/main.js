const yearNode = document.querySelector(".site-footer span");

if (yearNode) {
  yearNode.textContent = `${yearNode.textContent} · ${new Date().getFullYear()}`;
}
