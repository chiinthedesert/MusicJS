import { SearchBar } from "../../components/searchBar.js";

export function PlaylistsView() {
  const html = `
    <div class="playlists-view">
      ${SearchBar()}
    </div>
    <h1>code haven't implemented this view yet</h1>
  `;

  document.getElementById("view").innerHTML = html;
}
