let visibleBurger = document.querySelector('.visible__burger');
let invisibleBurger = document.querySelector('.banner__burger');
//функции позволяют открывать и скрывать скрытое меню и менять иконку бургера через data-trigger 
showHiddenMenu = () => {
        document.querySelector('.header__invisible').style.display = 'block';
        document.body.style.overflow = 'hidden';
}
closeHiddenMenu = () => {
    document.querySelector('.header__invisible').style.display = 'none';
    document.body.style.overflow = 'visible';
}
visibleBurger.addEventListener('click', showHiddenMenu)
invisibleBurger.addEventListener('click', closeHiddenMenu)



//функция позволяет открывать скрытые submenu конкретного пункта через data-trigger и this
function openCloseSubmenu (event){
  let submenu =  event.target.parentNode.parentNode.childNodes[3];
    if(this.querySelector('div:last-child').dataset.trigger == 'true'){
      this.querySelector('div:last-child').style.transform = 'rotate(0deg)';
      submenu.style.display = 'block';
      this.querySelector('div:last-child').dataset.trigger = 'false';
    }
    else if(this.querySelector('div:last-child').dataset.trigger == 'false'){
        this.querySelector('div:last-child').style.transform = 'rotate(180deg)';
        submenu.style.display = 'none';
        this.querySelector('div:last-child').dataset.trigger = 'true'; 
    }
}

document.querySelector('.buy__box').addEventListener('click', openCloseSubmenu);
document.querySelector('.blog__box').addEventListener('click', openCloseSubmenu);
document.querySelector('.about__box').addEventListener('click', openCloseSubmenu);
document.querySelector('.contact__box').addEventListener('click', openCloseSubmenu);

//функция для смены языка (пока только меняет цвет выбранного языкового обозначения)
langRu = () => {
    if(document.querySelector('.lang__en').classList.contains('_active')){
        document.querySelector('.lang__en').classList.remove('_active')
        document.querySelector('.lang__ru').classList.toggle('_active')
    }
}
langEn = () => {
    if(document.querySelector('.lang__ru').classList.contains('_active')){
        document.querySelector('.lang__ru').classList.remove('_active')
        document.querySelector('.lang__en').classList.toggle('_active')
        
    }
}
document.querySelector('.lang__ru').addEventListener('click', langRu);
document.querySelector('.lang__en').addEventListener('click', langEn);

prevSlide = () => {
    if(document.querySelector('.slider__next').classList.contains('_chosen')){
        document.querySelector('.slider__next').classList.remove('_chosen')
        document.querySelector('.slider__prev').classList.toggle('_chosen') 
    }
    if(document.querySelector('.three__title').classList.contains('_active')){
        document.querySelector('.three__title').classList.remove('_active')
        document.querySelector('.two__title').classList.toggle('_active') 
        document.querySelector('.welcome__picture').style.background = 'url(/Dubai/web/img/MOBILE/main320px2.png)'
        
    }
    else if(document.querySelector('.two__title').classList.contains('_active')){
        document.querySelector('.two__title').classList.remove('_active');
        document.querySelector('.one__title').classList.toggle('_active');
        document.querySelector('.welcome__picture').style.background = 'url(/Dubai/web/img/MOBILE/main320px1.png)';
    }
}
nextSlide = () => {
    if(document.querySelector('.slider__prev').classList.contains('_chosen')){
        document.querySelector('.slider__prev').classList.remove('_chosen')
        document.querySelector('.slider__next').classList.toggle('_chosen')    
    }
    if(document.querySelector('.one__title').classList.contains('_active')){
        document.querySelector('.one__title').classList.remove('_active')
        document.querySelector('.two__title').classList.toggle('_active')
        document.querySelector('.welcome__picture').style.background = 'url(/Dubai/web/img/MOBILE/main320px2.png)' 
        
    }
    else if(document.querySelector('.two__title').classList.contains('_active')){
        document.querySelector('.two__title').classList.remove('_active')
        document.querySelector('.three__title').classList.toggle('_active') 
        document.querySelector('.welcome__picture').style.background = 'url(/Dubai/web/img/MOBILE/main320px3.png)' 
    }
    
}
document.querySelector('.slider__prev').addEventListener('click', prevSlide);
document.querySelector('.slider__next').addEventListener('click', nextSlide);

