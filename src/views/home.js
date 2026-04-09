import { albums } from "../data.js";
import { AlbumCard } from "../components/albumCard.js";
import { SearchBar } from "../components/searchBar.js";
import { ArtistCard } from "../components/artistCard.js";

export function HomeView() {
  return `
    <div class="container home-view">
      ${SearchBar()}
      ${QuickActions()}
      ${RecentAlbums()}
      ${RecentArtists()}
    </div>
  `;
}

function QuickActions() {
  return `
    <div class="row center-align">
      <div class="column center-align">
        <button class="shape sunny extra fill">
            <span class="shape flower max medium-space">
              <i>history</i>
            </span>
        </button>
      </div>

      <div class="column center-align">
        <button class="shape sided-cookie6 extra fill">
            <span class="shape sided-cookie4 max medium-space">
              <i>favorite</i>
            </span>
        </button>
      </div>

      <div class="column center-align">
        <button class="shape puffy extra">
          <i>trending_up</i>
        </button>
      </div>
    </div>
  `;
}

function RecentAlbums() {
  return `
    <section class="section">
      <div class="section-header row">
        <h6 class="bold">Recently played albums</h6>
        <button class="transparent">
          <i class="bold">arrow_forward</i>
        </button>
      </div>

      <div class="horizontal-list row scroll" style="scrollbar-width: none;">
        ${albums
          .slice(0, 7)
          .map((album) => AlbumCard(album, "home"))
          .join("")}
      </div>
    </section>
  `;
}

function RecentArtists() {
  return `
    <section class="section">
      <div class="section-header row">
        <h6 class="bold">Recent artists</h6>
        <button class="transparent">
          <i class="bold">arrow_forward</i>
        </button>
      </div>

      <div class="horizontal-list row scroll" style="scrollbar-width: none;">
        ${albums
          .slice(0, 7)
          .map((album) => ArtistCard(album, "home"))
          .join("")}
      </div>
    </section>
  `;
}
