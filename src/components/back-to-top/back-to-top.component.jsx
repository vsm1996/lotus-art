import React from 'react'
import './back-to-top.styles.css'
const BackToTop = () => {
    return (
        <section className="back-to-top js-editable-target editable">
        <a href="/#">
          <span className="arrow">↑</span>
          <span className="preserve-whitespace">Back to Top</span>
        </a>
      </section>
    )
}

export default BackToTop;
