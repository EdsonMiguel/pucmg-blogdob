import react from "react"
import { Container, Title, Description, Button } from './styles';

interface Props {
  title: string;
  description: string;
}

export function Card({ title, description}: Props ){
  return(
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}