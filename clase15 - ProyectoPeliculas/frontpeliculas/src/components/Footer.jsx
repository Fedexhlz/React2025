import React from 'react'
import "../css/Footer.css"

const Footer = () => {
  return (

    <div className="container">
      <div id="footer">
        <div className="left">
          <a href="https://www.hackstore.fo/?vip=1" title="hackstore.ac" style={{color:"#FFFFFF"}}>hackstore.ac</a> © 2021</div>
        <div className="right">
          <ul>
            <li><a href="https://www.hackstore.fo/privacidad-de-datos" rel="nofollow">Privacidad de datos</a></li>
            <li><a href="https://www.hackstore.fo/terminos-y-condiciones" rel="nofollow">Terminos y condiciones</a></li>
            <li><a href="https://www.hackstore.fo/report-abuse-dmca" rel="nofollow">Report Abuse DMCA</a></li>
          </ul>
        </div>

        <div className="right2">
          <ul>
            <li>
              <div className="footer_tit">Siguenos</div>
            </li>
            <li><a target="_blank" href="https://www.facebook.com/Hackstoreac-106508191775924" rel="nofollow">Facebook</a></li>
            <li><a target="_blank" href="https://t.me/tiohackstoreoficial" rel="nofollow">Telegram</a></li>
          </ul>
        </div>
        <div className="clear"></div>
      </div>
    </div>

  )
}

export default Footer
