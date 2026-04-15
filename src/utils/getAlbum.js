import { albums } from "../data.js";

/**
 * Lấy thông tin album theo id + tổng thời lượng
 *
 * @param {string} albumId
 * @returns {Object|null}
 */
export function getAlbum(albumId) {
  const album = albums.find((album) => album.id === albumId);
  if (!album) return null;

  const duration = album.tracks.reduce((total, track) => {
    return total + track.duration;
  }, 0);

  return {
    ...album,
    duration,
  };
}
