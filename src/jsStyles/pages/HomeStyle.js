import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

const HomeContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HomeTitle = styled.h1`
  margin: 0 0 2rem 0;
  font-size: 1.5rem;
  text-align: center;
  color: ${Colors.TextDark};
  font-weight: 600;
`

const HomeDisclaimerButton = styled.p`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  background-color: ${Colors.Brand};
`

const HomeDisclaimerCloseButton = styled.img`
  height: 10px;
  align-self: flex-end;
`

const HomeDisclaimerModalWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HomeDisclaimerModal = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  box-shadow: 0px 5px 40px rgba(146, 146, 146, 0.25);
  padding: 1rem;
  line-height: 1.25rem;
  z-index: 1;
`

const HomeDisclaimerModalTitle = styled.h1`
  color: ${Colors.TextDark};
  font-weight: bold;
  font-size: 1.05rem;
  margin: 0 0 0.5rem 0;
`

const HomeDisclaimerModalOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

export {
  HomeContainer,
  HomeTitle,
  HomeDisclaimerModalWrapper,
  HomeDisclaimerModal,
  HomeDisclaimerModalOverlay,
  HomeDisclaimerModalTitle,
  HomeDisclaimerCloseButton,
  HomeDisclaimerButton,
}
