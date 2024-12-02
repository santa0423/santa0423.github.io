document.getElementById('transition-btn').addEventListener('click', function() {
    // fade-out 애니메이션을 적용
    document.body.classList.add('fade-out');
    
    // 애니메이션이 끝난 후 페이지를 이동
    setTimeout(function() {
        window.location.href = '화면 전환2.html';  // 두 번째 페이지로 이동
    }, 1000); // 1초 후에 페이지 이동 (애니메이션 시간과 맞춰줌)
});
