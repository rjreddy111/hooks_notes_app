// Style your elements here
import styled from 'styled-components'

export const Mainbackground = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const CardContainer = styled.form`
  width: 80%;
  box-shadow: 1px 2px 3px 2px #aab8c8;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
`

export const InputText = styled.input`
  border: none;
  outline: none;
`

export const InputtextArea = styled.textarea`
  border: none;
  outline: none;
`

export const Addbutton = styled.button`
  height: 40px;
  width: 60px;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  background-color: #4c63b6;
  align-self: flex-end;
`
export const Heading = styled.h1`
  color: #4c63b6;
  font-family: Bree Serif;
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoNotesImage = styled.img`
  width: 70px;
`
export const UnorderedList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 80%;
  padding: 0px;
`
