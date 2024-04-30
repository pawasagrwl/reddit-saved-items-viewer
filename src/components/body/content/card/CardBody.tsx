// src/components/common/CardBody.tsx

import React from "react";
import TruncatedText from "./TruncatedText";

interface CardBodyProps {
  text: string;
}

const CardBody: React.FC<CardBodyProps> = ({ text }) => (
  <TruncatedText text={text} />
);

export default CardBody;
