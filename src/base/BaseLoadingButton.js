import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: "50px",
    background: "#000",
    border: 0,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      opacity: 1,
      background: "rgba(0,0,0,.5)",
    },
    "&:disabled": {
      color: "#fff",
    },
  },
  progress: {
    color: "#fff",
  },
}));

const LoadingButton = (props) => {
  const classes = useStyles();
  const { text, loading = false } = props;

  return (
    <Button
      classes={{
        root: classes.root,
        label: classes.label,
      }}
      {...props}
    >
      {loading ? <CircularProgress className={classes.progress} /> : text}
    </Button>
  );
};

export default LoadingButton;
