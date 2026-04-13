export function ArtistCard(artist, variant = "home") {
  return `
    <div class="artist-card ${variant}">
      <div class="artist-photo">
        <img 
          class="responsive circle small-width small-height" 
          style="object-fit: cover;" 
          src="${artist.cover}" 
          alt="${artist.name}" 
        />
      </div>

      <div class="artist-info center-align">
        <div class="artist-name bold">${artist.name}</div>
      </div>
    </div>
  `;
}
