import React, { Component } from 'react'
import DishCommentsItem from './DishCommentsItem'
import DishCommentFormContainer from "../containers/DishCommentFormContainer";

class DishComments extends Component {

    componentDidMount = () => {
        this.props.setSubTitle({
            title: '评论',
            details: `评论数: 0`
        })
    }

    render() {
        const { commentsByDishId, match } = this.props
        const { id } = match.params
        const comments = commentsByDishId[id] || []
        const commentsCopy = comments.slice()
        return (
            <div>
                <DishCommentFormContainer />
                {
                    commentsCopy.reverse().map(comment => (
                        <DishCommentsItem
                            key={comment._id}
                            comment={comment}
                        />
                    ))
                }
            </div>
        )
    }
}


export default DishComments