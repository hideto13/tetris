import { StyledDisplay } from './Display.styled'

export default function Display({ gameOver, text }) {
  return <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
}
