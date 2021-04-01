import { Button } from "@material-ui/core";
import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import "./CustomButton.css";
import CircularProgress from "@material-ui/core/CircularProgress";
function CustomButton({ text, icon, mode, submitForm, form }) {
  const [{ darkJs, loading }, dispatch] = useDataLayerValue();

  const onButtonSubmit = (e) => {
    submitForm();
  };

  return (
    <>
      {loading && form ? (
        <CircularProgress />
      ) : (
        <Button
          endIcon={<div className="customButton__icon">{icon}</div>}
          className={
            mode ? "glower-button orange customButton" : "customButton"
          }
          variant="contained"
          onClick={submitForm ? onButtonSubmit : () => {}}
        >
          <span className="customButton__text">{text}</span>
        </Button>
      )}
    </>
  );
}

export default CustomButton;
