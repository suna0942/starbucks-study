const searchEl = document.querySelector('.search');
const searchInptuEl = searchEl.querySelector('input');
/* document.querySelector('.search input'); 으로 해도 되지만
search라는 요소를 또 찾기때문에 효율적이지 않음. 효율적으로 찾기 위해서
앞에서 찾은 searchEl안에서 input요소를 찾게끔 변경하는게 좋음 */

searchEl.addEventListener('click', function () {
  searchInptuEl.focus();
});

searchInptuEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInptuEl.setAttribute('placeholder', '통합검색');
  //searchInputEl 부분에 어떠한 html의 속성을 지정할 때 씀
  /*input요소가 focus 됐을 때 focused라는 클래스를 생성하고,
  placeholder라는 html의 속성을 추가해서 '통합검색'이라는 글자가 보이게 함*/

});

searchInptuEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInptuEl.setAttribute('placeholder', '');
  /*focus의 반대인 blur가 됐을 때 focused라는 클래스를 지우고,
  placsholder에는 아무런 글자가 안보이게 함*/
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

//document가 html을 의미하는 거라면 window는 프로젝트가 나타나는 브라우저 창
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간(m/s단위))
// window.scrollY 위에서부터 몇 px 지점에 위치하고 있는 지 알 수 있음
// gsap.to(요소, 지속시간(초 단위), 옵션);

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0 // 0.7초동안 화면의 0px 지점으로 옮긴다
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});

// new는 js의 생성자(클래스)이며 html의 클래스가 아닌 js의 클래스임
// Swiper(선택자, 옵션);
// 강의 촬영때와 현재와 버전차이가 있기때문에 html, css, js 둘 다 swiper-container가 아닌 그냥 swiper로 수정해야함
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
  // autoplay: 자동으로 플레이 재생, loop: 반복 재생
});

new Swiper('.promotion .swiper', {
  // direction의 기본값은 'horizontal' 이기 때문에 따로 명시 안해줘도 됨
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수, 기본값은 1
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데부터 보이기
  loop: true,
  autoplay: {
    delay: 5000 // 5초
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  /* !는 ! 뒤에 있는 값이 반대가 되게 만드는 것,
    즉 isHidePromotion이 false이니까 그 반대는 true
    특정 변수의 값을 지속적으로 반대값으로 전환시켜주는 코드 */
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // 함수가 실행되는 부분에 숫자만 입력하면 무엇인지 모르기 때문에 매개변수 이름을 명확하게 지정!
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1, // -1은 무한반복, 자바스크립트 라이브러리에서 지원하는 기능
      yoyo: true, // 한 번 재생된 애니메이션을 뒤로 다시 재생을 하는 것
      ease: Power1.easeInOut,
      delay: random(0, delay) // 내부에서 random하게 delay를 실행할 수 있게 정의
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 뷰포트 기준으로 감시할 요소의 감시 지점
      /* 뷰포트 가장 위 부분이 0, 가장 아래 부분이 1이며, .8은 중간을 넘은 지점
      따라서 뷰포트 0.8 지점에 걸리면 어떠한 내용이 trigger(실행)가 된다 */
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
  // Scene은 ScrollMagic를 통해서 특정한 요소를 감시하는 옵션을 지정해주는 메소드
  // addTo는 ScrollMagic가 필요한 컨트롤러라는 개념을 추가하기 위함
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  // Date: 현재 날짜를 알려줌