import React, { useEffect, useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [asyncData, setAsyncdata] = useState(null);
  const [header, setHeader] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setAsyncdata({});
    }, 300);
  }, []);

  const onClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <main>
      <h1>Hello World!!!</h1>

      {asyncData && <div>Async data here</div>}

      <hr />

      <button onClick={onClick} data-testid="visible-btn">
        Click me
      </button>
      {isVisible && <div data-testid="visible-el">Element is visible</div>}

      <hr />

      <input
        onChange={(event) => setHeader(event.target.value)}
        value={header}
        type="text"
        placeholder="Input something here..."
      />

      <h2 data-testid="header">{header}</h2>
    </main>
  );
};

export default App;
