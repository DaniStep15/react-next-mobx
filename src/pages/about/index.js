import { inject, observer } from 'mobx-react'
import React from 'react'

export default inject((stores) => stores)(
    observer((props) => {
        return (
            <div className={'_container'}>
                <div className={''}>about</div>
            </div>
        )
    })
)
