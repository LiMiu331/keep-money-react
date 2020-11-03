import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";

const TagSection = styled.section`
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 background: #ffffff;
 align-items: flex-start;
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
const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  .output{
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25);
  }
  .pad{
    button{
    font-size: 18px;
    float: left;
    width: 25%;
    height: 64px;
    border: none;
    &.ok{
      height: 128px;
      float: right;
    }
    &.zero{
      width: 50%;
    }
    &:nth-child(1){
      background: #f2f2f2;
    }
    &:nth-child(2),
    &:nth-child(5){
      background: #e0e0e0;
    }
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(9){
      background: #d3d3d3;
    }
    &:nth-child(4),
    &:nth-child(7),
    &:nth-child(10){
      background: #c1c1c1;
    }
    &:nth-child(8),
    &:nth-child(11),
    &:nth-child(13){
      background: #b8b8b8;
    }
    &:nth-child(12){
      background: #9a9a9a;
     
    }
    &:nth-child(14){
      background: #a9a9a9;
    }
    }
  }
`
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Tags() {
    return (
        <MyLayout>
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
                <div className={'output'}>100</div>
                <div className={'pad'}>
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
                    <button className={'ok'}>OK</button>
                    <button className={'zero'}>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </MyLayout>
    )
}

export default Tags;