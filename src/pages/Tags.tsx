import Layout from "../components/Layout";
import React, {useState} from "react";
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
    const [selected,setSelected] = useState({
        tags: [] as string[],
        note: '',
        category: '-',
        amount: '0'
    })
    return (
        <MyLayout>
            {selected.amount}
            <TagSection value={selected.tags} onChange={(tags)=> setSelected(
                {
                    ...selected,
                    tags: tags
                }
            )}/>
            <NotesSection value={selected.note} onChange={(note)=>setSelected(
                {
                    ...selected,
                    note: note
                }
            )}/>
            <CategorySection value={selected.category} onChange={(category)=>setSelected(
                {
                    ...selected,
                    category: category
                }
            )}/>
            <NumberPadSection
                value={selected.amount}
                onChange={(amount)=>setSelected(
                {
                    ...selected,
                    amount: amount
                }
            )}
                onOk={()=> {console.log('ok')}}
            />
        </MyLayout>
    )
}

export default Tags;