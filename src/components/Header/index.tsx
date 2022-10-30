import React from "react";

import { 
  Container, 
  Navigation, 
  Link, 
  Content, 
  PhotoWrapper, 
  BioWrapper, 
  Greetings, 
  About, 
  ProfileImage 
} from './styles';


export function Header(){
  return(
    <Container>
      <Navigation>
        <Link>Blog</Link>
        <Link>Sobre</Link>
        <Link>Descrição</Link>
      </Navigation>
      <Content>
        <PhotoWrapper>
          <ProfileImage src="https://s2.glbimg.com/epHyTIo2TSkHZ43DXZPZoeC8a_M=/0x0:959x540/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/h/J/Ui4XL0So6yEilj6DeGXg/memedoge.jpg" />
        </PhotoWrapper>
        <BioWrapper>
          <Greetings>Seu Nome</Greetings>
          <About>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo rea</About>
        </BioWrapper>
      </Content>
    </Container>
  )
}