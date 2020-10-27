import styled from "styled-components";
import React from "react";
import {Link} from "react-router-dom";
require ('icon/label.svg')
require ('icon/charge.svg')
require('icon/statistics.svg')
const NavWrapper = styled.nav`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  ul {
  display: flex;
    li{
    width: 33.333%;
    text-align: center;
    padding: 4px 0;
    line-height: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon{
      width: 24px;
      height: 24px;
      }
    }
  }
`
const Nav = ()=> {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <svg className={"icon"}>
                        <use xlinkHref="#label"/>
                    </svg>
                    <Link to="/tags">
                        标签页
                    </Link>
                </li>
                <li>
                    <svg className={"icon"}>
                        <use xlinkHref="#charge"/>
                    </svg>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <svg className={"icon"}>
                        <use xlinkHref="#statistics"/>
                    </svg>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav;