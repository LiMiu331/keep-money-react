import styled from "styled-components";
import React from "react";
import {NavLink} from "react-router-dom";
import Icon from "./icon";

const NavWrapper = styled.nav`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  ul {
  display: flex;
    li
    {
    width: 33.333%;
    text-align: center;
    a{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4px 0;
      line-height: 24px;
      .icon{
      width: 24px;
      height: 24px;
      }
      &.selected{
      color: rgba(253, 154, 22);
      }
    }
    }
  }
`
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName={'selected'}>
                        <Icon name={'label'}/>
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName={'selected'}>
                        <Icon name={'charge'}/>
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName={'selected'}>
                        <Icon name={'statistics'}/>
                        统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav;