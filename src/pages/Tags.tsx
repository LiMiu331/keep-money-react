import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";

const TagSection = styled.section`
 background: #ffffff;
 border: 1px solid red;
 padding: 12px 16px;
 ol{
  margin: 0 -12px;
  li{
    background: rgb(253, 154, 22);
    border-radius: 18px;
    display: inline-block;
    padding: 3px 18px;
    font-size: 14px;
    margin: 8px 12px;
    color: white;
  }
 }
 button{
 background: none;
 border: none;
 border-bottom: 1px solid #333;
 padding: 2px 4px;
 color: #666;
 margin-top: 8px;
 }
`
const NotesSection = styled.section`
background: #f5f5f5;
padding: 0px 16px;
font-size: 14px;
  label{
    display: flex;
    align-items: center;
    span{
      margin-right: 16px;
      white-space: nowrap;
    }
    input{
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`
const CategorySection = styled.section`
font-size: 24px;
  ul{
  display: flex;
  background: white;
  color: rgb(253, 154, 22);
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
const NumberPadSection = styled.section`

`

function Tags() {
    return (
        <Layout>
            <TagSection className={'tags'}>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder={'请输入备注'}/>
                </label>
            </NotesSection>
            <CategorySection> 
                <ul>
                    <li className={'selected'}>支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div>100</div>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    )
}
export default Tags;