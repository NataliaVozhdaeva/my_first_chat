import React from 'react'
import './typographyStyle.scss'

function Typography(): JSX.Element {
  return (
    <div className="wrapper">
      <div className="desktop">
        <h1 className="header1"> Header 1 </h1>
        <h2 className="header2"> Header 2 </h2>
        <h3 className="header3"> Header 3 </h3>
        <h4 className="header4"> Header 4 </h4>
        <p className="text1"> Text 1</p>
        <p className="text2"> Text 2 </p>
      </div>
      <div className="mobile">
        <h1 className="header1-mobile"> Header 1 </h1>
        <h2 className="header2-mobile"> Header 2 </h2>
        <h3 className="header3-mobile"> Header 3 </h3>
        <h4 className="header4-mobile"> Header 4 </h4>
        <p className="text1-mobile"> Text 1</p>
        <p className="text2-mobile"> Text 2 </p>
      </div>
    </div>
  )
}

export default Typography
