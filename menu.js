// 텍스트 애니메이션
const floatingTexts = document.querySelectorAll('.floating-text'); 

const radiusX = 400; 
let angle = 0;
const speed = 0.01; 


function moveTexts() {
    floatingTexts.forEach((text, index) => {
        const centerX = window.innerWidth / 2; 
        const centerY = window.innerHeight / 2;

        let startY;
        switch (index) {
            case 0:
                startY = window.innerHeight * 0.2; 
                break;
            case 1:
                startY = window.innerHeight * 0.276;
                break;
            case 2:
                startY = window.innerHeight * 0.352;
                break;
            case 3:
                startY = window.innerHeight * 0.428; 
                break;
            case 4:
                startY = window.innerHeight * 0.504; 
                break;
            case 5:
                startY = window.innerHeight * 0.58; 
                break;
            case 6:
                startY = window.innerHeight * 0.656; 
                break;
        }

        let offsetX;
        switch (index) {
            case 0:
                offsetX = -24; // 왼쪽
                break;
            case 1:
                offsetX = -16; // 중간 왼쪽
                break;
            case 2:
                offsetX = -8; // 중앙
                break;
            case 3:
                offsetX = 0; // 중간 오른쪽
                break;
            case 4:
                offsetX = 8; // 오른쪽
                break;
            case 5:
                offsetX = 16; // 오른쪽
                break;
            case 6:
                offsetX = 24 // 오른쪽
                break;
        }

        const x = centerX + radiusX * Math.cos(angle + index * (Math.PI / 2)) + offsetX;
        const y = startY;

        text.style.left = `${x}px`;
        text.style.top = `${y}px`;

        const rotationAngle = (angle + index * (Math.PI / 10)) * (180 / Math.PI); // 각도 계산 (도 단위)
        text.style.transform = `rotateY(${rotationAngle}deg)`; // Y축 회전
    });

    angle += speed;

    requestAnimationFrame(moveTexts);
}

floatingTexts.forEach(text => {
    text.style.position = 'absolute'; // 절대 위치 설정
});

// 애니메이션 시작
moveTexts();

// 메뉴 애니메이션 (GSAP 사용)
let dy = 65; // 서브메뉴 하나 이동거리
$(function(){
    const menuHeight = 280; // 확장된 메뉴 높이
    const defaultHeight = 55; // 기본 메뉴 높이
    const animationDuration = 0.21; // 애니메이션 속도

    // 메뉴에 마우스를 올리면 펼쳐짐
    $('.menu').hover(function(){
        $(this).css('height', `${menuHeight}px`);  // 메뉴 높이 확장
        $(this).children().each(function(index){
            if(index != 4){  // 마지막 메뉴 제외
                gsap.to(this, {
                    y: -dy * (index + 1),  // 서브 메뉴 이동
                    duration: animationDuration * (index + 1),
                    ease: 'elastic.out'
                });
            }
        });
    }, function(){
        $(this).css('height', `${defaultHeight}px`);  // 메뉴 높이 원위치
        $(this).children().each(function(index){
            if(index != 4){  // 마지막 메뉴 제외
                gsap.to(this, {
                    y: 0,  // 서브 메뉴 원위치
                    duration: animationDuration * (index + 1),
                    ease: 'power3.out'
                });
            }
        });
    });
});

// 깜빡이는 기능
function blink() {
    $('#subfunction').animate({opacity: 1.0}, 500)
        .delay(600)
        .animate({opacity: 0.0}, 300, blink);
}

