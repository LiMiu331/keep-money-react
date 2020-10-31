// @ts-ignore
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Tags from "./pages/Tags";
import Money from "./pages/Money";
import Statistics from "./pages/Statistics";
import NotFound from "./pages/NotFound";
import styled from "styled-components";

const AppWrapper = styled.div`
color: #333;
`

function App() {
    return (
        <AppWrapper>
            <Router>
                <Switch>
                    <Route path="/tags">
                        <Tags/>
                    </Route>
                    <Route path="/money">
                        <Money/>
                    </Route>
                    <Route path="/statistics">
                        <Statistics/>
                    </Route>
                    <Redirect exact from={"/"} to={"tags"}/>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
}

export default App;