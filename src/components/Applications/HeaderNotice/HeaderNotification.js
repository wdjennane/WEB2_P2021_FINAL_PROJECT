import React from "react"
import { HeaderContainer } from "./HeaderNotificationStyle"
import NotificationIcon from "../../../assets/icons/Icon_message.svg"

const HeaderNotification = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={NotificationIcon} alt="NotificationIcon" />
        <span>Explication non lu</span>
      </div>
      <span>Maintenant</span>
    </HeaderContainer>
  )
}

export default HeaderNotification
