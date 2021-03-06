import React from 'react'
import styled from '@emotion/styled'

import CGD from '../static/Logos/CGD.webp'
import FPO from '../static/Logos/FPO.webp'
import Krungthai from '../static/Logos/Krungthai.webp'
import MOF from '../static/Logos/MOF.webp'
import MOTS from '../static/Logos/MOTS.webp'
import TAT from '../static/Logos/TAT.webp'
import { browserQueryRule } from '../utils/css'

const BottomLogosMain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  margin-bottom: 80px;

  img {
    justify-self: center;
    width: 56px;
    transition: all ease-in-out 550ms;

    :hover {
      transform: scale(1.2);
    }
  }

  ${browserQueryRule.largePhone} {
    grid-template-columns: repeat(6, 1fr);
    margin-left: 30px;
    margin-right: 30px;

    img {
      width: 100%;
    }
  }

  ${browserQueryRule.largeTablet} {
    grid-gap: 30px;

    img {
      width: 102px;
    }
  }
`

const BottomLogos: React.FC = () => {
  return (
    <BottomLogosMain>
      <img src={MOF} alt='logo' />
      <img src={FPO} alt='logo' />
      <img src={CGD} alt='logo' />
      <img src={Krungthai} alt='logo' />
      <img src={MOTS} alt='logo' />
      <img src={TAT} alt='logo' />
    </BottomLogosMain>
  )
}

export default BottomLogos
