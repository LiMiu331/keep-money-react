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
import TagEdit from "./pages/Tags/TagEdit";

const AppWrapper = styled.div`
color: #333;
`

function App() {
    return (
        <AppWrapper>
            <Router>
                <Switch>
                    <Route path="/tags" exact>
                        <Tags/>
                    </Route>
                    <Route path="/tags/:id" exact>
                        <TagEdit/>
                    </Route>
                    <Route path="/money" exact>
                        <Money/>
                    </Route>
                    <Route path="/statistics" exact>
                        <Statistics/>
                    </Route>
                    <Redirect exact from={"/"} to={"/money"}/>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
}

export default App;