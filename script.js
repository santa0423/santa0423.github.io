// 로딩 파트
window.addEventListener('load', function () {
  const loading = document.getElementById('loading');

  setTimeout(function () {
    loading.style.display = 'none';
  }, 300);
});

// GSAP 애니메이션 초기화
gsap.registerPlugin(ScrollTrigger);

// 애니메이션 설정
gsap.to("#Main-title", {
  x: "-100%", // 왼쪽으로 이동
  opacity: 0, // 점차 투명해짐
  scrollTrigger: {
    trigger: "#Main-title", // 트리거 요소
    start: "top 30%", // 스크롤 시작 지점 (화면의 80% 아래)
    end: "top -10%", // 스크롤 종료 지점 (화면의 20% 아래)
    scrub: true, // 스크롤에 따라 부드럽게 동작
    markers: false, // 디버그용 마커 (필요 없으면 제거)
  },
});

gsap.to("#Sub-title", {
  x: "-100%", // 왼쪽으로 이동
  opacity: 0, // 점차 투명해짐
  scrollTrigger: {
    trigger: "#Main-title", // 트리거 요소
    start: "top 20%", // 스크롤 시작 지점 (화면의 80% 아래)
    end: "top -40%", // 스크롤 종료 지점 (화면의 20% 아래)
    scrub: true, // 스크롤에 따라 부드럽게 동작
    markers: false, // 디버그용 마커 (필요 없으면 제거)
  },
});

gsap.to("#주석스껄라이크우진돗개", {
  x: "-100%", // 왼쪽으로 이동
  opacity: 0, // 점차 투명해짐
  scrollTrigger: {
    trigger: "#Main-title", // 트리거 요소
    start: "top 3%", // 스크롤 시작 지점 (화면의 80% 아래)
    end: "top -76%", // 스크롤 종료 지점 (화면의 20% 아래)
    scrub: true, // 스크롤에 따라 부드럽게 동작
    markers: false, // 디버그용 마커 (필요 없으면 제거)
  },
});
// 이용 설명 화살표 애니메이션
gsap.to("#이용설명화살표", {
  y: 10, // 아래로 10px 이동
  repeat: -1, // 무한 반복
  yoyo: true, // 애니메이션을 되돌림
  duration: 1, // 이동 시간
  ease: "power1.inOut" // 이동 효과
});

// 공통 함수: 스크롤 잠금/해제
function lockScroll() {
  document.body.style.overflow = "hidden"; // 스크롤 잠금
}

function unlockScroll() {
  document.body.style.overflow = ""; // 스크롤 해제
}

// 플로팅 모달 관련 변수
const floatModal = document.getElementById("myModal");
const floatButton = document.getElementById("float-button");
const overlay = document.getElementById("overlay");

let isFloatModalOpen = false;
let isFloatAnimating = false;

function openFloatModal() {
  if (isFloatAnimating || isFloatModalOpen) return;
  isFloatAnimating = true;

  overlay.style.display = "block";
  floatModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    floatModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "0%",
      ease: "power2.out",
      onComplete: () => {
        isFloatAnimating = false;
        isFloatModalOpen = true;
      }
    }
  );
  floatButton.src = "images/float-close-button.png";
}

function closeFloatModal() {
  if (isFloatAnimating || !isFloatModalOpen) return;
  isFloatAnimating = true;

  gsap.to(floatModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      floatModal.style.display = "none";
      isFloatAnimating = false;
      isFloatModalOpen = false;
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });

  floatButton.src = "images/float_button.png";
}

function toggleFloatModal() {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    openFloatModal();
  }
}

floatButton.addEventListener("click", toggleFloatModal);

// "눈먼자들의도시" 모달 관련 변수
const cityModal = document.getElementById("눈먼자들의도시");
const cityOpenButton = document.getElementById("눈먼자들의도시openModal");

