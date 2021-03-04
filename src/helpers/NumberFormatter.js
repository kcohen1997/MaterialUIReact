import React from "react";
import NumberFormat from "react-number-format";

function NumberFormatter(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef ? inputRef : null}
      onValueChange={
        onChange
          ? (values) => {
              onChange({
                target: {
                  name: props.name,
                  value: values.value,
                },
              });
            }
          : () => {}
      }
    />
  );
}

export const ThousandsFormatter = (props) => {
  return (
    <NumberFormatter
      thousandSeparator
      isNumericString
      decimalScale={0}
      {...props}
    />
  );
};

export const PriceFormatter = (props) => {
  return (
    <NumberFormatter
      thousandSeparator
      isNumericString
      prefix="$"
      decimalScale={0}
      {...props}
    />
  );
};

export const PhoneFormatter = (props) => {
  return <NumberFormatter format="(###) ###-####" {...props} />;
};

export const NiceFormatter = (props) => {
  return <NumberFormatter format="# # # # # #" {...props} />;
};

export default NumberFormatter;
