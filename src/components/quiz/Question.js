import React, { Component } from 'react'
import PropTypes from 'prop-types'

const filterWordData = (wordDatas) => {
  if (wordDatas.length === 1) {
    return {
      word: wordDatas[0].headword,
      ipa: wordDatas[0].pronunciations[0].ipa,
      partOfSpeech: wordDatas[0].part_of_speech,
      meaning: wordDatas[0].senses[0].definition,
    }
  }
  return 'Hello'
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
            <p>{filterWordData(this.props.wordData.wordDatas).ipa}</p>
            <p>{filterWordData(this.props.wordData.wordDatas).partOfSpeech}</p>
            {filterWordData(this.props.wordData.wordDatas).meaning.map(meaning => <p>{meaning}</p>)}
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
