import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import robot from "../assets/robot.gif";

function Welcome() {
    const [currentUserName, setCurrentUserName] = useState(undefined);

    useEffect(() => {
        const getCurrUserName = async() =>{
            if (localStorage.getItem("chat-app-user")) {
                setCurrentUserName(await JSON.parse(localStorage.getItem("chat-app-user")).username);
            }
        }
        getCurrUserName();
    })

    return (
        <Container>
            <img src={robot} alt="" />
            <h1>Welcome, {currentUserName && (
                 <span>{currentUserName}!</span>
            )}
            </h1>
            <h3>Please select a chat to start messaging.</h3>
        </Container>
    )
}
const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;

export default Welcome