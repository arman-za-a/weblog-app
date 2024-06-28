import React from "react";
import RootLayout from "./layouts/RootLayout";
import Router from "./routers/Router";
const App = () => (
  <>
    <RootLayout>
      <Router />
    </RootLayout>
  </>
);
export default App;