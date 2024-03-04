import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="overflow-y-scroll scrollBar pl-2 max-h-full flex flex-col">
      <ContactForm />
      <div className="mt-5 bg-bgThemeLighterGray border-2 border-borderGreenColor rounded-lg p-4">
        <p className="font-consolas text-themeWhite text-sm font-semibold">
          You can also DM or message me through <span> </span>
          <a className="underline text-borderContrastGreenColor cursor-pointer">
            Discord
          </a>
          <span> </span>
          or{" "}
          <a className="underline text-borderContrastGreenColor cursor-pointer">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
