import React from 'react'

import RegisterBlock from '../atoms/registerBlock/registerBlock'
import Typography from '../atoms/typografy/typography'
import './form+typografy.scss'

function TypografyBlock() {
  return (
    <div className="wrapperForTime">
      {/* Для более удобного глазу расположения на экране с помощью стилейю
      Все равно же в приложении этого не будет?*/}
      <RegisterBlock />
      <Typography />
    </div>
  )
}

export default TypografyBlock
