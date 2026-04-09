export function ArtistCard(album, variant = "home") {
  return `
    <div class="artist-card ${variant}">
      <div class="artist-photo">
        <img class="responsive circle small-width small-height" style="object-fit: cover;" src="${album.artistPhoto}" alt="${album.artist}" />
      </div>

      <div class="artist-info center-align">
        <div class="artist-name bold">${album.artist}</div>
      </div>
    </div>
  `;
}
