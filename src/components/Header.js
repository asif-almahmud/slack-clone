import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Header = () => {
  const [user] = useAuthState(auth);
  console.log("user is ", user);
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTimeIcon />
      </HeaderLeft>
      {/* Header Search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search" />
      </HeaderSearch>
      {/* Header Right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;
//
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 2rem;
  }
`;
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  height: 1.8rem;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    color: white;
    outline: none;
    width: 100%;
    height: 80%;
    min-width: 30vw;
    margin-left: 0.5rem;

    :focus {
      background-color: #603a63;
      border-radius: 2px;
    }
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 1.5rem;
  }
`;
//
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;