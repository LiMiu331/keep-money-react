import styled from "styled-components";
import React, {useState} from "react";

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
const CategorySection: React.FunctionComponent = () => {
    const [category,setCategory] = useState('-') // + 表示收入 -表示支出
    return (
        <CategorySectionUI>
        <ul>
            <li className={category === '-' ? 'selected' : ''} onClick={()=> {setCategory('-')}}>支出</li>
            <li className={category === '+' ? 'selected' : ''} onClick={()=> {setCategory('+')}}>收入</li>
        </ul>
        </CategorySectionUI>
    )
}
export default CategorySection;