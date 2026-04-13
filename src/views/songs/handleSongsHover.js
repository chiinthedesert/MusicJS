export function handleSongsHover() {
  app.addEventListener("mouseover", (e) => {
    const item = e.target.closest(".track-item");
    if (!item) return;

    item.classList.add("surface-variant");
  });

  app.addEventListener("mouseout", (e) => {
    const item = e.target.closest(".track-item");
    if (!item) return;

    item.classList.remove("surface-variant");
  });
}
