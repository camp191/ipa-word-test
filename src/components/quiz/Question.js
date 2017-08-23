import React from 'react'
import PropTypes from 'prop-types'

// const filterWordData = wordDatas => {
//   if (wordDatas.length === 1) {
//     return wordDatas
//   }
//   return wordDatas.filter(wordData => {
//     if (wordData)
//   })
// }

const Question = ({ wordData }) => (
  <div>
    {Object.keys(wordData).length === 0
      ? <h2>Loading...</h2>
      : <div>
        <p>{wordData[0].pronunciations[0].ipa}</p>
        <p>{wordData[0].part_of_speech}</p>
        {wordData[0].senses[0].definition.map(meaning => <p>{meaning}</p>)}
      </div>
    }
  </div>
)

Question.propTypes = {
  wordData: PropTypes.object,
}

export default Question
