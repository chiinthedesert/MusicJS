import { getCurrentSong } from "../../utils/getCurrentSong.js";
import { formatTime } from "../../utils/formatTime.js";
import { previousView } from "../../utils/previousView.js";
import * as state from "../../state.js";

export function PlayerView() {
  const { isPlaying, currentTime, duration } = state.getState();
  const data = getCurrentSong();
  const title = data ? data.title : "No song";
  const artist = data ? data.artist : "";
  const cover = data ? data.cover : "src/img/no-song.jpg";

  const html = `
    <div id="player-view" class="player-view"
    style="display: flex; flex-direction: column; height: 100dvh;">
      <div class="player-main left-padding right-padding" style="flex: 1; display: flex; flex-direction: column; justify-content: space-around;">
        <button id="player-view-back-button" class="extra circle transparent ">
          <i class="bold">arrow_back</i>
        </button>

        <div class="row no-margin center-align">
          <img id="player-view-cover" class="shape sided-cookie12"
          style="block-size: 16rem; inline-size: 16rem; object-fit: cover;" src="" alt="" />
        </div>

        <div class="row no-margin">
          <div class="max">
            <div id="player-view-song-title" class="bold tiny-line"
              style="font-size: 1.25rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                <span></span>
            </div>
            <div id="player-view-artist" class="no-line"
              style="font-size: 1.25rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                <span></span>
            </div>
          </div>
          <button class="circle extra">
            <i class="extra">favorite</i>
          </button>
        </div>

        <div class="progress">
          <progress class="wavy" value="30" max="100"></progress>
          <div class="row no-margin">
            <span class="max" id=""></span>
            <span id=""></span>
          </div>
        </div>

        <div class="group row no-margin gap center-align" style="">
          <button class="extra round">
            <i class="extra">skip_previous</i>
          </button>
          <button id="player-view-play-button" class="extra active" style="width: 6rem; height: 4rem;border-radius:2rem !important;">
            <i id="player-view-play-icon" class="extra">play_arrow</i>
            <span class="bold">Play</span>
          </button>
          <button class="extra round">
            <i class="extra">skip_next</i>
          </button>
        </div>

        <div class="row no-margin gap">
          <div class="group max">
            <button class="left-round">
              <i>queue_music</i>
            </button>
            <button class="no-round">
              <i>shuffle</i>
            </button>
            <button class="right-round">
              <i>repeat</i>
            </button>
          </div>
          <button class="circle">
            <i>more_vert</i>
          </button>
        </div>
      </div>

      <div id="lyrics-space" class="secondary top-padding bottom-padding top-round center-align" 
      style="margin-top: auto;">
        <span style="font-size: 1.25rem; font-weight: bold;">Wanna see lyrics</span>
      </div>
    </div>
  `;
  document.getElementById("view").innerHTML = html;
}
