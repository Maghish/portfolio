import { useRef } from "react";
import emailjs, { send } from "@emailjs/browser";

function ContactForm() {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_l0nwccf", "template_38mdroq", form.current, {
        publicKey: "K0tM5Bql8IDwm-pv0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          window.location.href = "/";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} className="flex flex-col">
      <input
        className="mb-4 p-2 px-4 rounded-md outline-none bg-bgThemeLighterGray font-consolas text-sm text-themeWhite placeholder:text-[#888a90] placeholder:font-consolas"
        type="text"
        name="user_name"
        placeholder="Full Name"
      />
      <input
        className="mb-4 p-2 px-4 rounded-md outline-none bg-bgThemeLighterGray font-consolas text-sm text-themeWhite placeholder:text-[#888a90] placeholder:font-consolas"
        type="email"
        name="user_email"
        placeholder="Email"
      />
      <textarea
        className="p-4 h-[200px] max-h-[200px] rounded-md outline-none overflow-auto scrollBar bg-bgThemeLighterGray font-consolas text-sm text-themeWhite placeholder:text-[#888a90] placeholder:font-consolas"
        name="message"
        placeholder="Enter Message"
      />
      <button
        type="submit"
        className="bg-borderGreenColor self-center rounded-lg mt-5 p-2 px-4 font-consolas text-bgThemeGray font-semibold flex flex-row justify-center items-center transition delay-100 duration-500 ease-[cubic-bezier(0.71, 0.19, 0, 0.69)] hover:bg-bgThemeLighterGray hover:text-borderContrastGreenColor focus:bg-borderGreenColor focus:text-bgThemeGray"
        onClick={sendEmail}
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
