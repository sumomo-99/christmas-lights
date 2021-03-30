import {
  Container, 
  Form,
  Header, 
  Icon,
} from 'semantic-ui-react'
import Link from 'next/link'
import {useState} from 'react'
import styles from '../styles/Home.module.css'
import Light from '../components/Light'

export default function Home() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple']

  const [active, setActive] = useState(false)
  const [interval, setInterval] = useState(1)

  const lights = () => {
    let coloredLights = []

    for (const color of colors) {
      coloredLights.push(
        <Light 
          key={color} 
          color={color} 
          active={active}
          interval={interval}
        />)
    }
    return coloredLights
  }

  return (
    <div>
      <Container className={styles.header}>
        <Header as="h1" textAlign="center">
          Christmas Lights
          <Header.Subheader>
            &copy;2021 sumomo-99
          </Header.Subheader>
          <Header.Subheader>
            <Link href="https://github.com/sumomo-99/christmas-lights">
              <Icon link size="big" name="github" />
            </Link>
            <Link href="https://twitter.com/sumomo_99">
              <Icon link size="big" name="twitter" />
            </Link>
          </Header.Subheader>
        </Header>
      </Container>

      <Container textAlign="center">
        {lights()}
      </Container>

      <Container textAlign="center">
        <Form className={styles.form}>
          <Form.Input
            label="Interval"
            type="range"
            min="1"
            max="5"
            value={interval}
            onChange={e => setInterval(e.target.value)} />
          <Form.Button
            toggle 
            active={active} 
            onClick={() => setActive(!active)}>
              On / Off
          </Form.Button>
        </Form>
      </Container>
    </div>
  )
}