import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import BaseButton from "./base/BaseButton";
import BaseInput from "./base/BaseInput";
import BaseLoadingButton from "./base/BaseLoadingButton";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  PhoneFormatter,
  ThousandsFormatter,
  PriceFormatter,
  NiceFormatter,
} from "./helpers/NumberFormatter";
import { upperFirstChar } from "./helpers/textFunctions";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "white",
      padding: 20,
      flexGrow: 1,
    },
    button: {
      width: "158px",
      marginTop: 30,
      marginBottom: 40,
      color: "white",
      backgroundColor: "black",
      // BACKGROUND COLOR ON HOVER
      "&:hover": {
        backgroundColor: "black",
      },
    },
    paper: {
      height: 140,
      width: "100%",
      border: "1px solid black",
      marginTop: 15,
    },
    control: {
      padding: theme.spacing(2),
      marginTop: 20,
      border: "1px solid black",
    },
    grid: {
      backgroundColor: "gray",
      height: 50,
    },
    box: {
      marginTop: 40,
      backgroundColor: "lightgray",
      height: 50,
      width: "50%",
    },
    zIndex1: {
      position: "relative",
      zIndex: 0,
      height: 50,
      backgroundColor: "red",
      marginTop: 30,
    },
    zIndex2: {
      position: "relative",
      zIndex: 1,
      height: 20,
      backgroundColor: "orange",
      marginTop: "-50px",
    },
    center: {
      textAlign: "center",
    },
    textField: {
      border: "1px solid black",
    },
  }));

  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  const [isVisible, setIsVisible] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  // const [password, setPassword] = React.useState("");
  // const [phoneNumber, setPhoneNumber] = React.useState("");
  const [options, setOptions] = React.useState("Label");
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const testArray = [
    { id: 1, name: "Courtney" },
    { id: 2, name: "Travis" },
    { id: 3, name: "Wade" },
    { id: 4, name: "Alton" },
  ];

  const date1 = new Date("7/13/2010");
  const date2 = new Date("9/12/2011");
  const diffTime = Math.abs(date2 - date1);

  return (
    <div className={classes.root}>
      <p className={classes.center}>
        {" "}
        <b> Accordion </b>{" "}
      </p>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Accordion Text</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Accordion Text</Typography>
        </AccordionDetails>
      </Accordion>

      <p style={{ textAlign: "center" }}>
        {" "}
        <b> Aligning Components </b>{" "}
      </p>

      <Box display="flex" justifyContent="center">
        <Button style={{ border: "1px solid black" }}> Button </Button>
      </Box>

      <Grid container spacing={spacing}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} />
        </Grid>
      </Grid>

      <Paper className={classes.control}>
        <Grid container>
          <Grid item>
            <FormLabel>spacing</FormLabel>
            <RadioGroup
              name="spacing"
              aria-label="spacing"
              value={spacing.toString()}
              onChange={handleChange}
              row
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <FormControlLabel
                  key={value}
                  value={value.toString()}
                  control={<Radio />}
                  label={value.toString()}
                />
              ))}
            </RadioGroup>
          </Grid>
        </Grid>
      </Paper>

      <Box display="flex" justifyContent="center" flexDirection="column">
        <Box display="flex" justifyContent="center">
          <p> Box Example </p>
        </Box>
      </Box>

      <p className={classes.center}>
        {" "}
        <b> Arrays</b>{" "}
      </p>

      <p className={classes.center}> Map </p>

      {testArray.map((item, index) => (
        <p className={classes.center}>
          {" "}
          Id: {item.id} Name: {item.name}
        </p>
      ))}

      <p className={classes.center}> Sort</p>

      {testArray
        .sort((a, b) => a.name - b.name)
        .map((item, index) => (
          <p className={classes.center}>
            {" "}
            Id: {item.id} Name: {item.name}
          </p>
        ))}

      <p className={classes.center}> Filter </p>

      {testArray
        .filter((item) => item.id >= 1 && item.id < 3)
        .map((item, index) => (
          <p className={classes.center}>
            {" "}
            Id: {item.id} Name: {item.name}
          </p>
        ))}

      <p className={classes.center}>
        {" "}
        <b> Buttons</b>{" "}
      </p>

      <Box display="flex" justifyContent="center">
        <BaseButton
          className={classes.button}
          style={{ width: "200px", height: "70px" }}
        >
          Button No Color Change on Hover
        </BaseButton>
      </Box>

      <Box display="flex" justifyContent="center">
        <BaseLoadingButton
          className={classes.button}
          text="Loading Button"
          loading={loading}
          onClick={() => setLoading(!loading)}
        />
      </Box>

      <p className={classes.center}>
        {" "}
        <b> Conditional Rendering </b>{" "}
      </p>

      {isVisible && <p className={classes.center}> Visibile Text</p>}

      <Box display="flex" justifyContent="center">
        <Button
          onClick={() => setIsVisible(!isVisible)}
          style={{ backgroundColor: "black", color: "white" }}
        >
          {" "}
          {isVisible ? "Is Visibile" : "Is Not Visible"}{" "}
        </Button>
      </Box>

      <p style={{ textAlign: "center" }}>
        {" "}
        <b> Dates </b>{" "}
      </p>

      <p style={{ textAlign: "center" }}>
        {date1.getMonth() + 1}/{date1.getDate()}/{date1.getFullYear()}
      </p>

      <p style={{ textAlign: "center" }}>
        {date2.getMonth() + 1}/{date2.getDate()}/{date2.getFullYear()}
      </p>

      <div className={classes.center}>
        <p> Difference Between Dates </p>
        <p> Days: {Math.floor(diffTime / (1000 * 60 * 60 * 24))} </p>
        <p> Months: {Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30))} </p>
        <p> Years: {Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))} </p>
      </div>

      <p style={{ textAlign: "center" }}>
        {" "}
        <b> Overlapping Components </b>{" "}
      </p>

      <Box display="flex" justifyContent="center" flexDirection="column">
        <Box
          display="flex"
          justifyContent="center"
          className={classes.zIndex1}
        ></Box>
      </Box>

      <Box display="flex" justifyContent="center" flexDirection="column">
        <Box
          display="flex"
          justifyContent="center"
          className={classes.zIndex2}
        ></Box>
      </Box>

      <p className={classes.center}>
        {" "}
        <b> Select </b>{" "}
      </p>

      <FormControl
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        style={{ width: "100%" }}
      >
        <Select
          value={options}
          onChange={(e) => setOptions(e.target.value)}
          MenuProps={{
            getContentAnchorEl: null,
          }}
        >
          <MenuItem disabled value={"Label"}>
            Label
          </MenuItem>
          <MenuItem value={"Option 1"}>Option 1</MenuItem>
          <MenuItem value={"Option 2"}> Option 2</MenuItem>
        </Select>
      </FormControl>

      <p className={classes.center}>
        {" "}
        <b> Text Fields </b>{" "}
      </p>

      <BaseInput
        name="Password"
        heading="Password"
        placeholder="Enter Password"
        fullWidth
        type={showPassword ? "text" : "password"}
        // onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          disableUnderline: true,

          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <BaseInput
        name="mobile"
        heading="Phone Number"
        placeholder="(000) 000-0000"
        fullWidth
        InputProps={{
          inputComponent: PhoneFormatter,
        }}
        // onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <BaseInput
        name="mobile"
        placeholder="1,000"
        heading="Thousands Formatter"
        fullWidth
        InputProps={{
          inputComponent: ThousandsFormatter,
        }}
      />

      <BaseInput
        name="mobile"
        placeholder="$0"
        heading="Price Formatter (No Decimals)"
        fullWidth
        InputProps={{
          inputComponent: PriceFormatter,
        }}
      />

      <BaseInput
        name="mobile"
        placeholder="1,000"
        heading="Nice Formatter"
        fullWidth
        InputProps={{
          inputComponent: NiceFormatter,
        }}
      />

      <BaseInput
        placeholder="1,000"
        heading="Change Color"
        fullWidth
        InputProps={{
          style: { color: "red" },
        }}
      />

      <p className={classes.center}>
        {" "}
        <b> Text Manipulation </b>{" "}
      </p>

      <p className={classes.center} style={{ cursor: "pointer" }}>
        {" "}
        Hoverable Text{" "}
      </p>

      <p className={classes.center}> {upperFirstChar("upperCaseFirstChar")} </p>
    </div>
  );
}

export default App;
