// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  Mainbackground,
  CardContainer,
  InputText,
  InputtextArea,
  Addbutton,
  Heading,
  BottomContainer,
  NoNotesImage,
  UnorderedList,
} from './styledComponents'

const Notes = () => {
  const [noteheading, setHeading] = useState('')
  const [textAreaText, setTextArea] = useState('')

  const [tipsList, setTipsList] = useState([])

  const onChangeHeading = event => {
    setHeading(event.target.value)
  }

  const onChangeTextArea = event => {
    setTextArea(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()

    const newTip = {
      id: uuidv4(),
      noteheading,
      textAreaText,
    }
    setTipsList(prevState => [...prevState, newTip])
    setHeading('')
    setTextArea('')
  }

  const zeroTips = () => (
    <BottomContainer>
      <NoNotesImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png "
        alt="notes empty"
      />
      <h3>No Notes Yet</h3>
      <p>Notes you add will appear here</p>
    </BottomContainer>
  )

  const nonZeroTips = () => (
    <UnorderedList>
      {tipsList.map(eachTip => (
        <NoteItem eachTipList={eachTip} key={eachTip.id} />
      ))}
    </UnorderedList>
  )

  console.log(noteheading)
  console.log(textAreaText)
  console.log(tipsList)
  return (
    <Mainbackground>
      <Heading>Notes</Heading>
      <CardContainer onSubmit={onSubmitForm}>
        <InputText
          type="text"
          placeholder="Title"
          value={noteheading}
          onChange={onChangeHeading}
        />
        <br />
        <br />
        <InputtextArea
          rows="3"
          cols="25"
          placeholder="Take a Note..."
          value={textAreaText}
          onChange={onChangeTextArea}
        />
        <br />
        <Addbutton type="submit">Add</Addbutton>
      </CardContainer>

      {tipsList.length > 0 ? nonZeroTips() : zeroTips()}
    </Mainbackground>
  )
}

export default Notes
