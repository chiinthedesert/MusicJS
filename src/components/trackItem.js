import { formatTime } from "../utils/formatTime.js";

export function TrackItem(track) {
  return `
    <li class="track-item no-round row tiny-space center-align" 
    data-action="songs:track-play"
    data-id="${track.albumId}_${track.id}">

      <div class="shape no-round transparent">
        <img 
          src="${track.cover}" 
          class=""
          style="object-fit: cover;"
        />
      </div>

      <div class="max" style="min-width: 0;">

        <div class="track-item-title bold tiny-line"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span>${track.title}</span>
          </div>

        <div class="track-item-artist no-line"
          style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            <span>${track.artist}</span>
          </div>

      </div>

      <div class="track-duration small-text">
        ${formatTime(track.duration)}
      </div>

      <button data-action="songs:track-menu" class="circle transparent">
        <i>more_vert</i>
      </button>

    </li>
  `;
}
