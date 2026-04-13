export function sortTracks(tracks, by, order) {
  const field =
    by === "title" ? "title" : by === "artist" ? "artist" : "albumId";

  return tracks.sort((a, b) => {
    const valA = a[field] || "";
    const valB = b[field] || "";

    const result = valA.localeCompare(valB);

    return order === "asc" ? result : -result;
  });
}
