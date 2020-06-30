import React from "react"
import { Application } from "./ApplicationStyle"
import styled from "styled-components"

const ApplicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 0.625rem;
    color: #777777;
    max-width: 70px;
    text-align: center;
  }
`

const ApplicationComponent = (props) => {
  return (
    <ApplicationContainer>
      <Application color={props.color}>
        <img src={props.image} alt="" />
      </Application>
      <span>{props.name}</span>
    </ApplicationContainer>
  )
}

export default ApplicationComponent
