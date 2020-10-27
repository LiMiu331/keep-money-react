// @ts-ignore
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from "./components/Layout";
function App() {
  return (
      <Router>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Redirect exact from={"/"} to={"tags"}/>
            <Route path="*">
              <Notfound/>
            </Route>
          </Switch>
      </Router>
  );
}
function Notfound(){
  return <h2>找不到该页面</h2>
}

function Tags() {
  return (
      <Layout>
          <h2>标签页</h2>
      </Layout>
  )
}

function Money() {
  return (
      <Layout>
          <h2>记账页</h2>
      </Layout>
  )
}

function Statistics() {
  return (
      <Layout>
          <h2>统计页</h2>
      </Layout>
  )
}
export default App;