export function renderPlayerView() {
  const { isPlaying } = state.getState();
  const data = getCurrentSong();

  const titleDiv = document.getElementById("player-view-song-title");
  const artistDiv = document.getElementById("player-view-artist");
  const cover = document.getElementById("player-view-cover");
  const playButton = document.getElementById("player-view-play-button");
  const playIcon = document.getElementById("player-view-play-icon");

  const title = titleDiv.querySelector("span");
  const artist = artistDiv.querySelector("span");

  playButton.onclick = () => {
    const { isPlaying } = state.getState();
    state.setState({ isPlaying: !isPlaying });
  };

  if (!data) {
    title.textContent = "No song";
    artist.textContent = "";
    cover.src = "src/img/no-song.jpg";
  } else {
    title.textContent = data.title;
    artist.textContent = data.artist;
    cover.src = data.cover;
  }

  if (isPlaying) {
    cover.classList.add("rotate");
  } else {
    cover.classList.remove("rotate");
  }
  playIcon.textContent = isPlaying ? "pause" : "play_arrow";
}
