// @ts-ignore
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
border: 1px solid green;
flex-grow: 1;
`
const Nav = styled.nav`
  border: 2px solid purple;
  ul {
  display: flex;
    li{
    width: 33.333%;
    text-align: center;
    padding: 16px;
    }
  }
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
          <Nav>
            <ul>
              <li>
                <Link to="/tags">标签页</Link>
              </li>
              <li>
                <Link to="/money">记账页</Link>
              </li>
              <li>
                <Link to="/statistics">统计页</Link>
              </li>
            </ul>
          </Nav>
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