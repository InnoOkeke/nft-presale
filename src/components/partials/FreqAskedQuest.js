import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SectionHeader from "./SectionHeader";
import { Grid } from "@material-ui/core";
import image1 from "../../components/assets/img/1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem 8rem",
    padding: "5rem 0",
    [theme.breakpoints.down("sm")]: {
      margin: "6rem 0rem",
    },
  },
  accordionDiv: {
    margin: "0 auto",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(19),
    flexBasis: "90.33%",
    flexShrink: 0,
  },
  headerBg: {
    background: "lightblue",
  },
  sideImage: {
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "3rem",
    },
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="q&a" className={classes.root}>
      <SectionHeader  heading="FAQ" slogan="Frequently Asked Questions" />
      <Grid container>
        <Grid  item md={7}>
          <div className={classes.accordionDiv}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className={expanded === "panel1" && classes.headerBg}
              >
                <Typography   className={classes.heading}>
                  What is Artifact NFT?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam. Nulla
                  facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                  Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                className={expanded === "panel2" && classes.headerBg}
              >
                <Typography className={classes.heading}>
                  What’s so special about Artifact NFT?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat
                  lectus, varius pulvinar diam eros in elit. Pellentesque
                  convallis laoreet laoreet. lectus sed mattis semper, neque
                  lectus feugiat lectus, varius pulvinar diam eros in elit.
                  Pellentesque convallis laoreet laoreet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                className={expanded === "panel3" && classes.headerBg}
              >
                <Typography className={classes.heading}>
                  How do I start building with Artifact NFT?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue. Nunc vitae orci ultricies, auctor nunc in, volutpat
                  nisl. Integer sit amet egestas eros, vitae egestas augue. Duis
                  vel est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                className={expanded === "panel4" && classes.headerBg}
              >
                <Typography className={classes.heading}>
                  When will the Pre-sale be over?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue. Nunc vitae orci ultricies, auctor nunc in, volutpat
                  nisl. Integer sit amet egestas eros, vitae egestas augue. Duis
                  vel est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
        <Grid item md={5}>
          <img
            className={classes.sideImage}
            height="100%"
            width="100%"
            src={image1}
            wi
            alt="NFT"
          />
        </Grid>
      </Grid>
    </div>
  );
}
