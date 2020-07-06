import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import PropsTypes from "prop-types"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Notification = ({ text, path }) => {
  useEffect(() => {
    toast(text, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }, [text])
  return (
    <>
      <Link to={path}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Link>
    </>
  )
}

Notification.propsTypes = {
  text: PropsTypes.string,
  path: PropsTypes.string,
}

export default Notification
