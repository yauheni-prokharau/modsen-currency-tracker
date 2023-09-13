import React, { useEffect, useState } from "react";

import circle from "@assets/images/circle.svg";
import { formatTime } from "@utils";

import { TimeWrapper, CircleWrapper, Text } from "./styled";

const LastUpdated = () => {
  const [lastUpdated, setLastUpdated] = useState(() => {
    const storedLastUpdated = localStorage.getItem("lastUpdated");

    return storedLastUpdated ? new Date(storedLastUpdated) : new Date();
  });

  useEffect(() => {
    localStorage.setItem("lastUpdated", lastUpdated.toISOString());
  }, [lastUpdated]);

  return (
    <TimeWrapper data-cy="lastUpdated">
      <CircleWrapper src={circle} alt="circle" />
      <Text>Last updated at {formatTime(lastUpdated)}</Text>
    </TimeWrapper>
  );
};

export default LastUpdated;
