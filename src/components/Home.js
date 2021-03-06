import React, { Component } from 'react'
import styled from 'styled-components'
import { PINK_PRIMARY, PINK_ALT, TEXT_PRIMARY, WHITE } from '../constants/Colors'
import Logo from './Logo'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <Wrap>
                <Hero >
                    <StyledLogo />
                    <Text>
                        <Title>吮指</Title>
                        <Slogan>享受舌尖艳遇</Slogan>
                    </Text>
                </Hero>
                <Action >
                    <Link to="/signup">注册</Link>
                    <Link to="/login">登录</Link>
                </Action>
            </Wrap>
        )
    }
}

export default Home

const Wrap = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    -45deg,
    ${PINK_PRIMARY} 0%,
    ${PINK_ALT} 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Hero = styled.div`
`

const StyledLogo = styled(Logo) `
  width: 120px;
  height: 120px;
  margin: 72px auto;
  display: block;
`


const Text = styled.div`
  height: 100px;
  color: ${TEXT_PRIMARY};
  text-align: center;
  line-height: 1.8;
`

const Title = styled.div`
  font-size: 40px;
`

const Slogan = styled.div`
  opacity: 0.8;
  font-size: 20px;
`
const Action = styled.div`
   display: flex;
   justify-content: space-around;
   padding: 80px 0;
   a {
     display: block;
     font-size: 14px;
     color: ${PINK_PRIMARY};
     background: ${WHITE};
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
     border-radius: 2px;
     text-align: center;
     width: 150px;
     line-height: 56px;
     min-height: 56px;
   }
`