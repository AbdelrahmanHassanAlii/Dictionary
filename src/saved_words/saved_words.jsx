import "./saved_words.css";
import {memo} from "react";
export default memo(function SavedWords({savedWords, onSearch, onDelete}) {
    const words = savedWords();
    // console.log("render saved words")
    if(words.length > 0) {
        return (
            <div className="saved-words">
            <h2 className="saved-words__title">Saved Words</h2>
            <ul className="list">
                {words.map((word, i) => (
                    <li onClick={() => onSearch(word)} key={i}>
                        <p>{word}</p>
                        <svg onClick={(event) => {onDelete(event, word)}} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                            <path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                                  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="32"/>
                            <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"
                                  d="M80 112h352"/>
                            <path
                                d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                                fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="32"/>
                        </svg>
                    </li>
                ))}
            </ul>
            </div>
        )
    }

    return (
        <div className="saved-words">
            <h2 className="saved-words__title">There are no save words😣</h2>
        </div>
    )

})