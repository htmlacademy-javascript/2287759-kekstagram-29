const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');
let commentsShown = 0;
let renderCommentsArray = [];
let commentsAll = 0;

export const renderComments = () => {
  commentsList.innerHTML = '';
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
  commentsList.append(commentsListFragment);
  if(commentsShown > commentsAll){
    commentsShown = commentsAll;
    document.querySelector('.social__comment-count').textContent = `${commentsShown} из ${commentsAll} комментариев`;
    document.querySelector('.social__comments-loader').classList.add('hidden');
  }
};

export function showMoreComments(comments){
  if(renderCommentsArray.length === 0){
    renderCommentsArray = [...comments];
    commentsAll = renderCommentsArray.length;
    document.querySelector('.social__comment-count').textContent = `${commentsShown} из ${commentsAll} комментариев`;
  }
  if(commentsShown < commentsAll && (commentsAll - commentsShown) > 5){
    commentsShown = commentsShown + 5;
    document.querySelector('.social__comment-count').textContent = `${commentsShown} из ${commentsAll} комментариев`;
  } else {
    commentsShown = commentsAll;
    document.querySelector('.social__comment-count').textContent = `${commentsShown} из ${commentsAll} комментариев`;
    document.querySelector('.social__comments-loader').classList.add('hidden');
  }
  renderComments();
}

document.querySelector('.social__comments-loader').addEventListener('click', showMoreComments);

export function resetComments(){
  renderCommentsArray = [];
  commentsShown = 0;
}
