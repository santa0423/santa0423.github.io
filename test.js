window.onload = function() {
  setTimeout(() => {
    document.querySelector('.object').style.animation = 'shrinkAndDisappear 1s ease forwards';
  }, 500);  // 0.5초 대기 후 애니메이션 시작
};
