let dark_div = document.querySelector('#dark_div');
let ru = document.querySelector('#ru')
let eng = document.querySelector('#eng')

let header = document.querySelector('header');
let footer = document.querySelector('footer');
let body = document.querySelector('body');
let main = document.querySelector('main');
let aside = document.querySelector('aside');
let header_list = document.querySelector('.header_list');
let li_sound = document.querySelector('#li_sound');
let li_music = document.querySelector('#li_music');
let li_lang = document.querySelector('#li_lang');
let li_dark = document.querySelector('#li_dark');
let h1_head = document.querySelector('#h1_head');
let h1_main = document.querySelector('#h1_main');
let h3_main = document.querySelector('#h3_main');
let h1_footer = document.querySelector('#h1_footer');
let nav_1 = document.querySelector('#nav_1');
let nav_2 = document.querySelector('#nav_2');
let nav_3 = document.querySelector('#nav_3');
let aside_big = document.querySelector('#aside_big');


dark_div.addEventListener('click', ()=> {
    if (dark_div.style.borderColor === 'rgb(133, 68, 66)') {
        dark_div.style.borderColor = 'rgb(133, 68, 65)';
        header.style.color = 'rgb(75, 56, 50)';
        header.style.backgroundColor = 'rgb(190, 155, 123)';
        h1_head.style.textShadow = '2px 2px 4px rgb(60, 47, 47)';
        h1_footer.style.textShadow = '2px 2px 4px rgb(60, 47, 47)';
        footer.style.color = 'rgb(75, 56, 50)';
        footer.style.backgroundColor = 'rgb(190, 155, 123)';
        footer.style.textShadow = '2px 2px 4px rgb(60, 47, 47)';
        body.style.backgroundColor = 'rgb(60, 47, 47)';
        main.style.color = 'rgb(255, 244, 230)';
        aside.style.color = 'rgb(255, 244, 230)';
        aside.style.backgroundColor = 'rgb(100, 56, 50)';
        header_list.style.backgroundColor = 'rgb(75, 56, 50)';
        header_list.style.color = 'rgb(255, 244, 230)';
    }
    else if (dark_div.style.borderColor === 'rgb(133, 68, 65)') {
        dark_div.style.borderColor = 'rgb(133, 68, 66)';
        header.style.color = 'rgb(255, 244, 230)';
        header.style.backgroundColor = 'rgb(75, 56, 50)';
        h1_head.style.textShadow = '2px 2px 4px rgb(190, 155, 123)';
        h1_footer.style.textShadow = '2px 2px 4px rgb(190, 155, 123)';
        footer.style.color = 'rgb(255, 244, 230)';
        footer.style.backgroundColor = 'rgb(75, 56, 50)';
        body.style.backgroundColor = 'rgb(255, 244, 230)';
        main.style.color = 'rgb(75, 56, 50)';
        aside.style.backgroundColor = 'rgb(190, 155, 123)';
        aside.style.color = 'rgb(75, 56, 50)';
        header_list.style.backgroundColor = 'rgb(255, 244, 230)';
        header_list.style.color = 'rgb(60, 47, 47)';
    }
});

ru.addEventListener('click', ()=> {
    h1_head.innerHTML = "Егорио.by";
    h1_main.innerHTML = "Лучший интернет-магазин в мире";
    h3_main.innerHTML = "Здесь вы можете купить множество различных товаров на любой вкус и цвет по низким ценам. Убедитесь в этом сами, перейдя по ссылке на главной странице.";
    h1_footer.innerHTML = "Сделано ESHst 2024";
    nav_1.innerHTML = "Аккаунт";
    nav_2.innerHTML = "Магазин";
    nav_3.innerHTML = "Больше";
    aside_big.innerHTML = "Идти в:";
    li_sound.innerHTML = "Звук";
    li_music.innerHTML = "Музыка";
    li_lang.innerHTML = "Язык:";
    li_dark.innerHTML = "Тёмный режим";
});
eng.addEventListener('click', ()=> {
    h1_head.innerHTML = "Egorio.by";
    h1_main.innerHTML = "The best internet-shop for all time";
    h3_main.innerHTML = "Here you can buy many products for every taste and color at low prices.Check it out for yourself by followingthe link on the main side. Lorem ipsum dolorsit amet consectetur adipisicing elit. Architecto tempora repellendus doloribus sunt corporis facilis.";
    h1_footer.innerHTML = "Made by ESHst 2024";
    nav_1.innerHTML = "Accaunt";
    nav_2.innerHTML = "Shop";
    nav_3.innerHTML = "More";
    aside_big.innerHTML = "Go to:";
    li_sound.innerHTML = "Sound";
    li_music.innerHTML = "Music";
    li_lang.innerHTML = "Language:";
    li_dark.innerHTML = "Dark mode";
});