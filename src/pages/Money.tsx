import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import TagSection from "./Money/TagSection";
import NotesSection from "./Money/NotesSection";
import CategorySection from "./Money/CategorySection";
import NumberPadSection from "./Money/NumberPadSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
function Money() {
    const [selected,setSelected] = useState({
        tagIds: [] as number[],
        note: '',
        category: '-',
        amount: '0'
    })
    type Selected = typeof selected;
    const onChange = (obj:Partial<Selected>)=> {
        setSelected({
            ...selected,
            ...obj
        })
    }
    return (
        <MyLayout>
            {selected.note}
            <hr/>
            {selected.tagIds}
            <TagSection value={selected.tagIds} onChange={(tagIds)=> onChange({tagIds:tagIds})}/>
            <NotesSection value={selected.note} onChange={(note)=>onChange({note: note})}/>
            <CategorySection value={selected.category} onChange={(category)=>onChange({category: category})}/>
            <NumberPadSection
                value={selected.amount}
                onChange={(amount)=>onChange({amount: amount})}
                onOk={()=> {console.log('ok')}}
            />
        </MyLayout>
    )
}

export default Money;