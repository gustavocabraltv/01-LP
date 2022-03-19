import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import { AboutProps, HeaderProps} from 'types/api'

import * as S from './styles'


const SectionAboutProject = ({title, description}: AboutProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source
            srcSet={require('@images/project.png?webp')}
            type="image/webp"
          />
          <source srcSet={require('@images/project.png')} type="image/png" />
          <img
            src={require('@images/project.png')}
            loading="lazy"
            alt="Tela do ecommerce com uma imagem do CMS por trás"
          />
        </S.Image>
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description}} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
