import React from 'react'

function Header() {
  return (
    <div>
    <header style={headerStyle}>
        <h1 >Budget Tool</h1>
      </header>
    </div>
  )
}

const headerStyle={
  color:'#333',
  textAlign: 'center'
}

export default Header;
