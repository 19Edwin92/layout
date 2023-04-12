
import React from 'react'
import Header from '../components/Header'
import { Article } from '../components/GlobalStyled'
import styled from 'styled-components'
import { Flex } from '../components/Flex'

function Layoutmodel1() {
  return (
    <>
    <Header/>
    <Article>
      <MainFlex ai="center" gap="23" fw="wrap">
        <Layout>콘텐츠영역</Layout>
        {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(el => <Artgrambox></Artgrambox>)}
      </MainFlex>
    </Article>
    </>
  )
}

// 영찬 32인친 - 2880
// 재란 27인치 - 1920
// 승호 24인치 - 1920

export default Layoutmodel1

const Layout = styled.div`
  width: 1675px;
  min-height: 100px;
  background-color: yellow;
  text-align: right;
`

const MainFlex = styled(Flex)`
  width:auto;
  min-height:400px;
  margin: 50px 75px 100px;
  /* background-color:yellow; */
`

const Artgrambox = styled(Flex)`
  width:364px;
  min-width:364px;
  min-height:436px;
  max-height:436px;
  background-color:red;
  border-radius: 8px;
  position: relative;
`