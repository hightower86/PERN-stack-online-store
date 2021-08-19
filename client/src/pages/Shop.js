import { observer } from 'mobx-react-lite'
import React from 'react'


import deviceStore from '../store/DeviceStore'

const Shop = () => {
    const { devices } = deviceStore
    console.log('devices', devices)
    return (
        <div> Devices:
            {devices?.map(device => (
                <div key={device.id}>{device.name}</div>
            ))}
        </div>
    )
}

export default observer(Shop)
