import React from 'react'
import { LogoProps } from 'types/api'
import * as S from './styles'

const Logo = ({url, alternativeText}:LogoProps) => <> <S.LogoWrapper src="/uploads/logo_f654f16ffd.svg" alt={alternativeText} /> <h1>{alternativeText} </h1></>

export default Logo
