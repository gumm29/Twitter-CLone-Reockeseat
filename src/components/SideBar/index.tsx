import React from 'react'
import StickyBox from 'react-sticky-box'
import List from '../List'
import FollowSugestions from '../FollowSugestions'
import News from '../News'
import {Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles'

const SideBar: React.FC = () =>{
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="busca no twitter" />
        <SearchIcon />
      </SearchWrapper>

      {/* <StickyBox> */}
        <Body>
          <List
            title="Telvez vc curta"
            elements={[
              <FollowSugestions name="Gustavo" nickname="@gumm29" />,
              <FollowSugestions name="Manu" nickname="@manu" />,
              <FollowSugestions name="Gabriel" nickname="@gmm17" />
            ]}
          />

          <List
            title="Telvez vc curta"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Telvez vc curta"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Telvez vc curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      {/* </StickyBox> */}
    </Container>
  )
}

export default SideBar