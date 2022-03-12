import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles'
import Feed from '../Feed'

const ProfilePage = () =>{
  return(
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Gustavo Munis</h1>
        <h2>@gumm29</h2>

        <p>projetos <a href='https://github.com/gumm29'>aqui</a></p>

        <ul>
          <li>
            <LocationIcon/>
            SP
          </li>
          <li>
            <CakeIcon/>
            29/12/1989
          </li>
        </ul>

        <Followage>
          <span>seguindo <strong>100</strong></span>
          <span><strong>100</strong> seguidores</span>
        </Followage>

      </ProfileData>
      <Feed />
    </Container>
  )
}

export default ProfilePage