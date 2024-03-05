/* 헤더 */
let scrollFlag = false;
let lastScroll = 0;

$(window).scroll(function(){
  let curr = $(this).scrollTop();

  if (curr < lastScroll) {
    $('.top-btn').addClass('show');
  } else {
    $('.top-btn').removeClass('show');
  }

  lastScroll = curr;
})

ScrollTrigger.create({
  trigger:".sc-intro .sticky",
  start:"85% 0",
  end:"",
  // markers:true,
  onEnter:function(){
    $('header').addClass('on');
  },
  onLeaveBack:function(){
    $('header').removeClass('on');
  }
})


/* 
  sc-intro
  1. 배경 고정 2. 배경 딤드 3. 텍스트 페이드인아웃
*/
const t1 = gsap.timeline();

t1
.to(".sc-intro .btn-scroll", {autoAlpha: 1})
.to(".sc-intro", {'--opacity': 1},'a')
.to(".intro-text.p1", {autoAlpha: 1},'a')
.to(".intro-text.p1", {autoAlpha: 0})
.to(".intro-text.p2", {autoAlpha: 1})
.to(".intro-text.p2", {autoAlpha: 0})
.to(".intro-text.p3", {autoAlpha: 1})
.to(".intro-text.p3", {autoAlpha: 0})
.to(".intro-text.p4", {autoAlpha: 1})

ScrollTrigger.create({
  animation: t1,
  trigger: ".sc-intro",
  start: "0% 0%",
  end: "100% 100%",
  scrub: 1,
  // markers: true,
})

/* 
  sc-showcase
  1. 배경 고정 2. 배경 딤드 3. 텍스트 페이드인아웃
*/
const t2 = gsap.timeline({
  defaults:{
    ease:"none"
  }
});

t2
.to(".sc-showcase", {'--opacity': 1},'a')
.to('.sc-showcase .group-title', {autoAlpha: 1}, "a")

.to(".sc-showcase", {'--opacity': 0},'b')
.to('.sc-showcase .showcase-text:nth-child(1)', {xPercent: 100},'b')
.to('.sc-showcase .showcase-text:nth-child(3)', {xPercent: -100},'b')
.to('.sc-showcase .group-title', {autoAlpha: 0},)

.to('.showcase-img .img-box:nth-child(3)', {height:0})
.to('.showcase-img .img-box:nth-child(2)', {height:0})

.to(".sc-showcase", {'--opacity': 1},'c')
.to('.sc-showcase .group-desc', {autoAlpha: 1}, "c")

ScrollTrigger.create({
  animation: t2,
  trigger: ".sc-showcase",
  start: "0% 0%",
  end: "100% 100%",
  scrub: 1,
})


/* 
  sc-possiblity
  양쪽 분리
*/
gsap.to('.sc-possiblity .horizontal', {
  x:function(){
    return -($('.sc-possiblity .list').outerWidth());
  },
  ease: "none",
  scrollTrigger: {
    trigger: '.sc-possiblity',
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    invalidateOnRefresh: true, //변수값을 새로고침
  }
});

/* 
  group-feature
  양옆에서 막대 등장 - 그라데이션
  텍스트 페이드인
*/
const t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".group-feature",
    scrub: 0,
    start: "0% 95%",
    end: "100% 80%",
    // markers: true,
  }
});
t4.from(".feature:nth-child(1)", {xPercent: -50}, 'a')
t4.from(".feature:nth-child(2)", {xPercent: -50}, 'a')
t4.from(".feature:nth-child(3)", {xPercent: 50}, 'a')

const t4_1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".group-feature",
    scrub: 0,
    start: "0% 40%",
    end: "100% 40%",
    // markers: true,
    onEnter:function(){
      $('.group-feature').addClass('on')
    },
    onLeaveBack:function(){
      $('.group-feature').removeClass('on')
    }
  }
});
t4_1.to(".feature-title", {autoAlpha: 1})


/* sc-service */
newTl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-service .content1",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
    invalidateOnRefresh: true, //변수값을 새로고침
  }
})
newTl1
.to('.sc-service .content1 .sticky-cont',{
  x:function(){
    return -$('.content1 .group-title').outerWidth();
  }
})
.to('.sc-service .content1 .card-item:nth-child(2)',{xPercent:-100, x: -40}, 'a')
.to('.sc-service .content1 .card-item:nth-child(3)',{xPercent:-200, x: -40*2}, 'a')
.to('.sc-service .content1 .card-item:nth-child(4)',{xPercent:-300, x: -40*3}, 'a')
.to('.sc-service .content1 .card-item:nth-child(4) .card-unlock',{autoAlpha:0}, 'a')
.to('.sc-service .content1 .card-item:nth-child(4) .card-lock',{autoAlpha:1})
.to('.sc-service .content1 .card-item:nth-child(4) .card-lock',{autoAlpha:0})


newTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-service .content2",
    start: "0% 0%",
    end: "100% 100%",
    scrub:0,
    // markers: true,
    invalidateOnRefresh: true, //변수값을 새로고침
    onEnter:function(){
      $('.sc-service .content1').addClass('hide');
      $('.sc-service .content2').removeClass('hide');
    },
    onLeaveBack:function(){
      $('.sc-service .content1').removeClass('hide');
      $('.sc-service .content2').addClass('hide');
    }
  }
})
newTl2
.to('.sc-service .content2 .card-box .card-text',{autoAlpha:1})


newTl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-service .content3",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 1,
    // markers: true,
    invalidateOnRefresh: true,
    onEnter:function(){
      console.log('content3');
      $('.sc-service .content3 .card-item:first-child .card-box').removeClass('hide');
      $('.sc-service .content2').addClass('hide');
      // $('.sc-service .content3 .card-item.first .card-box').css('opacity','1');
      // $('.sc-service .content2 .card-box').css('opacity','0');
    },
    onLeaveBack:function(){
      // $('.sc-service .content3 .card-item.first .card-box').css('opacity','0');
      // $('.sc-service .content2 .card-box').css('opacity','1');
      $('.sc-service .content3 .card-item:first-child .card-box').addClass('hide');
      $('.sc-service .content2').removeClass('hide');
    }
  }
})
newTl3
// .to('.sc-service .content3 .card-item.first .card-box', {'autoAlpha': 1}, 'c')
// .to('.sc-service .content2 .card-box', {autoAlpha: 0},'c')
.to('.sc-service .content3 .card-item:nth-child(2)', {xPercent: -100, x: -40, delay: 2}, 'c')
.to('.sc-service .content3 .card-item:nth-child(3)', {xPercent: -200, x: -40*2, delay: 2}, 'c')
.to('.sc-service .content3 .card-item:nth-child(4)', {xPercent: -300, x: -40*3, delay: 2}, 'c')

.to(".sc-service .content3 .sticky-title", {xPercent: -300, delay: 2, })
.to(".sc-service .content3 .sticky-title", {autoAlpha: 1, duration: 3}, 'd')
.to(".sc-service .content3 .card-item.first .blur", {autoAlpha: 1}, 'd')



/* 
  sc-prove
*/
$('.sc-prove').each(function(i,el){
  let leftVal = $(this).find('.prove-title:nth-child(1) > span').data('x');
  let rightVal = $(this).find('.prove-title:nth-child(3) > span').data('x');
  const t3 = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      scrub: true,
      start: "0% 80%",
      end: "100% 80%",
      // markers:true,
    }
  });
    t3
    .to($(this).find('.prove-title:nth-child(1) > span'), {xPercent: leftVal}, 'a')
    .to($(this).find('.prove-title:nth-child(3) > span'), {xPercent: rightVal}, 'a')
    .to($(this).find('.white-box.left'), {xPercent:100}, 'a')
    .to($(this).find('.white-box.right'), {xPercent:-100}, 'a')
})


/*  
  sc-asset
 */
tl123 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-asset',
    start: "0% 0%",
    end: "100% 100%",
    // markers:true,
    scrub: true,
    toggleClass: {targets:".sc-asset .scroll-right",className:"on"},
    onUpdate:function(self){
      if(self.progress >= 0.5){
        $('.sc-asset .scroll-right .text > span').text('미래금융')
      }else{
        $('.sc-asset .scroll-right .text > span').text('전통금융')
      }
    }
  }
})

tl123.to('.sc-asset .asset-wrap',{
  xPercent:-100,
  x: window.innerWidth-100,
  ease:"none"
})


/* sc-creator */
const t6 = gsap.timeline();
t6
.to(".sc-creator .btn-scroll", {autoAlpha: 1})
.to(".sc-creator .group-text", {autoAlpha: 1})
.to(".sc-creator .group-text", {autoAlpha: 0, })

ScrollTrigger.create({
  animation: t6,
  trigger: ".sc-creator",
  start: "0% 0%",
  end: "100% 100%",
  scrub: true,
});


/* marquee */
ScrollTrigger.create({
  trigger: ".footer",
  start: "0% 100%",
  end: "100% 100%",
  scrub: true,
  markers: false,
  onEnter:function(){
    $('.marquee').addClass('on');
  },
  onLeaveBack:function(){
    $('.marquee').removeClass('on');
  }
});


// 다크모드
ScrollTrigger.create({
  trigger:"[data-theme='dark']",
  start:"0% 60%",
  end:"100% 60%",
  // markers:true,
  toggleClass:{targets:"body",className:"dark"}
})


