const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');
let commentsShown = 5;
let renderCommentsArray = [];

export const renderComments = (comments) => {
  if(renderCommentsArray.length === 0){
    renderCommentsArray = [...comments];
    commentsList.innerHTML = '';
  }
  const commentsListFragment = document.createDocumentFragment();
  renderCommentsArray.slice(0, commentsShown).forEach(({avatar, message, name}) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentAvatar = commentElement.querySelector('.social__picture');
    const commentText = commentElement.querySelector('.social__text');
    commentAvatar.src = avatar;
    commentAvatar.alt = name;
    commentText.textContent = message;
    commentsListFragment.append(commentElement);
  });
  commentsList.innerHTML = '';
  commentsList.append(commentsListFragment);
  const commentsAll = document.querySelector('.comments-count').textContent;
  if(commentsShown > commentsAll){
    commentsShown = commentsAll;
    document.querySelector('.social__comment-count').textContent = `${commentsShown} из ${commentsAll} комментариев`;
  }
  commentsShown = 5;
};

export function showMoreComments(){
  const commentsAll = document.querySelector('.comments-count').textContent;
  document.querySelector('.social__comments-loader').addEventListener('click', ()=>{
    if(commentsShown < commentsAll && (commentsAll - commentsShown) > 5){
      commentsShown = commentsShown + 5;
      document.querySelector('.social__comment-count').textContent = `${commentsShown} из ${commentsAll} комментариев`;
    } else {
      commentsShown = commentsAll;
      document.querySelector('.social__comment-count').textContent = `${commentsShown} из ${commentsAll} комментариев`;
    }
    renderComments();
  });
}
