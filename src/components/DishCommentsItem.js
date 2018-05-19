import React from 'react'
import Avatar from './Avatar'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { avatarUrl } from '../constants/ApiConstants'

const DishCommentsItem = ({ comment }) => {
    const { content, user } = comment
    const avatar = undefined
    return (
        <Item>
            <Avatar avatar={avatarUrl(avatar)}
                size="50" />
            <Details>
                <UsernameTime>
                    <Username to={`/user/${user._id}`}>
                        {user.username}
                    </Username>
                    <Time>
                        三天前
          </Time>
                </UsernameTime>
                <Content>
                    {content}
                </Content>
            </Details>
        </Item>
    )
}

export default DishCommentsItem

const Item = styled.li`
  display: flex;
  margin: 30px 0;
`


const Details = styled.div`
  flex-grow: 1;
  margin-left: 9px;
  padding-top: 5px;
`


const UsernameTime = styled.div`
  display: flex;
  justify-content: space-between;
`

const Username = styled(Link) `
  font-size: 17px;
  line-height: 24px;
  color: #6E6E6E;
`

const Time = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #AAAAAA;
`

const Content = styled.div`
  font-size: 14px;
  color: #AAAAAA;
`