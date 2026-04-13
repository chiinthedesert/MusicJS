import { SearchBar } from "../components/searchBar.js";
import { albums } from "../data.js";
import * as state from "../state.js";
import { getAllTracks } from "../utils/getAllTracks.js";
import { TrackItem } from "../components/trackItem.js";

export function SongsView() {
  const { sort, isSortOpen } = state.getState();
  const { by, order } = sort.songs;

  let tracks = getAllTracks(albums);

  tracks = tracks.sort((a, b) => {
    let valA, valB;

    if (by === "title") {
      valA = a.title;
      valB = b.title;
    } else if (by === "artist") {
      valA = a.artist;
      valB = b.artist;
    } else if (by === "album") {
      valA = a.albumId;
      valB = b.albumId;
    }

    const result = (valA || "").localeCompare(valB || "");
    return order === "asc" ? result : -result;
  });

  const html = `
    <div class="container songs-view">
      ${SearchBar()}
    </div>

    <section class="section padding no-margin">

      <div class="sort">
        <button>
          <span>Sort</span>
          <i>sort_by_alpha</i>
        </button>

        <menu class="group no-wrap small-space bottom ${isSortOpen ? "active" : ""}">
          <li>
            <button data-type="title" class="fill small ${by === "title" ? "active" : ""}">
              <span>Name</span>
              ${
                by === "title"
                  ? `<i>${order === "asc" ? "arrow_downward" : "arrow_upward"}</i>`
                  : ""
              }
            </button>
          </li>

          <li>
            <button data-type="album" class="fill small ${by === "album" ? "active" : ""}">
              <span>Album</span>
              ${
                by === "album"
                  ? `<i>${order === "asc" ? "arrow_downward" : "arrow_upward"}</i>`
                  : ""
              }
            </button>
          </li>

          <li>
            <button data-type="artist" class="fill small ${by === "artist" ? "active" : ""}">
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

      <div class="row center-align">
        <button id="songs-view-play-button" class="shape circle medium active">
          <i class="extra">play_arrow</i>
        </button>
        <button id="songs-view-shuffle-button" class="shape sided-cookie12 medium" style="">
          <i class="extra">shuffle</i>
        </button>
      </div>

      <div class="songs-list">
        <ul class="no-padding">
          ${tracks.map((track) => TrackItem(track)).join("")}
        </ul>
      </div>

    </section>
  `;

  document.getElementById("view").innerHTML = html;
  bindSongsView();
}

function bindSongsView() {
  const sortBtn = document.querySelector(".sort button");
  const options = document.querySelectorAll("menu button");

  // toggle menu
  sortBtn.onclick = (e) => {
    e.stopPropagation();

    state.setState({
      isSortOpen: !state.getState().isSortOpen,
    });
  };

  // sort options
  options.forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();

      const type = btn.dataset.type;

      const { sort } = state.getState();
      const current = sort.songs;

      let newOrder = "asc";

      if (current.by === type) {
        newOrder = current.order === "asc" ? "desc" : "asc";
      }

      state.setState({
        sort: {
          ...sort,
          songs: {
            by: type,
            order: newOrder,
          },
        },
        isSortOpen: false,
      });
    };
  });

  const items = document.querySelectorAll(".track-item");

  items.forEach((item) => {
    item.onmouseenter = () => {
      item.classList.add("surface-variant"); // or "secondary-container"
    };

    item.onmouseleave = () => {
      item.classList.remove("surface-variant");
    };

    item.onclick = () => {
      const [albumId, trackId] = item.dataset.id.split("_");

      state.setState({
        currentSong: {
          albumId,
          id: trackId,
        },
        isPlaying: true,
      });
    };
  });
  const moreBtns = document.querySelectorAll(".track-item button");

  moreBtns.forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
    };
  });
}
