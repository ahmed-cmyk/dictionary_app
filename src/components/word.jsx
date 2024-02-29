import { useEffect } from "react";
import PlayButton from "./playButton";

export default function Word({ searchResults, error }) {
  useEffect(() => console.log(searchResults));

  return (
    <section>
      {error && <p>Error: {error.message}</p>}
      {searchResults.map((result, resultIdx) => (
        <div key={resultIdx} className='body--medium'>
          <div className='result-heading'>
            <div className='flex flex-col align-items'>
              <h1 className='heading--large'>{result.word}</h1>
              <p className='heading--medium pb-1 phonetic'>{result.phonetic}</p>
            </div>
            <PlayButton phonetics={result.phonetics} />
          </div>
          {result.meanings.map((meaning, meaningIdx) => (
            <div className='definition' key={meaningIdx}>
              <p className='partOfSpeech pb-1'>
                <span className='heading--medium'>{meaning.partOfSpeech}</span>
              </p>
              <h3 className='heading--small pb-1'>Meaning</h3>
              <ul className='mb-1'>
                {meaning.definitions.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item.definition}
                    {item.example && (
                      <blockquote className='example pb-2'>
                        "{item.example}"
                      </blockquote>
                    )}
                  </li>
                ))}
              </ul>
              {!!meaning.synonyms.length && (
                <p className='synonyms pb-1'>
                  Synonyms <span>{meaning.synonyms.join(", ")}</span>
                </p>
              )}
            </div>
          ))}
          <small className='source-url body--small'>
            Source{" "}
            <a href={result.sourceUrls[0]} target='_blank'>
              {result.sourceUrls[0]}
              <img src='./src/assets/images/icon-new-window.svg' />
            </a>
          </small>
        </div>
      ))}
    </section>
  );
}
