import fetch from 'isomorphic-unfetch'

import Card from '../styleguide/Card'
import CardTitle from '../styleguide/CardTitle'
import Container from '../styleguide/Container'
import Content from '../styleguide/Content'
import Image from '../styleguide/Image'
import Title from '../styleguide/Title'
import Header from '../styleguide/Header'

const Home = ({ users }) => (
  <div>
    <Header />
    <Title title="Lista de usuários - GITHUB" />
    <Container>
      { users.map(user => (
        <Card key={ user.id }>
          <Image src={ user.avatar_url } alt="avatar" />
          <Content>
            <CardTitle user={ user.login } url={ user.html_url } />
          </Content>
        </Card>
      )) }
    </Container>
  </div>
)

Home.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/users')
  const json = await res.json()
  return { users: json }
}

export default Home