// 눈먼자들의도시 모달관련
function openCityModal() {
  overlay.style.display = "block";
  cityModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    cityModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeCityModal() {
  gsap.to(cityModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      cityModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

cityOpenButton.addEventListener("click", openCityModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeCityModal();
  }
});

// "핑거스미스" 모달 관련 변수
const fingerModal = document.getElementById("핑거스미스");
const fingerOpenButton = document.getElementById("핑거스미스openModal");

// 핑거스미스 모달관련
function openFingerModal() {
  overlay.style.display = "block";
  fingerModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    fingerModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeFingerModal() {
  gsap.to(fingerModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      fingerModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

fingerOpenButton.addEventListener("click", openFingerModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeFingerModal();
  }
});

// "오만과편견" 모달 관련 변수
const omanModal = document.getElementById("오만과편견");
const omanOpenButton = document.getElementById("오만과편견openModal");

// 오만과편견 모달관련
function openOmanModal() {
  overlay.style.display = "block";
  omanModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    omanModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeOmanModal() {
  gsap.to(omanModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      omanModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

omanOpenButton.addEventListener("click", openOmanModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeOmanModal();
  }
});

// "어린왕자" 모달 관련 변수
const wangModal = document.getElementById("어린왕자");
const wangOpenButton = document.getElementById("어린왕자openModal");

// 왕ㅇ자 모달관련
function openWangModal() {
  overlay.style.display = "block";
  wangModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    wangModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeWangModal() {
  gsap.to(wangModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      wangModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

wangOpenButton.addEventListener("click", openWangModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeWangModal();
  }
});


// "나니아" 모달 관련 변수
const naniaModal = document.getElementById("나니아연대기");
const naniaOpenButton = document.getElementById("나니아연대기openModal");


// 나니아 모달관련
function openNaniaModal() {
  overlay.style.display = "block";
  naniaModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    naniaModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeNaniaModal() {
  gsap.to(naniaModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      naniaModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

naniaOpenButton.addEventListener("click", openNaniaModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeNaniaModal();
  }
});

// "자살클럽" 모달 관련 변수
const jasalModal = document.getElementById("자살클럽");
const jasalOpenButton = document.getElementById("자살클럽openModal");


// 자살 모달관련
function openJasalModal() {
  overlay.style.display = "block";
  jasalModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    jasalModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeJasalModal() {
  gsap.to(jasalModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      jasalModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

jasalOpenButton.addEventListener("click", openJasalModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeJasalModal();
  }
});

// "총균쇠" 모달 관련 변수
const gunModal = document.getElementById("총균쇠");
const gunOpenButton = document.getElementById("총균쇠openModal");


// 총균쇠 모달관련
function openGunModal() {
  overlay.style.display = "block";
  gunModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    gunModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeGunModal() {
  gsap.to(gunModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      gunModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

gunOpenButton.addEventListener("click", openGunModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeGunModal();
  }
});

// "레미제라블" 모달 관련 변수
const lesModal = document.getElementById("레미제라블");
const lesOpenButton = document.getElementById("레미제라블openModal");


// 레미제라블 모달관련
function openLesModal() {
  overlay.style.display = "block";
  lesModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    lesModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeLesModal() {
  gsap.to(lesModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      lesModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

lesOpenButton.addEventListener("click", openLesModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeLesModal();
  }
});

// "변신" 모달 관련 변수
const changeModal = document.getElementById("변신");
const changeOpenButton = document.getElementById("변신openModal");


// 변신 모달관련
function openChangeModal() {
  overlay.style.display = "block";
  changeModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    changeModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeChangeModal() {
  gsap.to(changeModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      changeModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

changeOpenButton.addEventListener("click", openChangeModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeChangeModal();
  }
});

// "1984" 모달 관련 변수
const illModal = document.getElementById("일구팔사");
const illOpenButton = document.getElementById("일구팔사openModal");


// 1984 모달관련
function openIllModal() {
  overlay.style.display = "block";
  illModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    illModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeIllModal() {
  gsap.to(illModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      illModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

illOpenButton.addEventListener("click", openIllModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeIllModal();
  }
});

// "멋진신세계" 모달 관련 변수
const newModal = document.getElementById("멋진신세계");
const newOpenButton = document.getElementById("멋진신세계openModal");

// 멋진신세계 모달관련
function openNewModal() {
  overlay.style.display = "block";
  newModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    newModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeNewModal() {
  gsap.to(newModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      newModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

newOpenButton.addEventListener("click", openNewModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeNewModal();
  }
});

// "비밀의화원" 모달 관련 변수
const flowerModal = document.getElementById("비밀의화원");
const flowerOpenButton = document.getElementById("비밀의화원openModal");

// 비밀의화원 모달관련
function openFlowerModal() {
  overlay.style.display = "block";
  flowerModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    flowerModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeFlowerModal() {
  gsap.to(flowerModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      flowerModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

flowerOpenButton.addEventListener("click", openFlowerModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeFlowerModal();
  }
});

// "죽은자의집청소" 모달 관련 변수
const cleanModal = document.getElementById("죽은자의집청소");
const cleanOpenButton = document.getElementById("죽은자의집청소openModal");

// 죽은자의집청소 모달관련
function openCleanModal() {
  overlay.style.display = "block";
  cleanModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    cleanModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeCleanModal() {
  gsap.to(cleanModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      cleanModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

cleanOpenButton.addEventListener("click", openCleanModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeCleanModal();
  }
});

// "이처럼사소한것들" 모달 관련 변수
const sasoModal = document.getElementById("이처럼사소한것들");
const sasoOpenButton = document.getElementById("이처럼사소한것들openModal");

// 이처럼사소한것들 모달관련
function openSasoModal() {
  overlay.style.display = "block";
  sasoModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    sasoModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeSasoModal() {
  gsap.to(sasoModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      sasoModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

sasoOpenButton.addEventListener("click", openSasoModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeSasoModal();
  }
});

// "내가사랑했던모든남자들에게" 모달 관련 변수
const boysModal = document.getElementById("내가사랑했던모든남자들에게");
const boysOpenButton = document.getElementById("내가사랑했던모든남자들에게openModal");

// 내가사랑했던모든남자들에게 모달관련
function openBoysModal() {
  overlay.style.display = "block";
  boysModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    boysModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeBoysModal() {
  gsap.to(boysModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      boysModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

boysOpenButton.addEventListener("click", openBoysModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeBoysModal();
  }
});

// "죄와벌" 모달 관련 변수
const crimeModal = document.getElementById("죄와벌");
const crimeOpenButton = document.getElementById("죄와벌openModal");

// 죄와벌 모달관련
function openCrimeModal() {
  overlay.style.display = "block";
  crimeModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    crimeModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeCrimeModal() {
  gsap.to(crimeModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      crimeModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

crimeOpenButton.addEventListener("click", openCrimeModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeCrimeModal();
  }
});

// "데미안" 모달 관련 변수
const demianModal = document.getElementById("데미안");
const demianOpenButton = document.getElementById("데미안openModal");

// 데미안 모달관련
function openDemianModal() {
  overlay.style.display = "block";
  demianModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    demianModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeDemianModal() {
  gsap.to(demianModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      demianModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}


demianOpenButton.addEventListener("click", openDemianModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeDemianModal();
  }
});

// "위대한개츠비" 모달 관련 변수
const gatsbyModal = document.getElementById("위대한개츠비");
const gatsbyOpenButton = document.getElementById("위대한개츠비openModal");

// 위대한개츠비 모달관련
function openGatsbyModal() {
  overlay.style.display = "block";
  gatsbyModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    gatsbyModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeGatsbyModal() {
  gsap.to(gatsbyModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      gatsbyModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

gatsbyOpenButton.addEventListener("click", openGatsbyModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeGatsbyModal();
  }
});

// "앵무새죽이기" 모달 관련 변수
const mockModal = document.getElementById("앵무새죽이기");
const mockOpenButton = document.getElementById("앵무새죽이기openModal");

// 앵무새죽이기 모달관련
function openMockModal() {
  overlay.style.display = "block";
  mockModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    mockModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeMockModal() {
  gsap.to(mockModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      mockModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

mockOpenButton.addEventListener("click", openMockModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeMockModal();
  }
});

// "나는전설이다" 모달 관련 변수
const legendModal = document.getElementById("나는전설이다");
const legendOpenButton = document.getElementById("나는전설이다openModal");

// 나는전설이다 모달관련
function openLegendModal() {
  overlay.style.display = "block";
  legendModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    legendModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeLegendModal() {
  gsap.to(legendModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      legendModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

legendOpenButton.addEventListener("click", openLegendModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeLegendModal();
  }
});

// "체르노빌" 모달 관련 변수
const chernobylModal = document.getElementById("체르노빌의목소리");
const chernobylOpenButton = document.getElementById("체르노빌의목소리openModal");

// 체르노빌 모달관련
function openChernobylModal() {
  overlay.style.display = "block";
  chernobylModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    chernobylModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeChernobylModal() {
  gsap.to(chernobylModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      chernobylModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

chernobylOpenButton.addEventListener("click", openChernobylModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeChernobylModal();
  }
});

// "채식" 모달 관련 변수
const chaeModal = document.getElementById("채식주의자");
const chaeOpenButton = document.getElementById("채식주의자openModal");

// 눈먼자들의도시 모달관련
function openChaeModal() {
  overlay.style.display = "block";
  chaeModal.style.display = "block";
  lockScroll(); // 스크롤 잠금

  gsap.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  gsap.fromTo(
    chaeModal,
    { opacity: 0, y: "100%" },
    {
      duration: 0.5,
      opacity: 1,
      y: "10%",
      ease: "power2.out"
    }
  );
}

function closeChaeModal() {
  gsap.to(chaeModal, {
    duration: 0.5,
    opacity: 0,
    y: "100%",
    ease: "power2.in",
    onComplete: () => {
      chaeModal.style.display = "none";
    }
  });

  gsap.to(overlay, {
    duration: 0.5,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      overlay.style.display = "none";
      unlockScroll(); // 스크롤 해제
    }
  });
}

chaeOpenButton.addEventListener("click", openChaeModal);

overlay.addEventListener("click", () => {
  if (isFloatModalOpen) {
    closeFloatModal();
  } else {
    closeChaeModal();
  }
});
// 넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지 //
// 넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지 //
// 넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지 //
// 넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지 //



// 위대한개츠비!!!!하트와 책갈피 관련 변수
const gatsbyheart = document.getElementById("개츠비-빈하트");
const gatsbybookmark = document.getElementById("개츠비-빈책갈피");
const gatsbypurchaseButton = document.getElementById("위대한개츠비-구매");
// 초기 상태 설정
let isgatsbyHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let isgatsbyBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
gatsbyheart.addEventListener("click", function () {
  isgatsbyHeartFilled = !isgatsbyHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (isgatsbyHeartFilled) {
    gatsbyheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    gatsbypurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    gatsbyheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    gatsbypurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
gatsbybookmark.addEventListener("click", function () {
  isgatsbyBookmarkFilled = !isgatsbyBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (isgatsbyBookmarkFilled) {
    gatsbybookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    gatsbybookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 비밀의화원!!!!하트와 책갈피 관련 변수
const flowerheart = document.getElementById("화원-빈하트");
const flowerbookmark = document.getElementById("화원-빈책갈피");
const flowerpurchaseButton = document.getElementById("비밀의화원-구매");
// 초기 상태 설정
let isflowerHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let isflowerBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
flowerheart.addEventListener("click", function () {
  isflowerHeartFilled = !isflowerHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (isflowerHeartFilled) {
    flowerheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    flowerpurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    flowerheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    flowerpurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
flowerbookmark.addEventListener("click", function () {
  isflowerBookmarkFilled = !isflowerBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (isflowerBookmarkFilled) {
    flowerbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    flowerbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});


// 도시!!!!하트와 책갈피 관련 변수
const cityheart = document.getElementById("도시-빈하트");
const citybookmark = document.getElementById("도시-빈책갈피");
const citypurchaseButton = document.getElementById("눈먼자들의도시-구매");
// 초기 상태 설정
let iscityHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let iscityBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
cityheart.addEventListener("click", function () {
  iscityHeartFilled = !iscityHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (iscityHeartFilled) {
    cityheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    citypurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    cityheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    citypurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
citybookmark.addEventListener("click", function () {
  iscityBookmarkFilled = !iscityBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (iscityBookmarkFilled) {
    citybookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    citybookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 핑거!!!!하트와 책갈피 관련 변수
const fingerheart = document.getElementById("핑거-빈하트");
const fingerbookmark = document.getElementById("핑거-빈책갈피");
const fingerpurchaseButton = document.getElementById("핑거스미스-구매");
// 초기 상태 설정
let isfingerHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let isfingerBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
fingerheart.addEventListener("click", function () {
  isfingerHeartFilled = !isfingerHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (isfingerHeartFilled) {
    fingerheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    fingerpurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    fingerheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    fingerpurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
fingerbookmark.addEventListener("click", function () {
  isfingerBookmarkFilled = !isfingerBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (isfingerBookmarkFilled) {
    fingerbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    fingerbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 핑거!!!!하트와 책갈피 관련 변수
const omanheart = document.getElementById("오만-빈하트");
const omanbookmark = document.getElementById("오만-빈책갈피");
const omanpurchaseButton = document.getElementById("오만과편견-구매");
// 초기 상태 설정
let isomanHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let isomanBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
omanheart.addEventListener("click", function () {
  isomanHeartFilled = !isomanHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (isomanHeartFilled) {
    omanheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    omanpurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    omanheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    omanpurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
omanbookmark.addEventListener("click", function () {
  isomanBookmarkFilled = !isomanBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (isomanBookmarkFilled) {
    omanbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    omanbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 어린왕자!!!!하트와 책갈피 관련 변수
const wangheart = document.getElementById("왕자-빈하트");
const wangbookmark = document.getElementById("왕자-빈책갈피");
const wangpurchaseButton = document.getElementById("어린왕자-구매");
// 초기 상태 설정
let iswangHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let iswangBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
wangheart.addEventListener("click", function () {
  iswangHeartFilled = !iswangHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (iswangHeartFilled) {
    wangheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    wangpurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    wangheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    wangpurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
wangbookmark.addEventListener("click", function () {
  iswangBookmarkFilled = !iswangBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (iswangBookmarkFilled) {
    wangbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    wangbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 나니아!!!!하트와 책갈피 관련 변수
const naniaheart = document.getElementById("나니아-빈하트");
const naniabookmark = document.getElementById("나니아-빈책갈피");
const naniapurchaseButton = document.getElementById("나니아연대기-구매");
// 초기 상태 설정
let isnaniaHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let isnaniaBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
naniaheart.addEventListener("click", function () {
  isnaniaHeartFilled = !isnaniaHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (isnaniaHeartFilled) {
    naniaheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    naniapurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    naniaheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    naniapurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
naniabookmark.addEventListener("click", function () {
  isnaniaBookmarkFilled = !isnaniaBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (isnaniaBookmarkFilled) {
    naniabookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    naniabookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 자살!!!!하트와 책갈피 관련 변수
const jasalheart = document.getElementById("자살-빈하트");
const jasalbookmark = document.getElementById("자살-빈책갈피");
const jasalpurchaseButton = document.getElementById("자살클럽-구매");
// 초기 상태 설정
let isjasalHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let isjasalBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
jasalheart.addEventListener("click", function () {
  isjasalHeartFilled = !isjasalHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (isjasalHeartFilled) {
    jasalheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    jasalpurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    jasalheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    jasalpurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
jasalbookmark.addEventListener("click", function () {
  isjasalBookmarkFilled = !isjasalBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (isjasalBookmarkFilled) {
    jasalbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    jasalbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 총균쇠!!!!하트와 책갈피 관련 변수
const gunheart = document.getElementById("총-빈하트");
const gunbookmark = document.getElementById("총-빈책갈피");
const gunpurchaseButton = document.getElementById("총균쇠-구매");
// 초기 상태 설정
let isgunHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let isgunBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
gunheart.addEventListener("click", function () {
  isgunHeartFilled = !isgunHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (isgunHeartFilled) {
    gunheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    gunpurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    gunheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    gunpurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
gunbookmark.addEventListener("click", function () {
  isgunBookmarkFilled = !isgunBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (isgunBookmarkFilled) {
    gunbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    gunbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 레미제라블!!!!하트와 책갈피 관련 변수
const lesheart = document.getElementById("레미-빈하트");
const lesbookmark = document.getElementById("레미-빈책갈피");
const lespurchaseButton = document.getElementById("레미제라블-구매");
// 초기 상태 설정
let islesHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let islesBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
lesheart.addEventListener("click", function () {
  islesHeartFilled = !islesHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (islesHeartFilled) {
    lesheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    lespurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    lesheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    lespurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
lesbookmark.addEventListener("click", function () {
  islesBookmarkFilled = !islesBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (islesBookmarkFilled) {
    lesbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    lesbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 변신!!!!하트와 책갈피 관련 변수
const changeheart = document.getElementById("변-빈하트");
const changebookmark = document.getElementById("변-빈책갈피");
const changepurchaseButton = document.getElementById("변신-구매");
// 초기 상태 설정
let ischangeHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let ischangeBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
changeheart.addEventListener("click", function () {
  ischangeHeartFilled = !ischangeHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (ischangeHeartFilled) {
    changeheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    changepurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    changeheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    changepurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
changebookmark.addEventListener("click", function () {
  ischangeBookmarkFilled = !ischangeBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (ischangeBookmarkFilled) {
    changebookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    changebookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 일구팔사!!!!하트와 책갈피 관련 변수
const illheart = document.getElementById("일구팔사-빈하트");
const illbookmark = document.getElementById("일구팔사-빈책갈피");
const illpurchaseButton = document.getElementById("일구팔사-구매");
// 초기 상태 설정
let isillHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let isillBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
illheart.addEventListener("click", function () {
  isillHeartFilled = !isillHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (isillHeartFilled) {
    illheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    illpurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    illheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    illpurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
illbookmark.addEventListener("click", function () {
  isillBookmarkFilled = !isillBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (isillBookmarkFilled) {
    illbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    illbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 멋진신세계!!!!하트와 책갈피 관련 변수
const newheart = document.getElementById("신세계-빈하트");
const newbookmark = document.getElementById("신세계-빈책갈피");
const newpurchaseButton = document.getElementById("멋진신세계-구매");
// 초기 상태 설정
let isnewHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let isnewBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
newheart.addEventListener("click", function () {
  isnewHeartFilled = !isnewHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (isnewHeartFilled) {
    newheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    newpurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    newheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    newpurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
newbookmark.addEventListener("click", function () {
  isnewBookmarkFilled = !isnewBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (isnewBookmarkFilled) {
    newbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    newbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 죽은자의집청소!!!!하트와 책갈피 관련 변수
const cleanheart = document.getElementById("청소-빈하트");
const cleanbookmark = document.getElementById("청소-빈책갈피");
const cleanpurchaseButton = document.getElementById("죽은자의집청소-구매");
// 초기 상태 설정
let iscleanHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let iscleanBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
cleanheart.addEventListener("click", function () {
  iscleanHeartFilled = !iscleanHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (iscleanHeartFilled) {
    cleanheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    cleanpurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    cleanheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    cleanpurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
cleanbookmark.addEventListener("click", function () {
  iscleanBookmarkFilled = !iscleanBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (iscleanBookmarkFilled) {
    cleanbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    cleanbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 내가사랑했던모든남자들에게!!!!하트와 책갈피 관련 변수
const boysheart = document.getElementById("내가-빈하트");
const boysbookmark = document.getElementById("내가-빈책갈피");
const boyspurchaseButton = document.getElementById("내가사랑했던모든남자들에게-구매");
// 초기 상태 설정
let isboysHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let isboysBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
boysheart.addEventListener("click", function () {
  isboysHeartFilled = !isboysHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (isboysHeartFilled) {
    boysheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    boyspurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    boysheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    boyspurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
boysbookmark.addEventListener("click", function () {
  isboysBookmarkFilled = !isboysBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (isboysBookmarkFilled) {
    boysbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    boysbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 죄와벌!!!!하트와 책갈피 관련 변수
const crimeheart = document.getElementById("죄-빈하트");
const crimebookmark = document.getElementById("죄-빈책갈피");
const crimepurchaseButton = document.getElementById("죄와벌-구매");
// 초기 상태 설정
let iscrimeHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let iscrimeBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
crimeheart.addEventListener("click", function () {
  iscrimeHeartFilled = !iscrimeHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (iscrimeHeartFilled) {
    crimeheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    crimepurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    crimeheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    crimepurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
crimebookmark.addEventListener("click", function () {
  iscrimeBookmarkFilled = !iscrimeBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (iscrimeBookmarkFilled) {
    crimebookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    crimebookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 데미안!!!!하트와 책갈피 관련 변수
const demianheart = document.getElementById("데미안-빈하트");
const demianbookmark = document.getElementById("데미안-빈책갈피");
const demianpurchaseButton = document.getElementById("데미안-구매");
// 초기 상태 설정
let isdemianHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let isdemianBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
demianheart.addEventListener("click", function () {
  isdemianHeartFilled = !isdemianHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (isdemianHeartFilled) {
    demianheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    demianpurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    demianheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    demianpurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
demianbookmark.addEventListener("click", function () {
  isdemianBookmarkFilled = !isdemianBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (isdemianBookmarkFilled) {
    demianbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    demianbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 이처럼사소한것들!!!!하트와 책갈피 관련 변수
const sasoheart = document.getElementById("사소-빈하트");
const sasobookmark = document.getElementById("사소-빈책갈피");
const sasopurchaseButton = document.getElementById("이처럼사소한것들-구매");
// 초기 상태 설정
let issasoHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let issasoBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
sasoheart.addEventListener("click", function () {
  issasoHeartFilled = !issasoHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (issasoHeartFilled) {
    sasoheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    sasopurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    sasoheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    sasopurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
sasobookmark.addEventListener("click", function () {
  issasoBookmarkFilled = !issasoBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (issasoBookmarkFilled) {
    sasobookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    sasobookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 앵무새죽이기!!!!하트와 책갈피 관련 변수
const mockheart = document.getElementById("앵무새-빈하트");
const mockbookmark = document.getElementById("앵무새-빈책갈피");
const mockpurchaseButton = document.getElementById("앵무새죽이기-구매");
// 초기 상태 설정
let ismockHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let ismockBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
mockheart.addEventListener("click", function () {
  ismockHeartFilled = !ismockHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (ismockHeartFilled) {
    mockheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    mockpurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    mockheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    mockpurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
mockbookmark.addEventListener("click", function () {
  ismockBookmarkFilled = !ismockBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (ismockBookmarkFilled) {
    mockbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    mockbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 나는전설이다!!!!하트와 책갈피 관련 변수
const legendheart = document.getElementById("전설-빈하트");
const legendbookmark = document.getElementById("전설-빈책갈피");
const legendpurchaseButton = document.getElementById("나는전설이다-구매");
// 초기 상태 설정
let islegendHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let islegendBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
legendheart.addEventListener("click", function () {
  islegendHeartFilled = !islegendHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (islegendHeartFilled) {
    legendheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    legendpurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    legendheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    legendpurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
legendbookmark.addEventListener("click", function () {
  islegendBookmarkFilled = !islegendBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (islegendBookmarkFilled) {
    legendbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    legendbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 체르노빌!!!!하트와 책갈피 관련 변수
const chernobylheart = document.getElementById("체르노빌-빈하트");
const chernobylbookmark = document.getElementById("체르노빌-빈책갈피");
const chernobylpurchaseButton = document.getElementById("체르노빌의목소리-구매");
// 초기 상태 설정
let ischernobylHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let ischernobylBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
chernobylheart.addEventListener("click", function () {
  ischernobylHeartFilled = !ischernobylHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (ischernobylHeartFilled) {
    chernobylheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    chernobylpurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    chernobylheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    chernobylpurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
chernobylbookmark.addEventListener("click", function () {
  ischernobylBookmarkFilled = !ischernobylBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (ischernobylBookmarkFilled) {
    chernobylbookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    chernobylbookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});

// 채식주의자!!!!하트와 책갈피 관련 변수
const chaeheart = document.getElementById("채식-빈하트");
const chaebookmark = document.getElementById("채식-빈책갈피");
const chaepurchaseButton = document.getElementById("채식주의자-구매");
// 초기 상태 설정
let ischaeHeartFilled = false; // 하트 상태 (빈하트/꽉찬하트)
let ischaeBookmarkFilled = false; // 책갈피 상태 (빈책갈피/꽉찬책갈피)

// 하트 클릭 이벤트
chaeheart.addEventListener("click", function () {
  ischaeHeartFilled = !ischaeHeartFilled; // 상태 토글

  // 하트 이미지 변경
  if (ischaeHeartFilled) {
    chaeheart.src = "images/heart_fill.png"; // 꽉찬 하트 이미지
    chaepurchaseButton.style.display = "block"; // 구매 버튼 보이기
  } else {
    chaeheart.src = "images/heart_empty.png"; // 빈 하트 이미지
    chaepurchaseButton.style.display = "none"; // 구매 버튼 숨기기
  }
});

// 책갈피 클릭 이벤트
chaebookmark.addEventListener("click", function () {
  ischaeBookmarkFilled = !ischaeBookmarkFilled; // 상태 토글

  // 책갈피 이미지 변경
  if (ischaeBookmarkFilled) {
    chaebookmark.src = "images/bookmark_fill.png"; // 꽉찬 책갈피 이미지
  } else {
    chaebookmark.src = "images/bookmark_empty.png"; // 빈 책갈피 이미지
  }
});
// 넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지 //
// 넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지 //
// 넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지 //
// 넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지 //
// 넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지  넘어가기 방지 //



//눈먼자들의도시 북마크관련
const cityBookmarkButton = document.getElementById("도시-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const cityBookmarkImage = document.getElementById("눈먼자들의도시bookmark");

// 클릭 이벤트 추가
cityBookmarkButton.addEventListener("click", function () {
  if (cityBookmarkImage.style.display === "block") {
    cityBookmarkImage.style.display = "none"; // 보이기
  } else {
    cityBookmarkImage.style.display = "block"; // 숨기기
  }
});

//핑거스미스 북마크관련
const fingerBookmarkButton = document.getElementById("핑거-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const fingerBookmarkImage = document.getElementById("핑거스미스bookmark");

// 클릭 이벤트 추가
fingerBookmarkButton.addEventListener("click", function () {
  if (fingerBookmarkImage.style.display === "block") {
    fingerBookmarkImage.style.display = "none"; // 보이기
  } else {
    fingerBookmarkImage.style.display = "block"; // 숨기기
  }
});

//오만과편견 북마크관련
const omanBookmarkButton = document.getElementById("오만-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const omanBookmarkImage = document.getElementById("오만과편견bookmark");

// 클릭 이벤트 추가
omanBookmarkButton.addEventListener("click", function () {
  if (omanBookmarkImage.style.display === "block") {
    omanBookmarkImage.style.display = "none"; // 보이기
  } else {
    omanBookmarkImage.style.display = "block"; // 숨기기
  }
});

//어린왕자 북마크관련
const wangBookmarkButton = document.getElementById("왕자-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const wangBookmarkImage = document.getElementById("어린왕자bookmark");

// 클릭 이벤트 추가
wangBookmarkButton.addEventListener("click", function () {
  if (wangBookmarkImage.style.display === "block") {
    wangBookmarkImage.style.display = "none"; // 보이기
  } else {
    wangBookmarkImage.style.display = "block"; // 숨기기
  }
});
//나니아연대기 북마크관련
const naniaBookmarkButton = document.getElementById("나니아-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const naniaBookmarkImage = document.getElementById("나니아연대기bookmark");

// 클릭 이벤트 추가
naniaBookmarkButton.addEventListener("click", function () {
  if (naniaBookmarkImage.style.display === "block") {
    naniaBookmarkImage.style.display = "none"; // 보이기
  } else {
    naniaBookmarkImage.style.display = "block"; // 숨기기
  }
});
//자살클럽 북마크관련
const jasalBookmarkButton = document.getElementById("자살-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const jasalBookmarkImage = document.getElementById("자살클럽bookmark");

// 클릭 이벤트 추가
jasalBookmarkButton.addEventListener("click", function () {
  if (jasalBookmarkImage.style.display === "block") {
    jasalBookmarkImage.style.display = "none"; // 보이기
  } else {
    jasalBookmarkImage.style.display = "block"; // 숨기기
  }
});
//총균쇠 북마크관련
const gunBookmarkButton = document.getElementById("총-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const gunBookmarkImage = document.getElementById("총균쇠bookmark");

// 클릭 이벤트 추가
gunBookmarkButton.addEventListener("click", function () {
  if (gunBookmarkImage.style.display === "block") {
    gunBookmarkImage.style.display = "none"; // 보이기
  } else {
    gunBookmarkImage.style.display = "block"; // 숨기기
  }
});
//레미제라블 북마크관련
const lesBookmarkButton = document.getElementById("레미-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const lesBookmarkImage = document.getElementById("레미제라블bookmark");

// 클릭 이벤트 추가
lesBookmarkButton.addEventListener("click", function () {
  if (lesBookmarkImage.style.display === "block") {
    lesBookmarkImage.style.display = "none"; // 보이기
  } else {
    lesBookmarkImage.style.display = "block"; // 숨기기
  }
});
//변신 북마크관련
const changeBookmarkButton = document.getElementById("변-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const changeBookmarkImage = document.getElementById("변신bookmark");

// 클릭 이벤트 추가
changeBookmarkButton.addEventListener("click", function () {
  if (changeBookmarkImage.style.display === "block") {
    changeBookmarkImage.style.display = "none"; // 보이기
  } else {
    changeBookmarkImage.style.display = "block"; // 숨기기
  }
});
//일구팔사 북마크관련
const illBookmarkButton = document.getElementById("일구팔사-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const illBookmarkImage = document.getElementById("일구팔사bookmark");

// 클릭 이벤트 추가
illBookmarkButton.addEventListener("click", function () {
  if (illBookmarkImage.style.display === "block") {
    illBookmarkImage.style.display = "none"; // 보이기
  } else {
    illBookmarkImage.style.display = "block"; // 숨기기
  }
});
//멋진신세계 북마크관련
const newBookmarkButton = document.getElementById("신세계-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const newBookmarkImage = document.getElementById("멋진신세계bookmark");

// 클릭 이벤트 추가
newBookmarkButton.addEventListener("click", function () {
  if (newBookmarkImage.style.display === "block") {
    newBookmarkImage.style.display = "none"; // 보이기
  } else {
    newBookmarkImage.style.display = "block"; // 숨기기
  }
});
//비밀의화원 북마크관련
const flowerBookmarkButton = document.getElementById("화원-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const flowerBookmarkImage = document.getElementById("비밀의화원bookmark");

// 클릭 이벤트 추가
flowerBookmarkButton.addEventListener("click", function () {
  if (flowerBookmarkImage.style.display === "block") {
    flowerBookmarkImage.style.display = "none"; // 보이기
  } else {
    flowerBookmarkImage.style.display = "block"; // 숨기기
  }
});
//죽은자의집청소 북마크관련
const cleanBookmarkButton = document.getElementById("청소-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const cleanBookmarkImage = document.getElementById("죽은자의집청소bookmark");

// 클릭 이벤트 추가
cleanBookmarkButton.addEventListener("click", function () {
  if (cleanBookmarkImage.style.display === "block") {
    cleanBookmarkImage.style.display = "none"; // 보이기
  } else {
    cleanBookmarkImage.style.display = "block"; // 숨기기
  }
});
//이처럼사소한것들 북마크관련
const sasoBookmarkButton = document.getElementById("사소-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const sasoBookmarkImage = document.getElementById("이처럼사소한것들bookmark");

// 클릭 이벤트 추가
sasoBookmarkButton.addEventListener("click", function () {
  if (sasoBookmarkImage.style.display === "block") {
    sasoBookmarkImage.style.display = "none"; // 보이기
  } else {
    sasoBookmarkImage.style.display = "block"; // 숨기기
  }
});
//내가사랑했던모든남자들에게 북마크관련
const boysBookmarkButton = document.getElementById("내가-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const boysBookmarkImage = document.getElementById("내가사랑했던모든남자들에게bookmark");

// 클릭 이벤트 추가
boysBookmarkButton.addEventListener("click", function () {
  if (boysBookmarkImage.style.display === "block") {
    boysBookmarkImage.style.display = "none"; // 보이기
  } else {
    boysBookmarkImage.style.display = "block"; // 숨기기
  }
});
//죄와벌 북마크관련
const crimeBookmarkButton = document.getElementById("죄-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const crimeBookmarkImage = document.getElementById("죄와벌bookmark");

// 클릭 이벤트 추가
crimeBookmarkButton.addEventListener("click", function () {
  if (crimeBookmarkImage.style.display === "block") {
    crimeBookmarkImage.style.display = "none"; // 보이기
  } else {
    crimeBookmarkImage.style.display = "block"; // 숨기기
  }
});
//데미안 북마크관련
const demianBookmarkButton = document.getElementById("데미안-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const demianBookmarkImage = document.getElementById("데미안bookmark");

// 클릭 이벤트 추가
demianBookmarkButton.addEventListener("click", function () {
  if (demianBookmarkImage.style.display === "block") {
    demianBookmarkImage.style.display = "none"; // 보이기
  } else {
    demianBookmarkImage.style.display = "block"; // 숨기기
  }
});
// 위대한개츠비 북마크관련
const gatsbyBookmarkButton = document.getElementById("개츠비-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const gatsbyBookmarkImage = document.getElementById("위대한개츠비bookmark");

// 클릭 이벤트 추가
gatsbyBookmarkButton.addEventListener("click", function () {
  if (gatsbyBookmarkImage.style.display === "block") {
    gatsbyBookmarkImage.style.display = "none"; // 보이기
  } else {
    gatsbyBookmarkImage.style.display = "block"; // 숨기기
  }
});

// 앵무새죽이기 북마크관련
const mockBookmarkButton = document.getElementById("앵무새-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const mockBookmarkImage = document.getElementById("앵무새죽이기bookmark");

// 클릭 이벤트 추가
mockBookmarkButton.addEventListener("click", function () {
  if (mockBookmarkImage.style.display === "block") {
    mockBookmarkImage.style.display = "none"; // 보이기
  } else {
    mockBookmarkImage.style.display = "block"; // 숨기기
  }
});

// 나는전설이다 북마크관련
const legendBookmarkButton = document.getElementById("전설-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const legendBookmarkImage = document.getElementById("나는전설이다bookmark");

// 클릭 이벤트 추가
legendBookmarkButton.addEventListener("click", function () {
  if (legendBookmarkImage.style.display === "block") {
    legendBookmarkImage.style.display = "none"; // 보이기
  } else {
    legendBookmarkImage.style.display = "block"; // 숨기기
  }
});

// 체르노빌 북마크관련
const chernobylBookmarkButton = document.getElementById("체르노빌-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const chernobylBookmarkImage = document.getElementById("체르노빌의목소리bookmark");

// 클릭 이벤트 추가
chernobylBookmarkButton.addEventListener("click", function () {
  if (chernobylBookmarkImage.style.display === "block") {
    chernobylBookmarkImage.style.display = "none"; // 보이기
  } else {
    chernobylBookmarkImage.style.display = "block"; // 숨기기
  }
});

// 채식주의자 북마크관련
const chaeBookmarkButton = document.getElementById("채식-빈책갈피");

// 숨겨진 북마크 이미지 가져오기
const chaeBookmarkImage = document.getElementById("채식주의자bookmark");

// 클릭 이벤트 추가
chaeBookmarkButton.addEventListener("click", function () {
  if (chaeBookmarkImage.style.display === "block") {
    chaeBookmarkImage.style.display = "none"; // 보이기
  } else {
    chaeBookmarkImage.style.display = "block"; // 숨기기
  }
});