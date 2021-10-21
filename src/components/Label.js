import React from "react";
import { Badge } from "react-bootstrap";

function getTextColor(bgColor) {
  var r = parseInt(bgColor.substring(0, 2), 16); // hexToR
  var g = parseInt(bgColor.substring(2, 4), 16); // hexToG
  var b = parseInt(bgColor.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "black" : "white";
}

function Label(props) {
  const textColor = getTextColor(props.color);
  return (
    <Badge
      className="me-1"
      bg={null} // remove bg so it can be handled by style attr
      style={{
        backgroundColor: `#${props.color}`,
        color: textColor
      }}
    >
      {props.text}
    </Badge>
  );
}

export default Label;
