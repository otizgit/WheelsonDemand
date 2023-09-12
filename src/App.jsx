import React, { useState } from "react";
import Layout from "./components/Layout/Layout";

export const ToggleContext = React.createContext();

export default function App() {
  const [displayHeader, setDisplayHeader] = useState(true);

  return (
    <div>
      <ToggleContext.Provider value={setDisplayHeader}>
        <Layout displayHeader={displayHeader} />
      </ToggleContext.Provider>
    </div>
  );
}
