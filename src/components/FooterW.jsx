import React from 'react'

export default function FooterW() {
    const currentYear = new Date().getFullYear()
  return (
    <>
    <div className='footmainw'>
      <div className='footerW'>
        ARCHIE BLOHM {currentYear}
      </div>
      <div className='rightFooterW'>
        @archieblohm   Copyright ©
      </div>
    </div>
    </>
  )
}