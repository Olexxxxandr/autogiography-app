import React from 'react';
import './Post.css'
import avatar from "./img/avatar.svg"
import photo from "./img/photo.svg"
import moreIcon from './img/more-icon.svg'

import likes from './img/likes.svg'
import comments from './img/comments.svg'
import forwards from './img/forwards.svg'
import savings from './img/savings.svg'

const postsList = [
    {
        id: 0,
        avatar: avatar,
        name: "Володимир Сергійович",
        prof: "Історик, психолог",
        img: photo,
        text: "Володимир Станчишин: «Кожне сьогодні мало своє вчора»..."
    }
]

const Post = () => {
    return(
        <div className="post">
            <div className="post-all">
                {
                    postsList.map(post => {
                        return(
                            <>
                                <div className="post-info">
                                    <img className="avatar" width={150} alt={post.name} src={post.avatar}/>
                                    <div className="post-info-author">
                                        <p className="post-author-name">{post.name}</p>
                                        <p className="post-author-prof">{post.prof}</p>
                                    </div>
                                    <img className="more-icon" width={45} alt="more-icon" src={moreIcon}/>
                                </div>
                                <img className="photo-post" src={post.img} alt="photo"/>
                                <p className="photo-text">{post.text}</p>
                                <div className="post-actions">
                                    <div className="post-action">
                                        <img className="post-action-set set" width={60} src={likes} alt="likes"/>
                                        <img className="post-action-set set" width={60} src={comments} alt="comments"/>
                                        <img className="post-action-set set" width={60} src={forwards} alt="forwards"/>
                                    </div>
                                    <img className="set" width={60} src={savings} alt="savings"/>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Post