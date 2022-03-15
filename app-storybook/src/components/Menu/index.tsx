import * as S from './styles'

import {Search} from '@styled-icons/material-outlined'
import {ShoppingCart} from '@styled-icons/material-outlined'
import {Menu as MenuIcon} from '@styled-icons/material-outlined'
import Logo from '../Logo'
import {Close as CloseIcon} from '@styled-icons/material-outlined' 

import { useState } from 'react'






const Menu = () => {

       const [isOpen, setIsOpen] = useState(false)

       return (
              <S.Wrapper>

              <S.IconWrapper> 
                     <MenuIcon onClick={() => setIsOpen(true)}/> 
              </S.IconWrapper>
              
              <S.LogoWrapper>
                       <Logo />
              </S.LogoWrapper>
              
              <S.MenuGroup> 
                 <S.IconWrapper>
                        <Search aria-label='Open Search'/>
                 </S.IconWrapper>
                      
                 <S.IconWrapper>
                        <ShoppingCart aria-aria-label='Open Shopping Cart'/>
                 </S.IconWrapper>
              </S.MenuGroup>
              
              <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
                     <CloseIcon aria-label='Close Menu' onClick={() => setIsOpen(false)}/>
                <S.MenuNav>
                     <S.MenuLink href='#'>Home</S.MenuLink>
                     <S.MenuLink href='#'>Explore</S.MenuLink>
                </S.MenuNav>
              </S.MenuFull>

             
               
                 
                </S.Wrapper>
       )
 
}
export default Menu