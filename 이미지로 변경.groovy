$(document).ready(function() {
    // 메뉴 클릭 시 서브메뉴 열고 닫기
    $('.menu').click(function() {
        const $menu = $(this);  // 클릭한 메뉴
        $menu.toggleClass('open');  // 메뉴 열기/닫기 토글
        
        // 서브메뉴 애니메이션 (GSAP 사용)
        $menu.children('.submenu').each(function(index) {
            if ($menu.hasClass('open')) {
                gsap.to(this, {
                    y: -55 * (index + 1), // 서브메뉴 슬라이드 업
                    duration: 0.3,
                    ease: 'elastic.out(1, 0.5)',
                });
            } else {
                gsap.to(this, {
                    y: 0, // 서브메뉴 원위치
                    duration: 0.3,
                    ease: 'power3.out',
                });
            }
        });
    });
});
