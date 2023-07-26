const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');


function showComments(){
  const commentsAll = document.querySelector('.comments-count').textContent;
  let commentsShown = 5;
  document.querySelector('.social__comments-loader').addEventListener('click', ()=>{
    if(commentsShown < commentsAll && (commentsAll - commentsShown) > 5){
      commentsShown = commentsShown + 5;
      document.querySelector('.social__comment-count').textContent = `${commentsShown} из ${commentsAll}`;
    } else {
      commentsShown = commentsAll;
      document.querySelector('.social__comment-count').textContent = `${commentsShown} из  ${commentsAll}`;
    }
  });
}

export const renderComments = (comments) => {
  commentsList.innerHTML = '';
  const commentsListFragment = document.createDocumentFragment();
  comments.forEach(({avatar, message, name}) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentAvatar = commentElement.querySelector('.social__picture');
    const commentText = commentElement.querySelector('.social__text');
    commentAvatar.src = avatar;
    commentAvatar.alt = name;
    commentText.textContent = message;
    commentsListFragment.append(commentElement);
  });
  commentsList.append(commentsListFragment);
  showComments();
};


