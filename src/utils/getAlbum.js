import { albums } from "../data.js";

/**
 * Lấy thông tin album theo id.
 *
 * @param {string} albumId
 * @returns {Object|null}
 */
export function getAlbum(albumId) {
  return albums.find((album) => album.id === albumId) || null;
}
