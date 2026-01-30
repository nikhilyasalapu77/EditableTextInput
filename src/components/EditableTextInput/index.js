import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {
    isEditing: true,
    text: '',
    inputValue: '',
  }

  handleInputChange = event => {
    this.setState({inputValue: event.target.value})
  }

  handleSave = () => {
    const {inputValue} = this.state
    this.setState({text: inputValue, isEditing: false})
  }

  handleEdit = () => {
    const {text} = this.state
    this.setState({isEditing: true, inputValue: text})
  }

  render() {
    const {isEditing, text, inputValue} = this.state

    return (
      <div className="outer-container">
        <div className="inner-container">
          <h1 className="heading">Editable Text Input</h1>
          {isEditing ? (
            <div className="input-section">
              <input
                type="text"
                className="input"
                value={inputValue}
                onChange={this.handleInputChange}
                placeholder="Type here..."
              />
              <button
                type="button"
                className="save-button"
                onClick={this.handleSave}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="text-section">
              <p className="saved-text">{text}</p>
              <button
                type="button"
                className="edit-button"
                onClick={this.handleEdit}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditableTextInput
