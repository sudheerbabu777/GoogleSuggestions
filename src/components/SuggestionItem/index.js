// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSuggestion} = props
  const {suggestion} = suggestionDetails

  const updateSuggestionItem = () => {
    updateSuggestion(suggestion)
  }

  return (
    <li className="container">
      <p className="title">{suggestion}</p>
      <button
        type="button"
        className="arrow-container"
        onClick={updateSuggestionItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
