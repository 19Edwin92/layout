
import React from 'react'
import Header from '../components/Header'
import { Article } from '../components/GlobalStyled'
import styled from 'styled-components'

function Layoutmodel1() {
  return (
    <>
    <Header/>
    <Article>
      <Layout>콘텐츠 영역</Layout>
    </Article>
    </>
  )
}

export default Layoutmodel1

const Layout = styled.div`
  width: 1675px;
  min-height: 100px;
  background-color: yellow;
`