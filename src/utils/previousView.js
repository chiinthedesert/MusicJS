import * as state from "../state.js";

/**
 * Quay lại view trước đó trong lịch sử nếu có.
 *
 * Hàm này sẽ lấy view cuối cùng từ mảng historyView và cập nhật currentView
 * mà không thêm vào lịch sử mới (skipHistory: true).
 */
export function previousView() {
  const prev = state.getState().historyView.pop();
  if (!prev) return;

  state.setState(
    { currentView: prev.currentView, viewState: prev.viewState },
    { skipHistory: true },
  );
}
