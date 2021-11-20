import React, { useState } from "react";
interface AppProps {
  color?: string;
  fontSize?: string;
}

const App: React.FC<AppProps> = ({ color, fontSize }) => {
  const [counter, setCounter] = useState(0);

  const onIncrement = (): void => {
    setCounter((prev) => prev + 1);
  };

  const onDecrement = (): void => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      {counter}
    </div>
  );
};

export default App;
