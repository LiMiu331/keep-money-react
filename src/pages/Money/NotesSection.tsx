import styled from "styled-components";
import React, {ChangeEventHandler} from "react";
import Input from "../../components/Input";

const NotesSectionUI = styled.section`
background: #f5f5f5;
padding: 14px 16px;
font-size: 14px;
`
type Props = {
    value: string,
    onChange: (note: string)=>void;
}
const NotesSection:React.FC<Props> = (props) => {
    const note = props.value
    return(
        <NotesSectionUI>
            <Input label={'备注'}
                   value={note}
                   type="text"
                   placeholder={'请输入备注'}
                   onChange={(e)=> props.onChange(e.target.value)}/>
        </NotesSectionUI>
    )
}
export default NotesSection;