document.querySelector('.one__title').addEventListener('click', () => {
    document.querySelector('.welcome__picture').style.background = 'url(/Dubai/web/img/MOBILE/main320px1.png)';
    document.querySelector('.two__title').classList.remove('_active');
    document.querySelector('.three__title').classList.remove('_active');
    document.querySelector('.one__title').classList.add('_active');
    document.querySelector('.slider__prev').classList.add('_chosen');
    document.querySelector('.slider__next').classList.remove('_chosen');

})
document.querySelector('.two__title').addEventListener('click', () => {
    document.querySelector('.welcome__picture').style.background = 'url(/Dubai/web/img/MOBILE/main320px2.png)';
    document.querySelector('.one__title').classList.remove('_active')
    document.querySelector('.three__title').classList.remove('_active');
    document.querySelector('.two__title').classList.add('_active');
})
document.querySelector('.three__title').addEventListener('click', () => {
    document.querySelector('.welcome__picture').style.background = 'url(/Dubai/web/img/MOBILE/main320px3.png)';
    document.querySelector('.one__title').classList.remove('_active');
    document.querySelector('.two__title').classList.remove('_active');
    document.querySelector('.three__title').classList.add('_active') ;
    document.querySelector('.slider__prev').classList.remove('_chosen');
    document.querySelector('.slider__next').classList.add('_chosen');
})

//функции слайдера 
let offset = 0;
buildingSlide = () => {
    offset = 295;
    document.querySelector('.slider__body').style.left = -offset + 'px';
    document.querySelector('.navigation__building').classList.add('_active')
    document.querySelector('.navigation__interior').classList.remove('_active')
    document.querySelector('.navigation__all').classList.remove('_active')
    document.querySelector('.pagination__two').style.backgroundColor = '#FCD54C';
    document.querySelector('.pagination__one').style.backgroundColor = '#929292';
    document.querySelector('.pagination__three').style.backgroundColor = '#929292';
}
document.querySelector('.navigation__building').addEventListener('click', buildingSlide)
document.querySelector('.pagination__two').addEventListener('click', buildingSlide)


allSlide = () => {
    offset = 0;
    document.querySelector('.slider__body').style.left = offset + 'px';
    document.querySelector('.navigation__all').classList.add('_active')
    document.querySelector('.navigation__interior').classList.remove('_active')
    document.querySelector('.navigation__building').classList.remove('_active')
    document.querySelector('.pagination__one').style.backgroundColor = '#FCD54C';
    document.querySelector('.pagination__two').style.backgroundColor = '#929292';
    document.querySelector('.pagination__three').style.backgroundColor = '#929292';
}
document.querySelector('.navigation__all').addEventListener('click', allSlide)
document.querySelector('.pagination__one').addEventListener('click', allSlide)

interiorSlide = () => {
    offset = 590;
    document.querySelector('.slider__body').style.left = -offset + 'px';
    document.querySelector('.navigation__interior').classList.add('_active')
    document.querySelector('.navigation__all').classList.remove('_active')
    document.querySelector('.navigation__building').classList.remove('_active')
    document.querySelector('.pagination__three').style.backgroundColor = '#FCD54C';
    document.querySelector('.pagination__two').style.backgroundColor = '#929292';
    document.querySelector('.pagination__one').style.backgroundColor = '#929292';
    
}
document.querySelector('.navigation__interior').addEventListener('click', interiorSlide)
document.querySelector('.pagination__three').addEventListener('click', interiorSlide)


