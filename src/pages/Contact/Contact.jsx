import { Button, Grow, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./Contact.css";
import { makeStyles } from "@material-ui/core/styles";
import CustomButton from "../../components/CustomButton/CustomButton";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import { useDataLayerValue } from "../../DataLayer";
import emailjs from "emailjs-com";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import resumeData from "../../utils/resumeData";

function Contact({ toggle }) {
  const [{ darkJs, loading }, dispatch] = useDataLayerValue();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("success");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(2),
        width: 200,
      },
    },
  }));
  const classes = useStyles();

  const submitForm = () => {
    if (name === "" || email === "" || message === "" || contactNo === "") {
      setAlertVariant("info");
      setAlertMessage("Please fill all the details");
      setOpen(true);
      return;
    }
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    emailjs
      .send(
        "gmail",
        "template_jnngya9",
        {
          name: name,
          email: email,
          number: contactNo,
          message: message,
        },
        "user_reRpHBmt1HrI5F7Jl26Ka"
      )
      .then(
        (result) => {
          setContactNo("");
          setEmail("");
          setMessage("");
          setName("");
          dispatch({
            type: "SET_LOADING",
            loading: false,
          });
          setAlertMessage("Successfully sent");
          setAlertVariant("success");
          setOpen(true);
        },
        (error) => {
          setContactNo("");
          setEmail("");
          setMessage("");
          setName("");
          dispatch({
            type: "SET_LOADING",
            loading: false,
          });
          setAlertVariant("error");
          setAlertMessage("Something went wrog");
          setOpen(true);
        }
      );
  };

  return (
    <>
      {darkJs.isActivated() ? (
        <div className="contact container_shadow">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          >
            <div className="contact__top">
              <div className="contact__form">
                <Typography
                  variant="h6"
                  className="darkMode"
                  data-aos="fade-right"
                >
                  CONTACT
                </Typography>
                <form
                  noValidate
                  autoComplete="off"
                  className="contact__form__fields darkmode-ignore"
                  data-aos="fade-right"
                >
                  <div className="contact__form__top">
                    <TextField
                      className={classes.root}
                      label="Name"
                      size="small"
                      color="secondary"
                      name="name"
                      value={name}
                      required
                      id="standard-size-small"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                      className={classes.root}
                      label="Contact no."
                      size="small"
                      name="number"
                      value={contactNo}
                      color="secondary"
                      required
                      onChange={(e) => setContactNo(e.target.value)}
                      id="standard-size-small"
                    />
                  </div>
                  <div className="contact__form__bottom">
                    <TextField
                      id="standard-basic"
                      className={classes.root}
                      label="Email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      color="secondary"
                    />
                    <TextField
                      id="standard-basic"
                      className={classes.root}
                      label="Message"
                      name="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      color="secondary"
                    />
                  </div>
                </form>
                <div className="contact__form__button">
                  <CustomButton
                    text="Submit"
                    icon={<CheckOutlinedIcon />}
                    mode={darkJs.isActivated()}
                    submitForm={submitForm}
                    form
                  />
                </div>
              </div>
              <div className="contact__details">
                <Typography
                  variant="h6"
                  className="darkMode"
                  data-aos="fade-right"
                >
                  CONTACT DETAILS
                </Typography>
                <div className="contact__details__content" data-aos="fade-left">
                  <Typography className="contact__details__typography">
                    <span className="contact__details__span__title">
                      Address :
                    </span>{" "}
                    <span className="contact__details__span">
                      {resumeData.address}
                    </span>
                  </Typography>
                  <Typography className="contact__details__typography">
                    <span className="contact__details__span__title">
                      Phone :
                    </span>{" "}
                    <span className="contact__details__span">7864990069</span>
                  </Typography>
                  <Typography className="contact__details__typography">
                    <span className="contact__details__span__title">Job :</span>{" "}
                    <span className="contact__details__span">
                      Web developer
                    </span>
                  </Typography>
                  <Typography className="contact__details__typography">
                    <span className="contact__details__span__title">
                      Email :
                    </span>{" "}
                    <span className="contact__details__span">
                      pratimkundu15@gmail.com
                    </span>
                  </Typography>
                </div>
              </div>
            </div>

            <div className="contact__map">
              <Typography
                variant="h6"
                className="contact__map__header darkMode"
                data-aos="fade-right"
              >
                CONTACT MAP
              </Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58272.54293408519!2d88.2248488606594!3d24.10030211168364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97dd5c0281a4d%3A0xcde56981df08cd8!2sBerhampore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1613594065351!5m2!1sen!2sin"
                width="600"
                height="450"
                frameBorder="0"
                allowFullScreen=""
                title="Map"
                aria-hidden="false"
                tabIndex="0"
                data-aos="fade-left"
              ></iframe>
            </div>
          </motion.div>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={alertVariant}>
              {alertMessage}
            </Alert>
          </Snackbar>
        </div>
      ) : (
        <>
          <div className="contact container_shadow" data-aos="fade-left">
            <div className="contact__top">
              <div className="contact__form">
                <Typography
                  variant="h6"
                  className="darkMode"
                  data-aos="fade-right"
                >
                  CONTACT
                </Typography>
                <form
                  noValidate
                  autoComplete="off"
                  className="contact__form__fields darkmode-ignore"
                  data-aos="fade-right"
                >
                  <div className="contact__form__top">
                    <TextField
                      className={classes.root}
                      label="Name"
                      size="small"
                      color="secondary"
                      name="name"
                      value={name}
                      required
                      id="standard-size-small"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                      className={classes.root}
                      label="Contact no."
                      size="small"
                      name="number"
                      value={contactNo}
                      color="secondary"
                      required
                      onChange={(e) => setContactNo(e.target.value)}
                      id="standard-size-small"
                    />
                  </div>
                  <div className="contact__form__bottom">
                    <TextField
                      id="standard-basic"
                      className={classes.root}
                      label="Email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      color="secondary"
                    />
                    <TextField
                      id="standard-basic"
                      className={classes.root}
                      label="Message"
                      name="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      color="secondary"
                    />
                  </div>
                </form>
                <div className="contact__form__button">
                  <CustomButton
                    text="Submit"
                    icon={<CheckOutlinedIcon />}
                    mode={darkJs.isActivated()}
                    submitForm={submitForm}
                    form
                  />
                </div>
              </div>
              <div className="contact__details" data-aos="fade-left">
                <Typography
                  variant="h6"
                  className="darkMode"
                  data-aos="fade-right"
                >
                  CONTACT DETAILS
                </Typography>
                <div className="contact__details__content" data-aos="fade-left">
                  <Typography className="contact__details__typography">
                    <span className="contact__details__span__title">
                      Address :
                    </span>{" "}
                    <span className="contact__details__span">
                      {resumeData.address}
                    </span>
                  </Typography>
                  <Typography className="contact__details__typography">
                    <span className="contact__details__span__title">
                      Phone :
                    </span>{" "}
                    <span className="contact__details__span">7864990069</span>
                  </Typography>
                  <Typography className="contact__details__typography">
                    <span className="contact__details__span__title">Job :</span>{" "}
                    <span className="contact__details__span">
                      Web developer
                    </span>
                  </Typography>
                  <Typography className="contact__details__typography">
                    <span className="contact__details__span__title">
                      Email :
                    </span>{" "}
                    <span className="contact__details__span">
                      pratimkundu15@gmail.com
                    </span>
                  </Typography>
                </div>
              </div>
            </div>

            <div className="contact__map">
              <Typography
                variant="h6"
                className="contact__map__header darkMode"
                data-aos="fade-right"
              >
                CONTACT MAP
              </Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58272.54293408519!2d88.2248488606594!3d24.10030211168364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97dd5c0281a4d%3A0xcde56981df08cd8!2sBerhampore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1613594065351!5m2!1sen!2sin"
                width="600"
                height="450"
                frameBorder="0"
                allowFullScreen=""
                title="Map"
                aria-hidden="false"
                tabIndex="0"
                data-aos="fade-left"
              ></iframe>
            </div>
          </div>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={alertVariant}>
              {alertMessage}
            </Alert>
          </Snackbar>
        </>
      )}
    </>
  );
}

export default Contact;
