import React from 'react'
import styled from '@emotion/styled'

import CGD from '../static/Logos/CGD.png'
import FPO from '../static/Logos/FPO.png'
import Krungthai from '../static/Logos/Krungthai.png'
import MOF from '../static/Logos/MOF.png'
import MOTS from '../static/Logos/MOTS.png'
import TAT from '../static/Logos/TAT.png'

const BottomLogosMain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));

  img {
    justify-self: center;
    width: 56px;
  }
`

export const BottomLogos: React.FC = () => {
  return (
    <BottomLogosMain>
      <img src={CGD} alt='logo' />
      <img src={FPO} alt='logo' />
      <img src={Krungthai} alt='logo' />
      <img src={MOF} alt='logo' />
      <img src={MOTS} alt='logo' />
      <img src={TAT} alt='logo' />
    </BottomLogosMain>
  )
}
