let observer = new MutationObserver((allEvents) => {
  allEvents.forEach((e) => {
    if (
      e.target.textContent == 0 ||
      e.removedNodes[0].data > e.target.textContent
    ) {
      e.target.parentNode.childNodes[9].childNodes[1].setAttribute(
        "disabled",
        "disabled"
      );
    } else {
      e.target.parentNode.childNodes[9].childNodes[1].removeAttribute(
        "disabled",
        "disabled"
      );
    }
  });
});

observer.observe(document.getElementById("table"), {
  childList: true,
  subtree: true,
  characterData: true,
});
