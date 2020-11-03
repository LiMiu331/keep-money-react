import styled from "styled-components";
import React, {useState} from 'react'
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
const TagSection: React.FunctionComponent = (proops)=> {
    const [tags, setTags] = useState<string[]>(['衣','食','住','行'])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const onAddTag = ()=> {
        const newTag = window.prompt('请输入新标签的名字👻')
        if(newTag !== null){
            setTags([...tags,newTag])
        }
    }
    const onToggleTag = (tag: string)=> {
        const index = selectedTags.indexOf(tag)
        if(index >= 0){
          setSelectedTags(selectedTags.filter(t => t !== tag))
            // 如果tag已经被选中了，就复制所有没有 被选中的tag，作为新的 selectedTag
        }else{
           setSelectedTags([...selectedTags,tag])
        }
    }
    return (
        <TagSectionUI>
            <ol>
                {
                    tags.map(
                        tag=>
                            <li key={tag} onClick={()=>onToggleTag(tag)} className={selectedTags.indexOf(tag)>= 0 ? 'selected' : ''}>
                                {tag}
                            </li>
                    )
                }
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </TagSectionUI>
    )
}

export  default TagSection;