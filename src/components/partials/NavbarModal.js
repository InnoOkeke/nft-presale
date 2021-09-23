import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "90%",
    backgroundColor: "lightgray",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <a href="index.html" className="scrollto">
        <img
          src="assets/img/artfact-logo.PNG"
          alt="artfact-logo"
          title="artfact-logo"
          style={{ width: "6rem", margin: "1rem auto" }}
        />
      </a>
      <nav id="navbar" style={{ marginBottom: "3rem" }}>
        <ul>
          <li>
            <div class="nav-link scrollto active" href="#hero">
              Home
            </div>
          </li>
          <li>
            <a class="nav-link scrollto" href="#about">
              About Us
            </a>
          </li>
          <li>
            <a class="nav-link scrollto" href="#speakers">
              Speakers
            </a>
          </li>
          <li>
            <a class="nav-link scrollto" href="#schedule">
              Schedule
            </a>
          </li>
          <li>
            <a class="nav-link scrollto" href="#supporters">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <a class="buy-tickets scrollto" href="#buy-tickets">
        Buy NFT
      </a>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {body}
      </Modal>
    </div>
  );
}
