let selector = document

let html = selector.querySelector('html');

let div_color = selector.querySelector('.div-color-footer');

let div_color_blue = div_color.querySelector('#blue');// selctor color blue

let div_color_orang = div_color.querySelector('#orang');// selctor color orange

let div_color_green = div_color.querySelector('#green');// selctor color green

let div_icons = selector.querySelector('.div-icons-footer')// select icon box 

let active_article = selector.querySelector('.active-footer')// select code keeper

let text_article = selector.querySelector('.div-text-article') // select text article

let skill_section = selector.querySelector('.skill-section') // select skill section 

let section_svg = selector.querySelector('.svg-section')// select svg section close

let colorInput = selector.querySelector('#color')// select color footer

let inverseInput = selector.querySelector('#inverse')//select inverse footer

let linkedin = document.querySelector('#svg_LinkedIn')//selct svg linkedin

let github =  document.querySelector('#svg_github')//selct svg github

let gmail = document.querySelector('#svg_gmail')//selct svg gmail

let telegram =  document.querySelector('#svg_telegram')//selct svg telegram

let chess = document.querySelector('#svg_chess')//selct svg chess

let instagram = document.querySelector('#svg_instagram')//selct svg instagram

let about_icons = selector.querySelector('.about-icons')// selct about icons

let text_1_article = selector.querySelector('.text_1') // selct article text_1

let text_2_article = selector.querySelector('.text_2') // selct article text_2

let paragraf_section = selector.querySelector('.paragraf-section') // select paragraf  section

let article_keper = selector.querySelectorAll('.div-icons-footer') // select icons a-link footer

let article_text = selector.querySelectorAll('.div-text-article') // select text article

// let article_div_text = selector.querySelector('.article-article-div') // select text article


let footer_text = selector.querySelectorAll('.icons') // selct icons div footer

let cantener_section = selector.querySelector('.cantener-section') // select cantener section

let text_footer = selector.querySelector('.h3-text-footer') // select text footer

let sandbox = selector.querySelector('.sandbox') // select sandbox footer

let paragraf_color_footer = selector.querySelectorAll('.icons-link')// select icons footer text

let codepen = selector.querySelector('.pen') // select  codepen footer

let text_section_icons  = selector.querySelector('.paragraf-section-icons')// select text section icons

let text_div_section = selector.querySelector('.pagaraf-div-section') // select text div section

let svg_div_section = selector.querySelector('.div-section-svg') // select svg div section

let card_section = selector.querySelectorAll('.card-section') // select card svg section

let image_div = selector.querySelector('.div-img')// image div header

let article_class = selector.querySelector('.article-class')

//---------------------------------------------

selector.addEventListener('DOMContentLoaded' , function() {
    let preloder = selector.getElementById('preloder')
    let content = selector.getElementById('content')
    
    preloder.style.display = 'none';
    content.style.display = 'block'
});

// no hover svg instagram
