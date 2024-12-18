export function Toast(message, success) {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    className: `custom-toast ${success ? "success" : "danger"}`,
  }).showToast();
}
