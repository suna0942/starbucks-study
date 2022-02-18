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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  // Date: 현재 날짜를 알려줌