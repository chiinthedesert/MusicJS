import { albums } from "../data.js";
import * as state from "../state.js";

function getCurrentSong() {
  const { currentSong } = state.getState();
  if (!currentSong) return null;

  const album = albums.find((album) => album.id === currentSong.albumId);
  if (!album) return null;

  const track = album.tracks.find((track) => track.id === currentSong.id);
  if (!track) return null;

  return {
    title: track.title,
    artist: album.artist,
    cover: album.cover,
  };
}

export function PlayerBar() {
  var html = `
    <div class="row primary-container center-align round no-space left-margin right-margin" style="">

      <div class="small-padding">
        <img id="player-bar-cover" class="shape sided-cookie12" style="" src="" alt="" />
      </div>

      <div class="max" style="min-width: 0;">
        <div id="player-bar-song-title" class="bold tiny-line"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span></span>
          </div>
        <div id="player-bar-artist" class="no-line"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span></span>
          </div>
      </div>

      <div class="row no-space small-padding tiny-space">
        <button class="circle fill">
          <i>skip_previous</i>
        </button>
        <button id="player-bar-play-button" class="active circle primary">
          <i id="player-bar-icon">play_arrow</i>
        </button>
        <button class="circle fill">
          <i>skip_next</i>
        </button>
      </div>

    </div>
  `;
  document.getElementById("player-bar").innerHTML = html;

  document.getElementById("player-bar-play-button").onclick = () => {
    const { isPlaying } = state.getState();
    state.setState({ isPlaying: !isPlaying });
    renderPlayerBar();
  };
}

export function renderPlayerBar() {
  const { isPlaying } = state.getState();
  const data = getCurrentSong();

  const titleDiv = document.getElementById("player-bar-song-title");
  const artistDiv = document.getElementById("player-bar-artist");
  const cover = document.getElementById("player-bar-cover");
  const playIcon = document.getElementById("player-bar-icon");

  const title = titleDiv.querySelector("span");
  const artist = artistDiv.querySelector("span");

  if (!data) {
    title.textContent = "No song";
    artist.textContent = "";
    cover.src = "/src/img/no-song.jpg";
  } else {
    title.textContent = data.title;
    artist.textContent = data.artist;
    cover.src = data.cover;
  }

  if (isPlaying) {
    cover.classList.add("rotate");
  } else {
    cover.classList.remove("rotate");
  }
  playIcon.textContent = isPlaying ? "pause" : "play_arrow";
}
