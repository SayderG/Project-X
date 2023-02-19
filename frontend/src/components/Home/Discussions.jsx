import React from "react";
import discImg from '../../assets/mock/images/discussion.png'
import './Discussions.css'

export default function Disccussions() {
  const [likes, setLikes] = React.useState(0);
  const [dislikes, setDislikes] = React.useState(0);
  return(
    <div className="discussions__container">
      <img src={discImg} alt="discussions" className="discussions__img"/>
      <div className="discussions__inner">
        <div className="discussions__title">Украсить придомовую территорию</div>
        <div className="discussions__reactions">
          <div className="discussions__like" onClick={() => setLikes(likes + 1)}>
          👍🏼 {likes}
          </div>
          <div className="discussions__dislike" onClick={() => setDislikes(dislikes + 1)}>
          👎🏼 {dislikes}
          </div>
        </div>
      </div>
    </div>
  )
}