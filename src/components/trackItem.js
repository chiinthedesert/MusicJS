import { formatTime } from "../utils/formatTime.js";

export function TrackItem(track) {
  return `
    <li class="track-item no-round row center-align" data-id="${track.albumId}_${track.id}">
      <div class="shape no-round transparent">
        <img 
          src="${track.cover}" 
          class=""
          style="object-fit: cover;"
        />
      </div>

      <div class="max" style="min-width: 0;">
        <div id="track-item-song-title" class="bold tiny-line"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span>${track.title}</span>
          </div>
        <div id="track-item-artist" class="no-line"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span>${track.artist}</span>
          </div>
      </div>

      <div class="track-duration small-text">
        ${formatTime(track.duration)}
      </div>

      <button class="circle transparent">
        <i>more_vert</i>
      </button>

    </li>
  `;
}
