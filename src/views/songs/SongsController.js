import * as state from "../../state.js";

export function bindSongsView() {
  const view = document.getElementById("view");

  view.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const action = btn.dataset.action;
    if (!action) return;

    switch (action) {
      case "toggle-sort": {
        const current = state.getState();

        state.setState({
          isSortOpen: !current.isSortOpen,
        });

        break;
      }

      case "sort": {
        const type = btn.dataset.type;

        const currentState = state.getState();
        const currentSort = currentState.sort.songs;

        const isSame = currentSort.by === type;

        state.setState({
          sort: {
            ...currentState.sort,
            songs: {
              by: type,
              order: isSame && currentSort.order === "asc" ? "desc" : "asc",
            },
          },
        });

        break;
      }

      case "play-all":
        console.log("play all");
        break;

      case "shuffle":
        console.log("shuffle");
        break;
    }
  });
}
