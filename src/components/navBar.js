import * as state from "../state.js";

export function NavBar() {
  var html = `
      <nav class="navbar padding secondary row center-align " style="border-radius: 2rem 2rem 0 0;">
        <button class="button" data-view="home">
          <i>home</i>
        </button>

        <button class="button" data-view="songs">
          <i>library_music</i>
        </button>

        <button class="button " data-view="albums">
          <i>album</i>
        </button>

        <button class="button " data-view="playlists">
          <i>queue_music</i>
        </button>

        <button class="button " data-view="artists">
          <i>artist</i>
        </button>
      </nav>
    `;
  document.getElementById("navbar").insertAdjacentHTML("beforeend", html);
  state.setState({ currentView: "home" });

  document.querySelectorAll("#navbar button").forEach((button) => {
    button.onclick = () => {
      state.setState({ currentView: button.dataset.view });
    };
  });
}

export function renderNavBar() {
  document.querySelectorAll("#navbar button").forEach((button) => {
    const isActive = button.dataset.view === state.getState().currentView;
    button.classList.toggle("fill", isActive);
  });
}
