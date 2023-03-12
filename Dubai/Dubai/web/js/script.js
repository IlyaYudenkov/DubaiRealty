let visibleBurger = document.querySelector('.visible__burger');
let invisibleBurger = document.querySelector('.banner__burger');
//функция позволяет открывать скрытое меню и менять иконку бургера через data-trigger 
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


let buyArrow = document.querySelector('.box__arrow')
let blogArrow = document.querySelector('.box__arrow2')
let aboutArrow = document.querySelector('.box__arrow3')
let contactArrow = document.querySelector('.box__arrow4')

let buySubmenu = document.querySelector('.buy__submenu')
let blogSubmenu = document.querySelector('.blog__submenu')
let aboutSubmenu = document.querySelector('.about__submenu')
let contactSubmenu = document.querySelector('.contact__submenu')


//функция позволяет открывать скрытые submenu конкретного пункта (и менять "стрелочки" через data-trigger и родитель event.targetA)
openCloseSubmenu = (event) => {
    if(event.target.dataset.trigger == 'true'){
        event.target.style.transform = 'rotate(0deg)';
        if(event.target.parentNode.classList[0] == 'buy__box'){
            buySubmenu.style.display = 'block';
        }
        else if(event.target.parentNode.classList[0] == 'blog__box'){
            blogSubmenu.style.display = 'block';
        }
        else if(event.target.parentNode.classList[0] == 'about__box'){
            aboutSubmenu.style.display = 'block';
        }
        else if(event.target.parentNode.classList[0] == 'contact__box'){
            contactSubmenu.style.display = 'block';
        }
        event.target.dataset.trigger = 'false';
        
    }
    else if(event.target.dataset.trigger = 'false'){
        event.target.style.transform = 'rotate(180deg)';
        if(event.target.parentNode.classList[0] == 'buy__box'){
            buySubmenu.style.display = 'none';
        }
        else if(event.target.parentNode.classList[0] == 'blog__box'){
            blogSubmenu.style.display = 'none';
        }
        else if(event.target.parentNode.classList[0] == 'about__box'){
            aboutSubmenu.style.display = 'none';
        }
        else if(event.target.parentNode.classList[0] == 'contact__box'){
            contactSubmenu.style.display = 'none';
        }
        event.target.dataset.trigger = 'true';
       
    }
}

buyArrow.addEventListener('click', openCloseSubmenu);
blogArrow.addEventListener('click', openCloseSubmenu);
aboutArrow.addEventListener('click', openCloseSubmenu);
contactArrow.addEventListener('click', openCloseSubmenu);

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