document.querySelector('.top__subtitleLink').addEventListener('mouseover', () => {
    document.querySelector('.subtitleLink__arrow').style.borderColor = '#FCD54C'
    document.querySelector('.subtitleLink__text').style.color = '#FCD54C'
})
document.querySelector('.top__subtitleLink').addEventListener('mouseout', () => {
    document.querySelector('.subtitleLink__arrow').style.borderColor = '#929292'
    document.querySelector('.subtitleLink__text').style.color = '#929292'
})

document.querySelector('.discover__reference').addEventListener('mouseover', () => {
    document.querySelector('.reference__arrow').style.borderColor = '#FFFFFF';
    document.querySelector('.reference__text').style.color = '#FFFFFF';
})
document.querySelector('.discover__reference').addEventListener('mouseout', () => {
    document.querySelector('.reference__arrow').style.borderColor = '#FCD54C';
    document.querySelector('.reference__text').style.color = '#FCD54C';
})

//Carts slider
let slider = document.querySelector('.articles__slider'),
  sliderList = slider.querySelector('.slider-container'),
  sliderTrack = slider.querySelector('.slider__track'),
  slides = slider.querySelectorAll('.slide'),
  slideWidth = slides[0].offsetWidth,
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  lastTrf = --slides.length * slideWidth,
  posThreshold = slideWidth * .35,
  trfRegExp = /[-0-9.]+(?=px)/,
  slide = function() {
    sliderTrack.style.transition = 'transform .5s';
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
  }
 
  getEvent = () => event.type.search('touch') !== -1 ? event.touches[0] : event,

swipeStart = function() {
  let evt = getEvent();

  // берем начальную позицию курсора по оси Х
  posInit = posX1 = evt.clientX;

  // убираем плавный переход, чтобы track двигался за курсором без задержки
  // т.к. он будет включается в функции slide()
  sliderTrack.style.transition = '';

  // и сразу начинаем отслеживать другие события на документе
  document.addEventListener('touchmove', swipeAction);
  document.addEventListener('touchend', swipeEnd);
  document.addEventListener('mousemove', swipeAction);
  document.addEventListener('mouseup', swipeEnd);

  
  sliderList.classList.remove('grab');
  sliderList.classList.add('grabbing');
},
swipeAction = () => {
  let evt = getEvent(),
    // для более красивой записи возьмем в переменную текущее свойство transform
    style = sliderTrack.style.transform,
    // считываем трансформацию с помощью регулярного выражения и сразу превращаем в число
    transform = +style.match(trfRegExp)[0];

  posX2 = posX1 - evt.clientX;
  posX1 = evt.clientX;
  posY2 = posY1 - evt.clientY;
  posY1 = evt.clientY;

  if (!isSwipe && !isScroll) {
    let posY = Math.abs(posY2);
    if (posY > 7 || posX2 === 0) {
      isScroll = true;
      allowSwipe = false;
    } else if (posY < 7) {
      isSwipe = true;
    }
  }

  if (isSwipe) {
    // запрет ухода влево на первом слайде
    if (slideIndex === 0) {
      if (posInit < posX1) {
        setTransform(transform, 0);
        return;
      } else {
        allowSwipe = true;
      }
    }

    // запрет ухода вправо на последнем слайде
    if (slideIndex  === --slides.length) {
      if (posInit > posX1) {
        setTransform(transform, lastTrf);
        return;
      } else {
        allowSwipe = true;
      }
    }

    // запрет протаскивания дальше одного слайда
    if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
      reachEdge();
      return;
    }
    // двигаем слайд
    sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
  }
}
swipeEnd = () => {
    // финальная позиция курсора
    posFinal = posInit - posX1;
  
    isScroll = false;
    isSwipe = false;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);
  
    sliderList.classList.add('grab');
    sliderList.classList.remove('grabbing');

    
    if (Math.abs(posFinal) > posThreshold) {
      
      if (posInit < posX1) {
        slideIndex--;
    
      } else if (posInit > posX1) {
        slideIndex++;
      }
    }
    if(slideIndex == 0){
      document.querySelector('.pagination__first').style.backgroundColor = '#FCD54C'
      document.querySelector('.pagination__second').style.backgroundColor = '#929292'
      document.querySelector('.pagination__third').style.backgroundColor = '#929292'
    }
    else if(slideIndex == 1){
      document.querySelector('.pagination__first').style.backgroundColor = '#929292';
      document.querySelector('.pagination__second').style.backgroundColor = '#FCD54C';
      document.querySelector('.pagination__third').style.backgroundColor = '#929292';
    }
    else if(slideIndex == 2){
      document.querySelector('.pagination__first').style.backgroundColor = '#929292';
      document.querySelector('.pagination__second').style.backgroundColor = '#929292';
      document.querySelector('.pagination__third').style.backgroundColor = '#FCD54C';
    }
  
    // убираем знак минус и сравниваем с порогом сдвига слайда
    if (allowSwipe) {
        if (Math.abs(posFinal) > posThreshold) 
        // если мы тянули вправо, то уменьшаем номер текущего слайда
          if (posInit < posX1) {
            slideIndex--;
        // если мы тянули влево, то увеличиваем номер текущего слайда
          } else if (posInit > posX1) {
            slideIndex++;
          }
        }

 // если курсор двигался, то запускаем функцию переключения слайдов
 if (posInit !== posX1) {
    slide();
  } 
        else {
          allowSwipe = true;
        }
  };

  setTransform = (transform, comapreTransform) => {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  },
  reachEdge = () => {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
sliderList.classList.add('grab');

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);




