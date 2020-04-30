import React, { useEffect, useState } from "react"

const FlashMessages = ({ messages }) => {
  return (
    <div className="floating-alerts">
      {messages.map((msg, index) => {
        return (
          <div key={index} className="alert alert-success text-center floating-alert shadow-sm">
            <p>{msg}}</p>
          </div>
        )
      })}
    </div>
  )
}

export default FlashMessages
