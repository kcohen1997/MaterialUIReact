import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    height: "45px",
    background: "#000",
    border: 0,
    color: "#fff",
    fontSize: "14px",
    "&:hover": {
      opacity: 1,
    },
    "&:disabled": {
      color: "#fff",
    },
  },
});

export default function BaseButton(props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <Button
      classes={{
        root: classes.root,
        label: classes.label,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
