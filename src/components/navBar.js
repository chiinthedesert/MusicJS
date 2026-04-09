import * as state from "../state.js";
import { renderView } from "../main.js";

export function NavBar() {
  var html = `
    <div id="navbar" style="position: fixed; bottom: 0; width: 100%">
      <nav class="navbar padding secondary row center-align" style="border-radius: 2rem 2rem 0 0;">
        <button class="button circle" data-view="home">
          <i>home</i>
        </button>

        <button class="button circle" data-view="songs">
          <i>library_music</i>
        </button>

        <button class="button circle" data-view="albums">
          <i>album</i>
        </button>

        <button class="button circle" data-view="playlists">
          <i>queue_music</i>
        </button>

        <button class="button circle" data-view="artists">
          <i>artist</i>
        </button>
      </nav>
    </div>
    `;
  document.getElementById("app").insertAdjacentHTML("beforeend", html);

  document.querySelectorAll("#navbar button").forEach((button) => {
    button.onclick = () => {
      state.setState({ currentView: button.dataset.view });

      renderView();
      renderNavBar();
    };
  });
}

export function renderNavBar() {
  document.querySelectorAll("#navbar button").forEach((button) => {
    const isActive = button.dataset.view === state.getState().currentView;
    button.classList.toggle("fill", isActive);
  });
}