// 깜빡이는 애니메이션 시작
blink();

    // 도형 애니메이션 추가
    const menuCircle = document.getElementById('menu-circle');
    const menuItems = document.querySelectorAll('.menu');

    // 도형 애니메이션 실행
    function animateCircle() {
        // 도형의 초기 설정
        menuCircle.style.position = 'absolute';
        menuCircle.style.top = '50%';
        menuCircle.style.left = '50%';
        menuCircle.style.transform = 'translate(-50%, -50%)'; // 중앙에 위치
        menuCircle.style.width = '50px';
        menuCircle.style.height = '50px';
        menuCircle.style.borderRadius = '50%';
        menuCircle.style.backgroundColor = '#DE8CF2';
        menuCircle.style.opacity = '1'; // 도형 보이게 설정
        menuCircle.style.zIndex = '9999'; // 제일 위에 표시되도록 z-index 설정

        // 커짐 애니메이션
        setTimeout(() => {
            menuCircle.style.transition = 'all 0.6s ease'; // 커짐
            menuCircle.style.width = '200px';
            menuCircle.style.height = '200px';
        }, 100);

        // 작아짐 후 커짐
        setTimeout(() => {
            menuCircle.style.transition = 'all 0.5s ease';
            menuCircle.style.width = '80px';
            menuCircle.style.height = '80px';
        }, 600);

        // 화면 가득 채우기
        setTimeout(() => {
            menuCircle.style.transition = 'all 1s ease';
            menuCircle.style.width = '100vw';
            menuCircle.style.height = '100vh';
            menuCircle.style.borderRadius = '0';
        }, 1000);
        
        // 애니메이션 끝나고 페이지 이동
        setTimeout(() => {
            window.location.href = 'Lotto.html'; // 페이지 이동
        }, 2100);
    }

    // 메뉴 클릭 시 애니메이션 시작
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            animateCircle();
        });
    });

    // button 클래스 요소 클릭 시, #object1, #object2 확대 애니메이션 진행 후 링크를 오픈
$('.submenu1-1').on('click', function(){
    console.log('clicked...');
    $('#object2').animate({
        width: 10000,
        height:10000
    }, 
    700, // 애니메이션 시간
    function(){
        window.open('Mosquito.html', '_self');
    }
);
});
$('.submenu1-2').on('click', function(){
    console.log('clicked...');
    $('#object2').animate({
        width: 10000,
        height:10000
    }, 
    700, // 애니메이션 시간
    function(){
        window.open('공사중.html', '_self');
    }
);
});
$('.submenu1-3').on('click', function(){
    console.log('clicked...');
    $('#object2').animate({
        width: 10000,
        height:10000
    }, 
    700, // 애니메이션 시간
    function(){
        window.open('공사중.html', '_self');
    }
);
});
$('.submenu1-4').on('click', function(){
    console.log('clicked...');
    $('#object2').animate({
        width: 10000,
        height:10000
    }, 
    700, // 애니메이션 시간
    function(){
        window.open('공사중.html', '_self');
    }
);
});
$('.submenu2-1').on('click', function(){
    console.log('clicked...');
    $('#object1').animate({
        width: 10000,
        height:10000
    }, 
    700, // 애니메이션 시간
    function(){
        window.open('Lotto.html', '_self');
    }
    );
});
$('.submenu2-2').on('click', function(){
    console.log('clicked...');
    $('#object1').animate({
        width: 10000,
        height:10000
    }, 
    700, // 애니메이션 시간
    function(){
        window.open('공사중.html', '_self');
    }
);
});
$('.submenu2-3').on('click', function(){
    console.log('clicked...');
    $('#object1').animate({
        width: 10000,
        height:10000
    }, 
    700, // 애니메이션 시간
    function(){
        window.open('공사중.html', '_self');
    }
);
});
$('.submenu2-4').on('click', function(){
    console.log('clicked...');
    $('#object1').animate({
        width: 10000,
        height:10000
    }, 
    700, // 애니메이션 시간
    function(){
        window.open('공사중.html', '_self');
    }
);
});
$('.submenu3-1').on('click', function(){
    console.log('clicked...');
    $('#object3').animate({
        width: 10000,
        height:10000
    }, 
    700, // 애니메이션 시간
    function(){
        window.open('Love.html', '_self');
    }
);
});
$('.submenu3-2').on('click', function(){
    console.log('clicked...');
    $('#object3').animate({
        width: 10000,
        height:10000
    }, 
    700, // 애니메이션 시간
    function(){
        window.open('공사중.html', '_self');
    }
);
});
$('.submenu3-3').on('click', function(){
    console.log('clicked...');
    $('#object3').animate({
        width: 10000,
        height:10000
    }, 
    700, // 애니메이션 시간
    function(){
        window.open('공사중.html', '_self');
    }
);
});
$('.submenu3-4').on('click', function(){
    console.log('clicked...');
    $('#object3').animate({
        width: 10000,
        height:10000
    }, 
    700, // 애니메이션 시간
    function(){
        window.open('공사중.html', '_self');
    }
);
});
$('.sub').on('click', function(){
    console.log('clicked...');
    $('#object4').animate({
        width: 10000,
        height:10000
    }, 
    700, // 애니메이션 시간
    function(){
        window.open('오늘의 운세(홈에서).html', '_self');
    }
);
});