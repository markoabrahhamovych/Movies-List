import { Router } from "./router/router";
import { Suspense } from "react";

const App = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            textAlign: "center",
            paddingTop: "10px",
          }}
        >
          Loading
        </div>
      }
    >
      <Router />
    </Suspense>
  );
};

export default App;
