import { getCurrentSong } from "../utils/getCurrentSong.js";
import * as state from "../state.js";

export function PlayerBar() {
  const { currentView, isPlaying } = state.getState();
  const song = getCurrentSong();

  const hidden = currentView === "player" ? "none" : "";

  const title = song?.title || "No song";
  const artist = song?.artist || "";
  const cover = song?.cover || "src/img/no-song.jpg";

  const html = `
    <div class="primary-container row center-align round no-space left-margin right-margin"
      style="display: ${hidden};"
      data-action="player:open"
    >

      <div class="small-margin shape sided-cookie12 ${isPlaying ? "rotate" : ""}">
        <img class=""
          src="${cover}" />
      </div>

      <div class="max" style="min-width: 0;">
        <div class="bold tiny-line"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          <span>${title}</span>
        </div>
        <div class="no-line"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          <span>${artist}</span>
        </div>
      </div>

      <div class="row no-space small-padding tiny-space">
        <button data-action="player:prev" class="circle fill">
          <i>skip_previous</i>
        </button>
        <button data-action="player:play-toggle" class="active circle primary">
          <i>${isPlaying ? "pause" : "play_arrow"}</i>
        </button>
        <button data-action="player:next" class="circle fill">
          <i>skip_next</i>
        </button>
      </div>

    </div>
  `;

  document.getElementById("player-bar").innerHTML = html;
}
