import React from 'react'

export function BaseCard(props) {
  const { children } = props

  return <div className="BasicCard">{children}</div>
}

export default function Card(props) {
  const { title, content } = props

  return (
    <div className="BasicCard">
      <div className="BasicCardTitle">{title}</div>
      <div className="BasicCardContent">{content}</div>
    </div>
  )
}
