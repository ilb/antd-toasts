import { notification } from "antd";

/**
 *
 */
export default class Toast {
  static openToast(type, message, description, duration) {
    notification[type]({ message, description, duration });
  }

  static success(title = "Успешно!", description = "", duration = 2.5) {
    this.openToast("success", title, description, duration);
  }

  static info(title, description = "", duration = 5) {
    this.openToast("info", title, description, duration);
  }

  static warning(title, description = "", duration = 5) {
    this.openToast("warning", title, description, duration);
  }

  /**
   * @param title
   * @param {string|null|React.ReactNode[]} description
   * @param duration
   */
  static error(title = "Упс... Что-то пошло не так.", description = "", duration = 5) {
    this.openToast("error", title, description, duration);
  }
}
