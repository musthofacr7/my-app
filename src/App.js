import React from "react";
import Counter from "./component/counter/index";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
          <Counter />
        </Route>
        <Route path="/a">
          <h1>A</h1>
        </Route>
        <Route path="/b">
          <h1>B</h1>
        </Route>
        <Route path="/">
          <h1>Error 404</h1>
        </Route>
      </Switch>
      {/* <Counter />
      <Counter /> */}
      {/* <h1>Halo Dunia</h1>
      <h1>Halo Dunia</h1>
      <Paijo baju="biru">Berdiri</Paijo> */}
    </div>
  );
}

export default App;