//FAQ

openCloseAnswer = (event) => {
  if(event.target.dataset.trigger == 'false'){
    event.target.style.transform = 'rotate(135deg)';
    event.target.dataset.trigger = 'true'
    if(event.target.parentNode.classList[0] == 'first__visible'){
      document.querySelector('.first__invisible').style.display = 'block';
    }
    if(event.target.parentNode.classList[0] == 'second__visible'){
      document.querySelector('.second__invisible').style.display = 'block';
    }
    if(event.target.parentNode.classList[0] == 'third__visible'){
      document.querySelector('.third__invisible').style.display = 'block';
    }
    if(event.target.parentNode.classList[0] == 'fourth__visible'){
      document.querySelector('.fourth__invisible').style.display = 'block';
    }
    if(event.target.parentNode.classList[0] == 'fifth__visible'){
      document.querySelector('.fifth__invisible').style.display = 'block';
    }
    
  }
  else if(event.target.dataset.trigger = 'true'){
    event.target.style.transform = 'rotate(45deg)';
    event.target.dataset.trigger ='false';
    if(event.target.parentNode.classList[0] == 'first__visible'){
      document.querySelector('.first__invisible').style.display = 'none';
    }
    if(event.target.parentNode.classList[0] == 'second__visible'){
      document.querySelector('.second__invisible').style.display = 'none';
    }
    if(event.target.parentNode.classList[0] == 'third__visible'){
      document.querySelector('.third__invisible').style.display = 'none';
    }
    if(event.target.parentNode.classList[0] == 'fourth__visible'){
      document.querySelector('.fourth__invisible').style.display = 'none';
    }
    if(event.target.parentNode.classList[0] == 'fifth__visible'){
      document.querySelector('.fifth__invisible').style.display = 'none';
    }
  }
}

document.querySelector('.visible__arrow_first').addEventListener('click', openCloseAnswer)
document.querySelector('.visible__arrow_second').addEventListener('click', openCloseAnswer)
document.querySelector('.visible__arrow_third').addEventListener('click', openCloseAnswer)
document.querySelector('.visible__arrow_fourth').addEventListener('click', openCloseAnswer)
document.querySelector('.visible__arrow_fifth').addEventListener('click', openCloseAnswer)
