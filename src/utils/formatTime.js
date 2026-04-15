/**
 * Định dạng thời gian từ giây sang định dạng "mm:ss"
 *
 * @param {number} seconds - Số giây cần định dạng
 * @returns Chuỗi định dạng thời gian theo kiểu "mm:ss"
 */
export function formatTime(seconds = 0) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
