import React from 'react'
import Button from '../Button'
import { 
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon
} from './styles'

const MenuBar:React.FC = () =>{
  return(
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Pagina Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificacoes</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritos</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweettar</span>
        </Button>
      </TopSide>

      <BotSide>
        <Avatar />

        <ProfileData>
          <strong>Gustavo Munis</strong>
          <span>@gumm29</span>
        </ProfileData>

        <ExitIcon />
      </BotSide>
    </Container>
  )
}

export default MenuBar