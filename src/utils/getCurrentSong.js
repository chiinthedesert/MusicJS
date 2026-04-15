import * as state from "../state.js";
import { albums } from "../data.js";

/**
 * Lấy thông tin bài hát từ trạng thái hiện tại.
 *
 * Tìm kiếm album và bài hát hiện tại, sau đó kết hợp thông tin để trả về một đối tượng
 * bao gồm dữ liệu của bài hát cùng với thông tin về album.
 *
 * @returns {{
 *   id: string,
 *   title: string,
 *   duration: number,
 *   lyrics?: string,
 *   albumId: string,
 *   artist: string,
 *   cover: string
 * } | null}
 */
export function getCurrentSong() {
  const { currentSong } = state.getState();
  if (!currentSong) return null;

  const album = albums.find((album) => album.id === currentSong.albumId);
  if (!album) return null;

  const track = album.tracks.find((track) => track.id === currentSong.id);
  if (!track) return null;

  return {
    ...track,
    albumId: album.id,
    artist: album.artist,
    cover: album.cover,
  };
}
