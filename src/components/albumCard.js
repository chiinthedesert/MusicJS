export function AlbumCard(album, variant = "home") {
  return `
    <div data-action="album-click" data-album-id="${album.id}" class="album-card ${variant}">
      <div class="album-cover">
        <img class="responsive square round small-width small-height" style="object-fit: cover;" src="${album.cover}" alt="${album.name}" />
      </div>

      <div class="album-info">
        <div class="album-name bold tiny-line">${album.name}</div>
        <div class="album-artist no-line">${album.artist}</div>
      </div>
    </div>
  `;
}
