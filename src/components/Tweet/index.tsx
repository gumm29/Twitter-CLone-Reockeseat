import React from 'react'
import {
  Container,
  Retweeted, 
  RocketSeatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description, 
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles'

const Tweet: React.FC = () =>{
  return(
    <Container>
      <Retweeted>
        <RocketSeatIcon />
        Você Retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>RocketSeat</strong>
            <span>@rocket</span>
            <Dot />
            <time>29 de marco de 22</time>
          </Header>

          <Description>Teste 123</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              20
            </Status>

            <Status>
              <RetweetIcon />
              20
            </Status>

            <Status>
              <LikeIcon />
              20
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet