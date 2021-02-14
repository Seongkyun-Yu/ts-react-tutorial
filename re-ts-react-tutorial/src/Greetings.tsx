import React from "react";

type GreetingsProps = {
  name: String;
};

const Greetings: React.FC<GreetingsProps> = (props) => {
  return <div>{props.name}</div>;
};

export default Greetings;
