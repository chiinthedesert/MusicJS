/**
 * Sắp xếp một mảng object theo trường (field) và thứ tự chỉ định.
 *
 * - Hỗ trợ so sánh cả chuỗi và số
 * - Sử dụng so sánh chuỗi theo locale (không phân biệt hoa/thường, hỗ trợ số)
 * - Không làm thay đổi mảng gốc (trả về mảng mới đã được sắp xếp)
 * - Các giá trị `null` hoặc `undefined` sẽ được đưa xuống cuối
 *
 * @template T
 * @param {T[]} items - Mảng các phần tử cần sắp xếp
 * @param {keyof T} field - Tên thuộc tính dùng để sắp xếp
 * @param {"asc" | "desc"} [order="asc"] - Thứ tự sắp xếp (tăng dần hoặc giảm dần)
 *
 * @returns {T[]} Mảng mới đã được sắp xếp theo tiêu chí
 *
 * @example
 * // Sắp xếp track theo title (tăng dần)
 * sortItems(tracks, "title", "asc");
 *
 * @example
 * // Sắp xếp album theo năm (giảm dần)
 * sortItems(albums, "year", "desc");
 *
 * @example
 * // Sắp xếp artist theo tên (mặc định tăng dần)
 * sortItems(artists, "name");
 */
export function sortItems(items, field, order = "asc") {
  return [...items].sort((a, b) => {
    const valA = a[field];
    const valB = b[field];

    if (valA == null) return 1;
    if (valB == null) return -1;

    let result;

    if (typeof valA === "number" && typeof valB === "number") {
      result = valA - valB;
    } else {
      result = String(valA).localeCompare(String(valB), undefined, {
        sensitivity: "base",
        numeric: true,
      });
    }

    return order === "asc" ? result : -result;
  });
}
