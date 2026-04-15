import { albums } from "../data.js";

/**
 * Lấy danh sách album, có thể lọc theo nghệ sĩ và năm phát hành.
 *
 * @param {Object} [options] - Các tùy chọn lọc (optional)
 * @param {string} [options.artist] - Tên nghệ sĩ
 * @param {number} [options.year] - Năm phát hành
 *
 * @returns {Array<{
 *   id: string,
 *   name: string,
 *   artist: string,
 *   year: number,
 *   cover: string,
 *   artistPhoto: string,
 *   tracks: Array<{
 *     id: string,
 *     title: string,
 *     trackNumber: number,
 *     duration: number,
 *     artists: string[],
 *     lyrics?: string
 *   }>
 * }>}
 */
export function getAlbums({ artist, year } = {}) {
  let result = albums;

  if (artist) {
    result = result.filter((a) => a.artist === artist);
  }

  if (year) {
    result = result.filter((a) => a.year === year);
  }

  return result;
}
