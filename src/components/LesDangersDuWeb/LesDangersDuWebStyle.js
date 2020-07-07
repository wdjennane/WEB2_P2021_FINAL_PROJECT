import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

import LesDangersDuWebImage1 from "../../assets/images/web-danger-01.svg"
import LesDangersDuWebImage2 from "../../assets/images/web-danger-02.svg"
import LesDangersDuWebImage3 from "../../assets/images/web-danger-03.svg"
import LesDangersDuWebImage4 from "../../assets/images/web-danger-04.svg"

const LesDangersDuWebVideo = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

const LesDangersDuWebList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 2rem 0 0;
`

const LesDangersDuWebItem = styled.li`
  color: ${Colors.Brand};
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 0.5rem 0;
  }
`

const LesDangersDuWebSuccessText = styled.div`
  margin: 0 0 1rem;
  font-weight: bold;
  text-align: center;
`

export {
  LesDangersDuWebVideo,
  LesDangersDuWebList,
  LesDangersDuWebItem,
  LesDangersDuWebSuccessText,
  LesDangersDuWebImage1,
  LesDangersDuWebImage2,
  LesDangersDuWebImage3,
  LesDangersDuWebImage4,
}
