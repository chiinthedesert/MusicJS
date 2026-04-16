import { playlists } from "../data.js";

export function getPlaylists({ curator } = {}) {
  let result = playlists;

  if (curator) {
    result = result.filter((playlist) => playlist.curator === curator);
  }

  return result;
}
