import React, { Component } from 'react'

class Header extends Component{
  render(){
    return(
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a class="navbar-brand" href="#">Photobook</a>
        </nav>
      </header>
    )
  }
}

export default Header
