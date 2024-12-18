import { Toast } from "./toast.js";
import { Spinner } from "./Spinner.js";

export async function sendEmail(data) {
  const { subject, ...altData } = data;
  const email = {
    service_id: "service_wwx63mj",
    template_id: "template_we3yk5j",
    user_id: "H1J8f_uFGrmHaxucx",
    template_params: data,
  };
  const formBox = document.getElementById("form-box");
  try {
    formBox.append(Spinner());

    const res = await fetch("https://api.brivnet.com/add-client", {
      method: "POST",
      body: JSON.stringify(altData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res?.statusCode === 200) {
      Toast("Your message has been sent", true);
      return;
    }
  } catch (error) {
    Toast("Something went wrong", false);
    console.error(error);
  } finally {
    document.querySelector(".spinner-mini").remove();
  }
}
