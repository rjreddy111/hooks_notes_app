// Write your code here
import {ListItem, Heading, Para} from './styledComponents'

const NoteItem = props => {
  const {eachTipList} = props
  const {noteheading, textAreaText} = eachTipList
  console.log(eachTipList)
  return (
    <ListItem>
      <Heading>{noteheading}</Heading>
      <Para>{textAreaText}</Para>
    </ListItem>
  )
}

export default NoteItem
