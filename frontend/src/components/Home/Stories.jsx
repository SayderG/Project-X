import React from "react";
import story_prev1 from "../../assets/mock/images/story_prev1.png";
import story_prev2 from "../../assets/mock/images/story_prev2.png";
import story_prev3 from "../../assets/mock/images/story_prev3.png";
import story_prev4 from "../../assets/mock/images/story_prev4.png";
import story1 from "../../assets/mock/images/story1.png";
import story2 from "../../assets/mock/images/story2.png";
import story3 from "../../assets/mock/images/story3.png";
import close from "../../assets/close.svg";
import "./Stories.css";
import { useState } from "react";
import arrow from '../../assets/arrow_black.svg'
import unliked from '../../assets/unliked.svg'
import likedi from '../../assets/liked.svg'


function Story({storyObj, setter}) {
  if (storyObj.viewed) {
    return (
      <div className="story__container viewed" onClick={() => setter(storyObj)}>
        <img className="story__image" src={storyObj.image} alt="story" width={'72px'} height={'72px'} />
      </div>
    );
  } else if (storyObj.musthave) {
    return (
      <div className="story__container musthave" onClick={() => setter(storyObj)}>
        <img className="story__image" src={storyObj.image} alt="story" width={'72px'} height={'72px'} />
      </div>
    );
  }
  return (
    <div className="story__container" onClick={() => setter(storyObj)}>
      <img className="story__image story__state__viewed" src={storyObj.image} alt="story" width={'72px'} height={'72px'} />
    </div>
  );
}

function StoryContent({storyObj, open, setCS}) {
  return (
    <div className="story__content__container">
      <div className="story__content__hide">
        <div className="story__close__icon">
          <img src={close} alt="close" onClick={open} />
        </div>
      </div>
      <img className="story__content__image" src={storyObj.content} alt="story" width={'100%'} height={'100%'} />
      <div className="story__bottom__container">
        <div className="story__more_info">
          Подробнее
          <img src={arrow} alt="arrow" />
        </div>
        <div className="story__like">
          {
            (storyObj.liked) ? (
              <img src={likedi} alt="liked" onClick={() => setCS({...storyObj, liked: false})}/>
            ) : (
              <img src={unliked} alt="unliked" onClick={() => setCS({...storyObj, liked: true})}/>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default function Stories() {
  const [stories, setStories] = useState([
    {
      id: 1,
      viewed: false,
      image: story_prev1,
      liked: false,
      musthave: true,
      content: story1,
    },
    {
      id: 2,
      viewed: true,
      image: story_prev2,
      liked: false,
      musthave: false,
      content: story2,
    },
    {
      id: 3,
      viewed: false,
      image: story_prev3,
      liked: false,
      musthave: false,
      content: story3,
    },
    {
      id: 4,
      viewed: false,
      image: story_prev4,
      liked: false,
      musthave: false,
      content: story1,
    },
  ]);
  const [currentStory, setCurrentStory] = useState(null);
  return (
    <div className="stories__container">
      {
        stories.map((story) => {
          return <Story storyObj={story} key={story.id} setter={setCurrentStory}/>
        })
      }
      {
        (currentStory) ? (
          <StoryContent storyObj={currentStory} open={() => setCurrentStory(null)} setCS={setCurrentStory}/>
        ) : (
          <div></div>
        )
      }
    </div>
  );  

}