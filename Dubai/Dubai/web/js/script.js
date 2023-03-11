let burgerMenu = document.querySelector('.visible__burger');
//функция позволяет открывать скрытое меню и менять иконку бургера через data-trigger 
showCloseHiddenMenu = (event) => {
    if(event.target.dataset.trigger == 'false'){
        document.querySelector('.visible__burger img').src = '/Dubai/web/img/MOBILE/closeBurger.svg'
        document.querySelector('.header__invisible').style.display = 'block';
        event.target.dataset.trigger = 'true';
    }
    else {
        document.querySelector('.visible__burger img').src = '/Dubai/web/img/MOBILE/Burger.svg'
        document.querySelector('.header__invisible').style.display = 'none';
        event.target.dataset.trigger = 'false';
    }
}
burgerMenu.addEventListener('click', showCloseHiddenMenu)



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


