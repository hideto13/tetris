import { StyledCell } from './Cell.styled'
import { TETROMINOS } from '../../tetrominos'

export default function Cell({ type }) {
  return <StyledCell type={type} color={TETROMINOS[type].color} />
}