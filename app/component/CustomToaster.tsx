import React from 'react'
import { Toaster } from 'react-hot-toast'

const CustomToaster = () => {
  return (
      <Toaster
        position="top-center"
        gutter={50}
        containerStyle={{ marginTop: "1rem" }}
        toastOptions={{
          success: {
            duration: 1000,
          },
          error: {
            duration: 2000,
          },
          style: {
            borderRadius: '2rem',
            fontSize: "13px",
            maxWidth: "12rem",
            padding: "5px 10px",
            backgroundColor: "#eee",
            color: "#444",
          },
        }}
      />
  )
}

export default CustomToaster
