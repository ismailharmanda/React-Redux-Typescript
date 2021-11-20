import React from "react";
interface AppProps {
  color: string;
  fontSize?: string;
}

const App: React.FC<AppProps> = ({ color, fontSize }) => {
  return <div style={{ color }}>Hi there</div>;
};

export default App;
