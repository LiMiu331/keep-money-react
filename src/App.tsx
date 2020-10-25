// @ts-ignore
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
flex-grow: 1;
`
function App() {
  return (
      <Router>
        <Wrapper>
          <Main>
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
          </Main>
          <Nav/>
        </Wrapper>
      </Router>
  );
}
function Notfound(){
  return <h2>找不到该页面</h2>
}

function Tags() {
  return <h2>标签页</h2>;
}

function Money() {
  return <h2>钱页面</h2>;
}

function Statistics() {
  return <h2>统计页面</h2>;
}
export default App;