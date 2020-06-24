import styled from "styled-components"

const MessageInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  opacity: ${(props) => (props.disabled === false ? "1" : ".5")};
  pointer-events: ${(props) => (props.disabled === false ? null : "none")};
  position: sticky;
  bottom: 0;
  background: #e0f0f3;
  padding: 0.25rem;
`

const MessageInput = styled.input`
  width: 70%;
  outline: none;
  border: none;
  padding: 4px;
  font-size: 0.75rem;
  background: transparent;
  border: 2px solid white;
  border-radius: 10px;
  margin: 0.5rem;
  text-align: center;

  ::placeholder {
    color: #3faabc;
  }
`

const MessageIcon = styled.img`
  width: 28px;
  height: 28px;
`

export { MessageInputContainer, MessageInput, MessageIcon }
