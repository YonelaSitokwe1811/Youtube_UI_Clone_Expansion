const showCommentBtn = document.querySelector('.show-more-btn');

showCommentBtn.addEventListener('click', () => {
    document.querySelector('.comments').classList.toggle('visible');
})