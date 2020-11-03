import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import TagSection from "./Tags/TagSection";
import NotesSection from "./Tags/NotesSection";
import CategorySection from "./Tags/CategorySection";
import NumberPadSection from "./Tags/NumberPadSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Tags() {
    return (
        <MyLayout>
            <TagSection/>
            <NotesSection/>
            <CategorySection/>
            <NumberPadSection/>
        </MyLayout>
    )
}

export default Tags;