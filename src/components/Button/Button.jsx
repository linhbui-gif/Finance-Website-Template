import { Button as AntdButton } from 'antd'
import { useNavigate } from 'react-router-dom'

import Icon from '@/components/Icon'
import './Button.css'
const ButtonComponent = ({
  className,
  size,
  iconName,
  iconColor,
  type,
  htmlType,
  title,
  danger,
  reverse,
  link,
  disabled,
  loading,
  secondIconName,
  secondIconColor,
  onClick,
  block
}) => {
  const navigate = useNavigate()
  const handleClickButton = () => {
    if (link) navigate(link)
    else onClick?.()
  }
  return (
    <div className={`Button`}>
      <AntdButton
        className={className}
        size={size}
        type={type}
        htmlType={htmlType}
        onClick={handleClickButton}
        danger={danger}
        disabled={disabled}
        block={block}
        loading={loading}
      >
        <div
          className={`${secondIconName ? 'secondIconName flex items-center gap-2' : ''}`}
          style={{ flexDirection: reverse ? 'row-reverse' : undefined }}
        >
          {iconName && <Icon name={iconName} color={iconColor} />}
          {title && <span>{title}</span>}
          {secondIconName && <Icon name={secondIconName} color={secondIconColor} />}
        </div>
      </AntdButton>
    </div>
  )
}
export default ButtonComponent
