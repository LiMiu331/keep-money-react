import styled from "styled-components";
import React from "react";

const CategorySectionUI = styled.section`
font-size: 24px;
  ul{
  display: flex;
  background: white;
  color: rgb(253, 154, 22);
  border: 2px solid;
    li{
    width: 50%;
    text-align: center;
    padding: 16px 0;
      &.selected{
        background: rgb(253, 154, 22);
        color: white;
      }
    }
  }
`
type Props = {
    value: string
    onChange: (category: string)=>void;
}
const CategorySection: React.FunctionComponent<Props> = (props) => {
    const category = props.value
    return (
        <CategorySectionUI>
        <ul>
            <li className={category === '-' ? 'selected' : ''} onClick={()=> {props.onChange('-')}}>支出</li>
            <li className={category === '+' ? 'selected' : ''} onClick={()=> {props.onChange('+')}}>收入</li>
        </ul>
        </CategorySectionUI>
    )
}
export default CategorySection;