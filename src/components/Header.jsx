import React from 'react'

const Header = () => {
  return (
    <header>
        <picture>
          <source
            media="(min-width:969px)"
            srcSet="/images/bg-header-desktop.svg"
          />
          <img src="images/bg-header-mobile.svg" alt="background header default" />
        </picture>
      </header>
  )
}

export default Header