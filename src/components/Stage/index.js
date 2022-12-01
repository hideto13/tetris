import Cell from '../Cell'
import { StyledStage } from './Stage.styled'

export default function Stage({ stage }) {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
  )
}
