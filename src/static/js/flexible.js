document.addEventListener("DOMContentLoaded", () => {
  let htmlWidth = document.documentElement.clientWidth;
  // let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  let html = document.querySelector("html");
  let fontSize = htmlWidth / 10;
  // fontSize = fontSize > 50 ? 50 : fontSize;
  html.style.fontSize = `${fontSize}px`;
});
