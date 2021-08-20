import { observer } from 'mobx-react-lite'
import React from 'react'
import styled from 'styled-components'


import deviceStore from '../store/DeviceStore'

const ListItem = styled.div`
  border: 1px solid #999;
  padding: 10px;
  margin: 5px auto;
    display: flex;
`
const Img = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 5%;
`

const Shop = () => {
    const { devices } = deviceStore
    console.log('devices', devices)
    return (
        <div> Devices:
            {devices?.map(device => (
                <ListItem key={device.id}>
                    {device.name}
                    <Img src={device.img} alt={device.name} />
                </ListItem>
            ))}
        </div>
    )
}

export default observer(Shop)
