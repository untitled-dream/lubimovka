import React from 'react'

const ControlButton = React.memo((props) => {
  const {
    classList,
    name,
    onClick,
    title,
    type = 'button'
  } = props;

  return (
    <button
      className={classList}
      name={name}
      onClick={onClick}
      type={type}
      title={title}
    />
  )
})

export default ControlButton