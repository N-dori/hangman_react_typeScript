
type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?:boolean
}
export  function HangmanWord({guessedLetters,wordToGuess,reveal=false}:HangmanWordProps) {

    // const guessedLetters = ['t','d','s','e'] 
  return (
    <div className="hangman-word flex">
        {
            wordToGuess.split('').map((letter,i)=>(
                <span className="letter-place">
                    <span 
                    key={i}
                    style={{visibility:guessedLetters.includes(letter)||reveal?'visible':'hidden',
                    color:!guessedLetters.includes(letter)&& reveal?'red':'black'
                    }}>{letter}</span>
                </span>
            ))
        }
    </div>
  )
}
