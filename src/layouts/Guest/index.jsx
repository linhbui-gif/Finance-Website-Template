import Header from '@/containers/Header'

const Guest = ({ children }) => {
  return (
    <div className='Guest'>
      <div className='Guest-header'>
        <Header />
      </div>
      <div className='Guest-body'>{children}</div>
      <div className='Guest-footer'></div>
    </div>
  )
}

export default Guest
