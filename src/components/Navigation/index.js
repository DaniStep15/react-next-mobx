import { inject, observer } from 'mobx-react'
import React from 'react'
import Link from 'next/link'
import routes from '../../pages/routes'
import styles from './navigation.module.scss'

export default inject((stores) => stores)(
    observer((props) => {
        return (
            <nav className={styles.nav_container}>
                <Link href={routes.home}>Home</Link>
                <Link href={routes.about}>About</Link>
            </nav>
        )
    })
)
