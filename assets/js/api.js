import { Toast } from "./toast.js";
import { Spinner } from "./Spinner.js";

export async function sendEmail(data) {
  const formBox = document.getElementById("form-box");
  try {
    formBox.append(Spinner());
    const res = await fetch("https://www.api.brivnet.com/add-client", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
    if (res?.statusCode === 200) {
      Toast("Your message has been sent", true);
    }
  } catch (error) {
    Toast("Something went wrong", false);
    console.error(error);
  } finally {
    document.querySelector(".spinner-mini").remove();
  }
}
