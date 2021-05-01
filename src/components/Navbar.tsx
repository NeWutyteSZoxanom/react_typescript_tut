import React from 'react'

const Navbar:React.FC = () => {
    return (
        <nav>
        <div className="nav-wrapper  teal darken-4 plrm">
          <a href="\" className="brand-logo">React+TypeScript</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down ">
            <li><a href="\">Spisok del</a></li>
            <li><a href="\">Info</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar


