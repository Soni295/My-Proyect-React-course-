import React from 'react'
import { Welcome } from './Components/Welcome'
import { MainGallery } from './Components/MainGallery'
import './style.css'

export default () => {
  return (
    <>
      <Welcome />
      <hr />
      <MainGallery/>
    </>
  )
}
