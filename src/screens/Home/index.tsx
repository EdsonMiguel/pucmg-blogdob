import React, { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container, Content, Item, Title, List  } from './styles';
import api from '../../services/callapi';

type PostsType =  {
  title: string;
  body: string;
}

interface IPosts {
  Posts: PostsType[];
}

export function Home(){  
  const [posts, setPosts] = useState<IPosts>([])
  
  async function fetchPosts() {
    const response = await api.get("/posts");
    setPosts(response.data)
  }

  useEffect(( )=> {
    fetchPosts()
  },[])

  return(
    <Container>
      <Header/>
      <Content>
        <Title>Últimas do Blog</Title>
        <List>
        {
          posts.map(post=> (
            <Item>
              <Card title={post.title} description={post.body} />
            </Item>
          ))
        }
        </List>
      </Content>
    </Container>
  )
}