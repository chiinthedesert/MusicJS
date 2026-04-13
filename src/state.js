const state = {
  currentView: "songs",
  historyView: [],
  currentSong: { albumId: "not-cute-anymore", id: "01" },
  // currentSong: null,

  isPlaying: false,
  currentTime: 0,
  duration: 0,

  sort: {
    songs: {
      by: "title",
      order: "asc",
    },
    albums: {
      by: "name",
      order: "asc",
    },
    artists: {
      by: "name",
      order: "asc",
    },
  },
  isSortOpen: false,
};

export function getState() {
  return state;
}

const listeners = [];
export function subscribe(fn) {
  listeners.push(fn);
}

export function setState(partial, { skipHistory = false } = {}) {
  if (
    !skipHistory &&
    partial.currentView &&
    partial.currentView !== state.currentView
  ) {
    state.historyView.push(state.currentView);
  }

  Object.assign(state, partial);

  listeners.forEach((fn) => fn());
}
