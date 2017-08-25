import React from 'react'
import PropTypes from 'prop-types'
import QuizCard from './../../components/quiz/QuizCard'

const filterWordData = (wordDatas, randomWord) => {
  if (wordDatas.length === 1) {
    return {
      word: wordDatas[0].headword,
      ipa: wordDatas[0].pronunciations[0].ipa,
      partOfSpeech: wordDatas[0].part_of_speech,
      meaning: wordDatas[0].senses[0].definition || wordDatas[0].senses[0].signpost,
    }
  }

  const findData = wordDatas
    .find(wordData => (
      wordData.homnum !== undefined
        ? (wordData.headword === randomWord && wordData.homnum === 1)
        : (wordData.headword === randomWord)),
    )

  const dataout = {
    word: findData.headword,
    ipa: findData.pronunciations[0].ipa,
    partOfSpeech: findData.part_of_speech,
    meaning: findData.senses[0].definition || findData.senses,
  }
  return dataout
}

// const meaningHandler = meaning => (
//   meaning.signpost === undefined
//     ? <p>{meaning}</p>
//     : <p>{meaning.signpost}</p>
// )

// <div>
// <p>{filterWordData(wordData.wordDatas, wordData.wordRandom).ipa}</p>
// <p>{filterWordData(wordData.wordDatas, wordData.wordRandom).partOfSpeech}</p>
// {filterWordData(wordData.wordDatas, wordData.wordRandom).meaning.map(meaningHandler)}
// <p>{wordData.wordRandom}</p>
// </div>

const Question = ({ wordData }) => (
  <div>
    {Object.keys(wordData).length <= 1
      ? <h2>Loading...</h2>
      : <QuizCard wordData={filterWordData(wordData.wordDatas, wordData.wordRandom)} />
    }
  </div>
)


Question.propTypes = {
  wordData: PropTypes.object,
}

export default Question
