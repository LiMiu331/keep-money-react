import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import Icon from "../components/icon";

const TagList = styled.ol`
  font-size: 16px;
  li{
    border-bottom: 1px solid #d5d5d5;
    line-height: 20px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  background:rgba(253, 154, 22) ;
  color: white;
  margin-top: 50px;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
function Tags() {
    const [tags, setTags] = useState<string[]>(['衣','食','住','行'])
    return (
        <Layout>
            <TagList>
            {tags.map(tag=> <li key={tag}>
                <span className={'oneLine'}>{tag}</span>
                <Icon name={'right'}/>
            </li>)}
            </TagList>
            <Center>
                <Button>新增标签</Button>
            </Center>
        </Layout>
    )
}
export default Tags;