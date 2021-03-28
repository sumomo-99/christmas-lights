import {
  Icon,
} from 'semantic-ui-react'
import styles from '../styles/Light.module.css'

export default function Light({color, active}) {
  const style = active ? styles.light : styles.dark

  return (
    <Icon 
      className={style}
      size="massive" 
      name="lightbulb" 
      flipped="vertically" 
      color={color} />
  )
}