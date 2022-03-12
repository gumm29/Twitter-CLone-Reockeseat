import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles'
import ProfilePage from '../ProfilePage'

const Main = () =>{
  return(
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>

        <ProfileInfo>
          <strong>Gustavo Munis</strong>
          <span>100 tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className='active'/>
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  )
}

export default Main