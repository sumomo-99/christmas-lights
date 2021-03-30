import {
  Icon,
} from 'semantic-ui-react'
import styles from '../styles/Light.module.css'

export default function Light(props) {
  const style = props.active ? styles.light : styles.dark

  return (
    <Icon 
      className={style}
      style={{animationDuration: `${props.interval}s`,
              animationDelay: `${Math.floor(Math.random()*Math.floor(props.interval))}s`}}
      size="massive" 
      name="lightbulb" 
      flipped="vertically" 
      color={props.color} />
  )
}