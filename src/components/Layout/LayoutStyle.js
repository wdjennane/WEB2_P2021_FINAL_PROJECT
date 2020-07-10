import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

const LayoutWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const LayoutHeader = styled.div`
  position: fixed;
  width: 100%;
  height: ${({ isMessage }) => (isMessage ? "80px" : "60px")};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

const LayoutTitle = styled.h3`
  font-weight: bold;
  color: ${Colors.TextDark};
`

const LayoutBackLink = styled.img`
  position: absolute;
  left: 1rem;
  height: 20px;
  width: 20px;
  cursor: pointer;
`

const LayoutContainer = styled.div`
  position: fixed;
  width: 100%;
  display: block;
  height: ${({ isMessage }) =>
    isMessage ? "calc(100% - 126px)" : "calc(100% - 106px)"};
  padding: ${({ hasPadding }) => (hasPadding ? "1rem" : "unset")};
  max-width: 450px;
  transform: translateX(-50%);
  left: 50%;
  margin: ${({ isMessage }) =>
    isMessage ? "80px auto 46px;" : "60px auto 46px;"};

  div {
    height: ${({ isCard }) => (isCard ? "100%" : null)};
  }
`

export {
  LayoutWrapper,
  LayoutHeader,
  LayoutTitle,
  LayoutBackLink,
  LayoutContainer,
}
