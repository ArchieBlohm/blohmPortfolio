import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <>
    <div className="footmain">
      <div className='footer'>
        ARCHIE BLOHM {currentYear}
      </div>
      <div className='rightFooter'>
        @archieblohm   Copyright ©
      </div>
    </div>
  
    </>
  )
}