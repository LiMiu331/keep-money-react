import styled from "styled-components";

const CategorySection = styled.section`
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
export default CategorySection;