import { getAlbum } from "../../utils/getAlbum.js";
import { getTracks } from "../../utils/getTracks.js";
import * as state from "../../state.js";
import { TrackItem } from "../../components/trackItem.js";

export function DetailedAlbumView() {
  const { viewState } = state.getState();
  const album = getAlbum(viewState.albumId);
  const tracks = getTracks({ albumId: album.id }).sort(
    (a, b) => a.trackNumber - b.trackNumber,
  );

  const html = `
    <div id="detailed-album-view">
      ${BackButton()}

      <div class="album-header">
        <img src="${album.cover}" class="album-cover"/>

        <p class="album-type">Album</p>
        <h1 class="album-title">${album.name}</h1>
        <p class="album-artist">${album.artist} • ${album.year}</p>
      </div>

      <div class="album-controls">
        <button class="play-btn">
          <i class="material-icons">play_arrow</i>
        </button>
      </div>

      <div class="song-list">

        <div class="song-header">
          <span>#</span>
          <span>Title</span>
          <span class="time">
            <i class="material-icons">schedule</i>
          </span>
        </div>
        ${tracks
          .map((track, index) =>
            TrackItem(track, {
              variant: "album",
              index: index + 1,
            }),
          )
          .join("")}
      </div>

    </div>
  `;

  document.getElementById("view").innerHTML = html;
}

function BackButton() {
  return `
    <button data-action="player:back" class="extra circle transparent ">
      <i class="bold">arrow_back</i>
    </button>
  `;
}
