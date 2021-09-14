import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import firebase from "firebase";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [messageInput, setMessageInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessageInput = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messageInputs").add({
      messageInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });
    chatRef.current.scrollIntoView({ behavior: "smooth" });
    setMessageInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessageInput}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
