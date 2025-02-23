import dynamic from 'next/dynamic'

const Public = dynamic(() => import('./public'), { suspense: true })

export default function () {
    return <Public />
}
