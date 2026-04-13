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
      <section class="">
        <div class="sort">
          <button data-action="toggle-sort">
            <span>Sort</span>
            <i>sort</i>
          </button>

          <menu class="group no-wrap small-space bottom ${isSortOpen ? "active" : ""}">
            <li>
              <button data-action="sort" data-type="title" class="fill small ${by === "title" ? "active" : ""}">
                <span>Name</span>
                ${
                  by === "title"
                    ? `<i>${order === "asc" ? "arrow_downward" : "arrow_upward"}</i>`
                    : ""
                }
              </button>
            </li>

            <li>
              <button data-action="sort" data-type="album" class="fill small ${by === "album" ? "active" : ""}">
                <span>Album</span>
                ${
                  by === "album"
                    ? `<i>${order === "asc" ? "arrow_downward" : "arrow_upward"}</i>`
                    : ""
                }
              </button>
            </li>

            <li>
              <button data-action="sort" data-type="artist" class="fill small ${by === "artist" ? "active" : ""}">
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

        <div class="play-buttons row center-align">
          <button data-action="play-all" class="shape sided-cookie6 medium active">
            <i class="extra">play_arrow</i>
          </button>
          <button data-action="shuffle" class="shape sided-cookie12 medium">
            <i class="extra">shuffle</i>
          </button>
        </div>
      </section>
      <section class="">
        <ul class="songs-list no-padding no-margin">
          ${tracks.map((track) => TrackItem(track)).join("")}
        </ul>
      </section>
    </div>
  `;

  document.getElementById("view").innerHTML = html;
}
