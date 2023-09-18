const HEAD = (<div className="head"></div>)
const BODY = (<div className="body"></div>)
const RIGHT_ARM = (<div className="rigth-arm"></div>)
const Left_ARM = (<div className="left-arm"></div>)
const RIGHT_LEG = (<div className="rigth-leg"></div>)
const LEFT_LEG = (<div className="left-leg"></div>)
const BODY_PARTS= [HEAD, BODY, RIGHT_ARM, Left_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numOfGuess: number
} 

export  function HangmanDrawing({numOfGuess}:HangmanDrawingProps) {
  return (
    <div className="drawing-container">
        <div className="part0"></div>
      {BODY_PARTS.slice(0,numOfGuess)}
        <div className="part1"></div>
        <div className="part2"></div>
        <div className="part3"></div>

    </div>
  )
}
