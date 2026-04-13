import { SearchBar } from "../../components/searchBar.js";
import { TrackItem } from "../../components/trackItem.js";
import * as state from "../../state.js";
import { albums } from "../../data.js";
import { getAllTracks } from "../../utils/getAllTracks.js";
import { sortTracks } from "../../utils/sortTracks.js";

export function SongsView() {
  const { sort, isSortOpen } = state.getState();
  const { by, order } = sort.songs;

  let tracks = getAllTracks(albums);
  tracks = sortTracks(tracks, by, order);

  const html = `
    <div class="songs-view padding">
      ${SearchBar()}
      ${SortMenu({ by, order, isSortOpen })}
      ${PlayAndShuffle()}
      ${SongsListSection(tracks)}
    </div>
  `;

  document.getElementById("view").innerHTML = html;
}

function SortMenu({ by, order, isSortOpen }) {
  return `
    <div class="sort row">
      <button data-action="songs:sort-toggle" class="${isSortOpen ? "active" : ""}">
        <span>Sort</span>
        <i>sort</i>
      </button>

      <menu class="group no-wrap small-space bottom ${isSortOpen ? "active" : ""}">
        <li>
          <button data-action="songs:sort" data-type="title" class="fill small ${by === "title" ? "active" : ""}">
            <span>Name</span>
            ${
              by === "title"
                ? `<i>${order === "asc" ? "arrow_downward" : "arrow_upward"}</i>`
                : ""
            }
          </button>
        </li>

        <li>
          <button data-action="songs:sort" data-type="album" class="fill small ${by === "album" ? "active" : ""}">
            <span>Album</span>
            ${
              by === "album"
                ? `<i>${order === "asc" ? "arrow_downward" : "arrow_upward"}</i>`
                : ""
            }
          </button>
        </li>

        <li>
          <button data-action="songs:sort" data-type="artist" class="fill small ${by === "artist" ? "active" : ""}">
            <span>Artist</span>
            ${
              by === "artist"
                ? `<i>${order === "asc" ? "arrow_downward" : "arrow_upward"}</i>`
                : ""
            }
          </button>
        </li>
      </menu>
    </div>
  `;
}

export function PlayAndShuffle() {
  return `
    <div class="play-buttons row center-align">
      <button data-action="songs:play-all" class="shape sided-cookie6 medium active">
        <i class="extra">play_arrow</i>
      </button>
      <button data-action="songs:shuffle" class="shape sided-cookie12 medium">
        <i class="extra">shuffle</i>
      </button>
    </div>
  `;
}

function SongsListSection(tracks) {
  return `
    <section>
      <ul class="songs-list no-padding no-margin">
        ${tracks.map((track) => TrackItem(track)).join("")}
      </ul>
    </section>
  `;
}
