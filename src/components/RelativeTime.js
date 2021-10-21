import { formatDistance } from "date-fns";
import React from "react";

function RelativeTime(props) {
  const string = formatDistance(new Date(props.date), new Date(), {
    addSuffix: true
  });
  return <span>{string}</span>;
}

export default RelativeTime;
