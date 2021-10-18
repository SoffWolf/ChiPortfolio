import "./contact.css";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_metcwbl",
        "template_b3m2c7s",
        formRef.current,
        "user_FohUcZnpaoDtR9vFcMppr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Please contact me for anything!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="https://cdn-icons.flaticon.com/png/128/1082/premium/1082334.png?token=exp=1634396062~hmac=4c0b8a9c0e5dac05fd84608c9af635b1" alt="" className="c-icon" />
              +1 1234 556 75
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="https://cdn-icons.flaticon.com/png/128/2099/premium/2099199.png?token=exp=1634396358~hmac=22c80c633f9bdef7e670d398c9f5d599" alt="" />
              kdanfgdsjlgnksdlgnskl@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="https://cdn-icons-png.flaticon.com/128/484/484167.png" alt="" />
              121 Phung Chi Kien St., Da Nang city, Vietnam.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "It's sent. Thank you!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
