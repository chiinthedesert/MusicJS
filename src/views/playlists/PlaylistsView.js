import { SearchBar } from "../../components/searchBar.js";

export function PlaylistsView() {
  const html = `
    <div id="playlists-view" class="padding">
      ${SearchBar()}
      <h2>this view haven't be implemented.</h2>
      <h2 class="center-align">/ᐠ ╥ ˕ ╥マ</h2>
    </div>
  `;

  document.getElementById("view").innerHTML = html;
}
