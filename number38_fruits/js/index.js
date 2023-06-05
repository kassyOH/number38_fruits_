
// 메인슬라이더
  window.onload = function(){
    var mySwiper = new Swiper('.swiper-container', {
    speed:3000,
    loop: true,      
    autoplay: {
      delay:2000,
      disableOnInteraction: false,
    },
    // breakpoints: {
    //   // 화면의 넓이가 320px 이상일 때
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   // 화면의 넓이가 640px 이상일 때
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40
    //   }
    // }
  });
}


// txt typing 이벤트
function txtTyping(){
  let pTyping = $('.skill .skill_top .p');
  let txtTyping = pTyping.text().trim();
  pTyping.text('');
  let subTyping = '';
  let indexNum = 0;
  let rotateStrong = setInterval(function(){
    if(indexNum < txtTyping.length){
      subTyping = subTyping + txtTyping[indexNum];
      pTyping.text(subTyping);
      indexNum++;
    }else{
      subTyping ='';
      indexNum = 0;
    }
  },100);
}