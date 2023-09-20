import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();

  const [isSent, setIsSent] = useState(false);
  const form = useRef();
  const title = t("formtext");
  const formnanme = t("formnanme");
  const formnanmeplas = t("formnanmeplas");
  const formemail = t("formemail");
  const formemailplas = t("formemailplas");
  const formmessage = t("formmessage");
  const formmessageplas = t("formmessageplas");
  const btnsend = t("btnsend");
  const btnDone = t("btnDone");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "mohammedshaaban",
        "template_700zuws",
        e.target,
        "kpS0mpE14SnfxSWSq"
      )
      .then(
        (result) => {
          document.getElementById("contact_form").reset();
          setIsSent(true);
          alert("Thank you I will get back to you as soon as possible ! (:");
        },
        (error) => {
          console.error(error);
          setIsSent(false);
        }
      );
  };

  return (
    <div
      // className="formamrgn"
      style={{
        // backgroundColor: "red",
        width: "90%",
        // height: "96%",

        boxShadow: "2px 2px 10px #ffbbff9c",
      }}
    >
      <div>
        <h3
          style={{ fontFamily: "Morganite Bold, sans-serif" }}
          className="message text-2xl md:text-6xl  bg-primary-600 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
        >
          <Typewriter words={[title]} loop={true} />
          &nbsp;
        </h3>
      </div>
      <div className="w-full flex justify-center">
        <form
          id="contact_form"
          ref={form}
          method="POST"
          target="_blank"
          onSubmit={sendEmail}
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="w-[80%] h-full flex flex-col gap-8 pt-12  text-grayscale-200"
        >
          <div className="w-full flex flex-col">
            <label htmlFor="Name">{formnanme}</label>
            <input
              className="p-[0.5em]   text-grayscale-950"
              placeholder={formnanmeplas}
              id="from_name"
              type="text"
              name="from_name"
              required
            />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="email">{formemail}</label>
            <input
              className="p-[0.5em]   text-grayscale-950"
              placeholder={formemailplas}
              id="email"
              type="email"
              name="from_email"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label>{formmessage}</label>
            <textarea
              className="p-[0.5em]   text-grayscale-950"
              placeholder={formmessageplas}
              name="message"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <input
              className="btn w-[100px] h-[50px] bg-primary-600 rounded-xl cursor-pointer hover:bg-primary-700 mb-16"
              type="submit"
              value={!isSent ? btnsend : btnDone}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
