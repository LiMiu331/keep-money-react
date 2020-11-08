import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import Icon from "../components/icon";
import {Link} from "react-router-dom";
import {useTags} from "../useTags";
import Button from "../components/Button";

const      TagList = styled.ol`
  font-size: 16px;
  li{
    a{
      display: flex;
      justify-content: space-between;
    }
    border-bottom: 1px solid #d5d5d5;
    line-height: 20px;
    padding: 12px 16px;
    align-items: center;
  }
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
function Tags() {
   const {tags } = useTags()
    return (
        <Layout>
            <TagList>
            {tags.map(tag=> <li key={tag.id}>
                <Link to={`/tags/${tag.id}`}>
                <span className={'oneLine'}>
                    {tag.id}{tag.name}
                </span>
                <Icon name={'right'}/>
                </Link>
            </li>)}
            </TagList>
            <Center>
                <Button>新增标签</Button>
            </Center>
        </Layout>
    )
}
export default Tags;