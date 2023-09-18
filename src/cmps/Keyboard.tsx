const alphbet=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',' Y', 'Z']

type KeyboardProps = {
    disabled:boolean
    activeLetter:string[]
    inactiveLetters:string[]
    addGuessedLetter:(letter:string)=> void

}
export  function Keyboard({activeLetter , inactiveLetters,addGuessedLetter,disabled=false}:
    KeyboardProps) {
        return (
            <div className="keyboard grid">{
                alphbet.map(key => {
                    const active = activeLetter.includes(key.toLocaleLowerCase())
                    const inactive = inactiveLetters.includes(key.toLocaleLowerCase())
                    
                    return <button disabled={active|| inactive ||disabled}
                                   onClick={()=>addGuessedLetter(key)}
                                   className={`key ${active ? 'active':''} ${inactive ? 'inactive':''}` }
                                   key={key} >{key}
                                   </button>
                }
            )
    }</div>
  )
}
