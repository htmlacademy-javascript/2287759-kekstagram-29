const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');

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
};
