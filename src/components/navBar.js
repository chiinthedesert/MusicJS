import * as state from "../state.js";

export function NavBar() {
  const { currentView } = state.getState();

  const hidden =
    currentView === "player" ||
    currentView === "detailedArtist" ||
    currentView === "detailedAlbum" ||
    currentView === "detailedPlaylist"
      ? "none"
      : "";

  const html = `
    <nav id="navbar" class="navbar small-padding secondary row center-align"
      style="display: ${hidden};
      position: fixed; bottom: 0; left: 0; right: 0;
      border-radius: 2rem 2rem 0 0 !important;">

      ${NavButton("home", "home", currentView)}
      ${NavButton("songs", "library_music", currentView)}
      ${NavButton("albums", "album", currentView)}
      ${NavButton("playlists", "queue_music", currentView)}
      ${NavButton("artists", "artist", currentView)}

    </nav>
  `;

  document.getElementById("navbar-container").innerHTML = html;
}

function NavButton(view, icon, currentView) {
  const active = view === currentView ? "fill" : "";

  return `
    <button class="button ${active}"
      data-action="nav:go"
      data-view="${view}">
      <i>${icon}</i>
    </button>
  `;
}

export function handleNavBarAction(action, el) {
  if (!action.startsWith("nav:")) return;
  switch (action) {
    case "nav:go":
      state.setState({
        currentView: el.dataset.view,
        viewState: {},
      });
      break;
  }
}
