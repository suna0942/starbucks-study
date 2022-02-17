 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
   // 외부에서 가져온 youtube javascript 라이브러리(iframe_api)가 자동으로 함수의 이름을 찾기때문에 이름은 변경x
   // <div id="player"></div>
   new YT.Player('player', {
     videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
     playerVars: {
       autoplay: true, // 자동 재생 유무
       loop: true, // 반복 재생 유무
       playlist: 'An6LvWQuj_8' // 반복 재생이 true인 경우 반복 재생할 유튜브 영상 ID 목록
     },
     events: {
       onReady: function (event) {
         event.target.mute()   // target: 재생되고 있는 영상 자체, mute: 음소거
       }
     }
   });
 }