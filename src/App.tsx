import  { useEffect,useState,useCallback} from 'react'
import words from './wordList.json'
import './assets/scss/main.scss';
import { HangmanDrawing } from './cmps/HangmanDrawing';
import { HangmanWord } from './cmps/HangmanWord';
import { Keyboard } from './cmps/Keyboard';

function App() {
const [wordToGuess, setWordToGuess] = useState('')

const [guessedLetters, setGuessedLetters] = useState<string[]>([])

const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

const isLoser = incorrectLetters.length >= 6
const isWinner = wordToGuess.split('').every(letter=> guessedLetters.includes(letter))
useEffect(() => {
  getRandomWord()
 const handler = (e: KeyboardEvent ) => {
  const key = e.key

  if(!key.match(/^[a-z]$/))return 
  e.preventDefault()
  addGuessedLetters(key)
 }

 document.addEventListener('keypress',handler)
return () => {
  document.removeEventListener('keypress',handler)
}
 }, [])
 
const addGuessedLetters = useCallback((letter:string) => {
  console.log('letter',letter);
  letter= letter.toLocaleLowerCase()
  if(guessedLetters.includes(letter) || isLoser ) return 
  setGuessedLetters(currLetters => [...currLetters, letter])
}

 , [guessedLetters,isLoser,isWinner]
)
  
const getRandomWord = ()=> {
 const randomWord = words[Math.floor(Math.random()*words.length)]
 setWordToGuess(randomWord)

}
console.log('word to guss',wordToGuess)
return (
    
      <section className='game-container flex-col'>
        <div className='game-result'>
        {isWinner&&  ' Winner ! Refresh to try again'}
        {isLoser&&  ' Nice try ! Refresh to try again'}
        </div>
        <HangmanDrawing numOfGuess={incorrectLetters.length}/>
        <HangmanWord guessedLetters={guessedLetters} 
                     wordToGuess={wordToGuess}
                     reveal={isLoser}/>
        <div className='keyboard-container'>

        <Keyboard 
        activeLetter ={guessedLetters.filter(letter =>
          wordToGuess.includes(letter))} 
          inactiveLetters ={incorrectLetters}
          addGuessedLetter={addGuessedLetters}  
          disabled={isWinner || isLoser}/>
        </div>
         </section>
       
  )
}

export default App
