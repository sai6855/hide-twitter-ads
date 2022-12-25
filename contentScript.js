window.addEventListener("scroll", () => {
  const elements = document.getElementsByTagName("span");
  if (!window.location.href.includes("twitter.com")) {
    return;
  }
  for (let i = 0; i < elements.length - 1; i++) {
    if (elements[i].innerText.toLowerCase().includes("promoted")) {
      if (elements[i].closest("article")) {
        elements[i].closest("article").style.display = "none";
      }
    }
  }
});
