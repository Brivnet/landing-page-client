export function Spinner(css = []) {
  const element = document.createElement("div");
  element.innerHTML =
    "<svg height='24' width='24' viewBox='0 0 24 24' fill='#8137BE' class='animate-spin'><path d='M4.979 4.879l-.05.05c-3.903 3.903-3.903 10.239 0 14.142s10.239 3.903 14.142 0c3.903-3.903 3.903-10.239 0-14.142l-.152-.149-2.122 2.122a7.004 7.004 0 01.153 10.049 7.002 7.002 0 01-9.899 0 7.004 7.004 0 010-9.9l.051-.05L4.981 4.88z'></path></svg>";
  element.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "spinner-mini",
    ...css
  );

  return element;
}
