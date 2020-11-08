import React from "react";
import {useTags} from "../../useTags";
import {useParams} from "react-router-dom"
import Layout from "../../components/Layout";
import Icon from "../../components/icon";
import Button from "../../components/Button";
import styled from "styled-components";
import Input from "../../components/Input";
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`
const InputWrapper = styled.div`
 background: white;
 padding: 0 16px;
 margin-top: 8px;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const TagEdit: React.FC = ()=> {
    const {findTag, updateTag, deleteTag} = useTags()
    let { id } = useParams();
    const tag = findTag(parseInt(id))
    if(tag){
        return(
            <Layout>
                <Topbar>
                    <Icon name={"left"}/>
                    <span>编辑标签</span>
                    <Icon/>
                </Topbar>
                <InputWrapper>
                    <Input
                        label={'标签名'}
                        type={'text'}
                        placeholder={'标签名'}
                        value={tag.name}
                        onChange={(e)=> {updateTag(tag.id, {name: e.target.value})}}
                    />
                </InputWrapper>
                <Center>
                    <Button onClick={()=> deleteTag(tag.id)}>删除标签</Button>
                </Center>
            </Layout>
        )
    }else {
        return (
            <div>tag 不存在</div>
        )
    }
}
export  default TagEdit;