class HtmlUtils {
  static setModalDiv() {
    const container = document.createElement("div");
    container.setAttribute("id", "modal-root");
    document.body.append(container);
  }
}

export default HtmlUtils;