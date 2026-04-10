const state = {
  currentView: "home",
  currentSong: { albumId: "carrie-lowell", id: "01" },

  isPlaying: false,
  currentTime: 0,
  duration: 0,
};

export function getState() {
  return state;
}

const listeners = [];
export function subscribe(fn) {
  listeners.push(fn);
}

export function setState(partial) {
  Object.assign(state, partial);

  listeners.forEach((fn) => {
    fn();
  });
}
