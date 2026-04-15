import * as state from "../../state.js";

export function handleHomeAction(action, el) {
  switch (action) {
    case "artist-click": {
      const artistName = el.dataset.artist;

      state.setState({
        currentView: "detailedArtist",
        viewState: { artistName },
      });

      break;
    }

    case "album-click": {
      const albumId = el.dataset.albumId;

      state.setState({
        currentView: "detailedAlbum",
        viewState: { albumId },
      });

      break;
    }
  }
}
