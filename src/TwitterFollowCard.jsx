import React, { useState } from 'react';

function TwitterFollowCard({ children, userName, initalIsFollowing }) {

  const [isFollowing, setIsFollowing] = useState(initalIsFollowing);

  const textChanger = isFollowing ? "Stop following" : "Follow";

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';



  const buttonClassName2 = isFollowing
  ? ".tw-followCard-button.is-following:hover"
  : ".tw-followCard-button:hover";


  function handleClick() {
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt="avatars"
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={`${buttonClassName} ${buttonClassName2}`} onClick={handleClick}>{textChanger}</button>
        <span className='tw-followCard-stopFollow'>Stop Following</span>
      </aside>
    </article>
  );
}

export default TwitterFollowCard;
