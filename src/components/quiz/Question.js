import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    .find(wordData => (wordData.homnum !== undefined ? (wordData.headword === randomWord && wordData.homnum === 1) : (wordData.headword === randomWord)))
  const dataout = {
    word: findData.headword,
    ipa: findData.pronunciations[0].ipa,
    partOfSpeech: findData.part_of_speech,
    meaning: findData.senses[0].definition || findData.senses,
  }
  return dataout
}

class Question extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.wordData).length <= 1
          ? <h2>Loading...</h2>
          : <div>
            <p>{filterWordData(this.props.wordData.wordDatas, this.props.wordData.wordRandom).ipa}</p>
            <p>{filterWordData(this.props.wordData.wordDatas, this.props.wordData.wordRandom).partOfSpeech}</p>
            {filterWordData(this.props.wordData.wordDatas, this.props.wordData.wordRandom).meaning.map(meaning => (meaning.signpost === undefined ? <p>{meaning}</p> : <p>{meaning.signpost}</p>))}
            <p>{this.props.wordData.wordRandom}</p>
          </div>
        }
      </div>
    )
  }
}

Question.propTypes = {
  wordData: PropTypes.object,
}

export default Question
