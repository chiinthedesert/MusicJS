export function AlbumCard(album, variant = "home") {
  return `
    <div class="album-card ${variant}">
      <div class="album-cover">
        <img class="responsive square round small-width small-height" style="object-fit: cover;" src="${album.cover}" alt="${album.name}" />
      </div>

      <div class="album-info">
        <div class="album-name bold" style="line-height: 1.2; padding-top: 6px;">${album.name}</div>
        <div class="album-artist" style="line-height: 1.2; opacity: 0.6;">${album.artist}</div>
      </div>
    </div>
  `;
}
