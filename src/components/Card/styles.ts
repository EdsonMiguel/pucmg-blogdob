import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`;

export const Title = styled.h3`
  margin-top: 15px;
  font-weight: bold;
  width: 100%;
  text-align: left;


  &:hover{
    color: #2e558c;
    cursor: pointer;
  }
`;

export const Description = styled.p`
  color: #ababab;
  font-weight: 100;
`;

export const Button = styled.a``;