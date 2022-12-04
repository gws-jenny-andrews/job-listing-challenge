import React from 'react'

const Header = () => {
  return (
    <header>
        <picture>
          <source
            media="(min-width:969px)"
            srcSet="/images/bg-header-desktop.svg"
          />
          <img src="images/bg-header-mobile.svg" />
        </picture>
      </header>
  )
}

export default Header