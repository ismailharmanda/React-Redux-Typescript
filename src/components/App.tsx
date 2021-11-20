import React, { useState } from "react";
interface AppProps {}

const App: React.FC<AppProps> = (): JSX.Element => {
  const [counter, setCounter] = useState(0);

  const onIncrement = (): void => {
    setCounter((prev) => prev + 1);
  };

  const onDecrement = (): void => {
    setCounter((prev) => prev - 1);
  };

  return <div>Hi there!</div>;
};

export default App;
