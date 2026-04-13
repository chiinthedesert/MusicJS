ui("theme", "#FFB4B4");
import * as state from "./state.js";

import { NavBar, renderNavBar } from "./components/navBar.js";

import { PlayerBar, renderPlayerBar } from "./components/playerBar.js";

import { HomeView } from "./views/home/home.js";

import { SongsView } from "./views/songs/SongsView.js";
import { handleSongsAction } from "./views/songs/handleSongsAction.js";
import { handleSongsHover } from "./views/songs/handleSongsHover.js";

import { PlayerView } from "./views/player/PlayerView.js";
import { handlePlayerAction } from "./views/player/handlePlayerAction.js";

import { DetailedAlbumView } from "./views/detailedAlbum/DetailedAlbumView.js";
import { DetailedArtistView } from "./views/detailedArtist/DetailedArtistView.js";

import { AlbumsView } from "./views/albums/AlbumsView.js";
import { PlaylistsView } from "./views/playlists/PlaylistsView.js";
import { ArtistsView } from "./views/artists/ArtistsView.js";

const app = document.getElementById("app");
const views = {
  home: HomeView,
  songs: SongsView,
  albums: AlbumsView,
  playlists: PlaylistsView,
  artists: ArtistsView,
  player: PlayerView,
  detailedAlbum: DetailedAlbumView,
  detailedArtist: DetailedArtistView,
};

export function renderView() {
  views[state.getState().currentView]();
}

NavBar();
PlayerBar();

app.onclick = (e) => {
  const el = e.target.closest("[data-action]");
  if (!el) return;

  const action = el.dataset.action;

  handleSongsAction(action, el);
  handlePlayerAction(action, el);
};
handleSongsHover();

renderView();
renderNavBar();
renderPlayerBar();

state.subscribe(() => {
  const currentView = state.getState().currentView;

  renderView();
  renderNavBar();
  renderPlayerBar();

  document.getElementById("player-bar").style.display =
    currentView === "player" ? "none" : "block";
  document.getElementById("navbar").style.display =
    currentView === "player" ? "none" : "block";
});
