// ScrollMagic 사용
const spyEls = document.querySelectorAll('section.scroll-spy')
console.log(spyEls);

const controller = new ScrollMagic.Controller();
spyEls.forEach(function (spyEl) {
  // 메소드 체이닝
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // 컨트롤러에 장면을 할당(필수!!) - 라이브러리에서 지정한 문법 깊게 이해할 필요x
  });

// Swiper 사용
const swiper = new Swiper('.project .swiper', {
  // 슬라이드 옵션 지정
  // direction: 'vertical', // 수직 슬라이드
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 다시 1
  // autoplay: true, // 자동 재생 여부
  autoplay: {
    delay: 5000 // 5초마다 슬라이드 바뀜(기본값: 3000)
  },

  // 페이지네이션 옵션
  pagination: {
    el: '.project .swiper-pagination',
    clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
  },

  // 이전/다음 슬라이드 버튼 옵션
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  },
});

// 모달창 띄우기
const modalBtn = document.querySelector('.project .btn-modal');
const modalEl = document.querySelector('#modal');
const closeBtn = document.querySelector('#modal .btn-close');

const imageModalBtnList = document.querySelectorAll('.project .btn-modal-image')
const imageModalEl = document.querySelector('#imageModal');
const imageCloseBtn = document.querySelector('#imageModal .btn-close');
const imageEl = document.querySelector('#imageModal img');
// console.log(modalBtn);
// console.log(modalEl);
// console.log(closeBtn);

// Quiz: modalBtn 누루면 모달창이 뜨고 closeBtn 누르면 닫히도록 ㅁ나들기
// style 속성: js로 css 스타일을 제어할 수 있는 속성
// 예시 : 요소.style.css속성 ="";

modalBtn.addEventListener('click', function () {
  modalEl.style.display = "flex";
});
closeBtn.addEventListener('click', function () {
  modalEl.style.display = "none";
});

imageModalBtnList.forEach(function (imageModalBtn,index) {
  imageModalBtn.addEventListener('click', function () {
    // imageEl.src = imageModalBtn.dataset.imageSrc;
    imageModalEl.style.display = "flex";

    // 혼자 사부작사부작...............웹페이지에서 img 상대경로 직접 가져오기
    const parentPortEl = imageModalBtn.parentElement.parentElement.parentElement;
    console.log(parentPortEl);
    const activeImgAbSrc = parentPortEl.querySelector('.swiper-slide-active img').src;
    const activeImgRelSrc = activeImgAbSrc.substr(activeImgAbSrc.indexOf('images'));
    console.log(activeImgRelSrc);

    imageEl.src = activeImgRelSrc;
    //
  });
});
imageCloseBtn.addEventListener('click', function () {
  imageModalEl.style.display = "none";
});

// 현재 연도 표시
//날짜 정보를 가진 js의 Date 객체를 활용
console.log(new Date().getFullYear());

const yearSpan = document.querySelector('.this-year');
yearSpan.textContent = new Date().getFullYear();

// 페이지 최상단으로 이동
const toTopEl = document.querySelector('#to-top');

const visualSpans = document.querySelectorAll('.visual__word span');

// 페이지에 스크롤 이벤트 감지를 추가!
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  // console.log(window.scrollY); // y축 스크롤 위치
  
  // 페이지 스크롤 위치가
  // 500px을 넘으면 요소를 보이고,
  // 500px을 넘지 않으면 요소 숨기기
  if (window.scrollY >= 500) {
    toTopEl.style.opacity = 1;
    toTopEl.style.transform = 'translateX(0)';   

    // visual 섹션 애니메이션 숨기기
    visualSpans.forEach((visualSpan) => {
      visualSpan.classList.remove('animate-flash');
    })
  } else {
    toTopEl.style.opacity = 0;
    toTopEl.style.transform = 'translateX(100px)'; 

    // visual 섹션 애니메이션 나타나게 하기
    visualSpans.forEach((visualSpan) => {
      visualSpan.classList.add('animate-flash');
    })
  }
});

//
const btnHamburger = document.querySelector('.btn-hamburger');
const nav = document.querySelector('header nav');
const menuItems = document.querySelectorAll('header nav a');
// console.log(btnHamburger);
// console.log(nav);
// console.log(menuItems);

btnHamburger.addEventListener('click', function () {
  // if (nav.style.height == '0') {
  //   nav.style.height = '100%';
  // } else {
  //     nav.style.height = '0';
  // }
  // 클릭을 했을 때, 내브의 높이가 0이면 내브의 높이를 100으로 만들어라.
  // 클릭을 했을 때, 내브의 높이가 0이 아니면 내브의 높이를 0으로 만들어라.

  // if (nav.classList.contains('active')) {
  //   nav.classList.remove('active')
  // } else {
  //   nav.classList.add('active')
  // }

  // 위의 코드는 복잡... 토글 기능 활용
  nav.classList.toggle('active');
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', function () {
    nav.classList.remove('active');
  });
});

// 스크롤바의 너비 계산
function getBodyScrollbarWidth() {
  return window.innerWidth - document.documentElement.offsetWidth;
}
console.log(getBodyScrollbarWidth());

