$(function(){
    $('#object1').on(
        'mouseenter', 
        function(){
            gsap.to(
                '#object1',
                {
                    rotation: '+=90',
                    duration: 0.5
                }
            );
        }
    );

    $('#object2').on(
        'click', 
        function(){
            gsap.to(
                '#object2',
                {
                    x: '+=' + (Math.random() * 1000 - 500),
                    duration: 2.0,
                    ease: "elastic.out"
                }
            );
        }
    );

    $('#object3').on(
        'mouseleave', 
        function(){
            gsap.to(
                '#object3',
                {
                    scale: Math.random() * 5,
                    duration: 1.0,
                    ease: "elastic.out"
                }
            );
        }
    );
});

window.addEventListener('load', () => {
    const object1 = document.getElementById('object1');
    object1.classList.add('fade-in'); // 애니메이션 클래스 추가
});
