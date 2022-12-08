import { StyledStartButton } from './StartButton.styled'

export default function StartButton({ callback }) {
  return <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
}
