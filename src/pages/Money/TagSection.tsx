import styled from "styled-components";
import React, {useState} from 'react'
import {useTags} from "../../useTags";
import createId from "../../lib/createId";
const TagSectionUI = styled.section`
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
    background: white; 
    border: 1px solid rgb(253, 154, 22);
    border-radius: 18px;
    display: inline-block;
    padding: 3px 18px;
    font-size: 14px;
    margin: 8px 12px;
    color: rgb(253, 154, 22);
    &.selected{
      background: rgb(253, 154, 22);
      color: white;
    }
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
type Props = {
    value: number[];
    onChange:(selected: number[])=>void; // 声明参数为空，返回值为空
}
const TagSection: React.FunctionComponent<Props> = (props)=> {
    const {tags,setTags } = useTags()
    const selectedIds = props.value
    const onAddTag = ()=> {
        const newTag = window.prompt('请输入新标签的名字👻')
        if(newTag !== null){
            setTags([...tags,{id: createId(), name: newTag}])
        }
    }
    const onToggleTag = (tagId: number)=> {
        const index = selectedIds.indexOf(tagId)
        if(index >= 0){
          props.onChange(selectedIds.filter(t => t !== tagId))
            // 如果tag已经被选中了，就复制所有没有 被选中的tag，作为新的 selectedTag
        }else{
           props.onChange([...selectedIds,tagId])
        }
    }
    return (
        <TagSectionUI>
            <ol>
                {
                    tags.map(
                        tag=>
                            <li key={tag.id} onClick={()=>onToggleTag(tag.id)} className={selectedIds.indexOf(tag.id)>= 0 ? 'selected' : ''}>
                                {tag.name}
                            </li>
                    )
                }
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </TagSectionUI>
    )
}

export  default TagSection;