ui("theme", "#FFB4B4");
import * as state from "./state.js";

import { NavBar, renderNavBar } from "./components/navBar.js";

import { PlayerBar, renderPlayerBar } from "./components/playerBar.js";

import { HomeView } from "./views/home/home.js";

import { SongsView } from "./views/songs/SongsView.js";
import { bindSongsView } from "./views/songs/SongsController.js";

import { DetailedAlbumView } from "./views/detailedAlbum/DetailedAlbumView.js";

import { AlbumsView } from "./views/albums/albums.js";
import { PlaylistsView } from "./views/playlists/playlists.js";
import { ArtistsView } from "./views/artists/artists.js";
import { PlayerView } from "./views/player/PlayerView.js";

const app = document.getElementById("app");
const views = {
  home: HomeView,
  songs: SongsView,
  albums: AlbumsView,
  playlists: PlaylistsView,
  artists: ArtistsView,
  player: PlayerView,
  detailedAlbum: DetailedAlbumView,
};

export function renderView() {
  views[state.getState().currentView]();
}

NavBar();
PlayerBar();

bindSongsView();

renderView();
renderNavBar();
renderPlayerBar();

state.subscribe(() => {
  const currentView = state.getState().currentView;

  renderView();
  renderNavBar();
  renderPlayerBar();

  if (currentView === "player") {
    renderPlayerView();
  }

  document.getElementById("player-bar").style.display =
    currentView === "player" ? "none" : "block";
  document.getElementById("navbar").style.display =
    currentView === "player" ? "none" : "block";
});
