import * as React from 'react'
import {Route, Routes, Link} from 'react-router-dom'


const Footer = (props:any) => {
    return(
        <div className = 'footer'>

        <ul className = 'footerUL'>

      <li  className = 'footerLI'>ABOUT</li>
      <li  className = 'footerLI'>LEGAL</li>
      <li  className = 'footerLI'>TERMS</li>
      <li  className = 'footerLI'>PRIVACY POLICY</li>
      <li className = 'footerLI'>CUSTOMER SUPPORT</li>
      </ul>

     <p className = 'bottomLine'>©Website made by <a className = 'linkedin' href = 'https://www.linkedin.com/in/jiheekim03/'>Jihee Kim</a> and <a className = 'linkedin' href = 'https://www.linkedin.com/in/lilychen910/'>Lily Chen</a></p>

        </div>
    )
}

export default Footer
