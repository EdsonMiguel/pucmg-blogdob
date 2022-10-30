import styled from "styled-components";

export const Container = styled.header`
  background-color: #2e558c;
  margin: auto;
  color: #fff;
`;

export const Navigation = styled.nav`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Link = styled.a`
  margin: 8px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 300;

  &:hover{
    border-bottom: 1px solid #fff;
    cursor: pointer;
  }
`
export const Content = styled.div`
  margin-top: 15px; 
  padding-bottom:15px;
  display: flex;
`;

export const PhotoWrapper = styled.div`
  padding: 25px;
  width: 40%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const BioWrapper = styled.div`
  padding: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const ProfileImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 150px;
  object-fit: cover;
`;

export const Greetings = styled.h1`
  display: block;
  width: 100%;
  text-align: left;
  font-weight: bold;
  font-size: 46px;
`;

export const About = styled.p``;