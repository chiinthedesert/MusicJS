export function getAllTracks(albums) {
  return albums.flatMap((album) =>
    album.tracks.map((track) => ({
      id: track.id,
      title: track.title,
      duration: track.duration,

      artist: album.artist,
      cover: album.cover,
      albumId: album.id,
    })),
  );
}
