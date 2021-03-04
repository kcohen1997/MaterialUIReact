import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  input: {
    textAlign: "center",
  },
}));

export default function BaseInput(props) {
  const classes = useStyles();

  return (
    <Box mb="25px">
      <Box mb="5px" textAlign="left" fontWeight={500} fontSize="14px">
        {props.heading}
      </Box>
      <TextField
        classes={{
          root: classes.root,
        }}
        variant="outlined"
        {...props}
      ></TextField>
    </Box>
  );
}
