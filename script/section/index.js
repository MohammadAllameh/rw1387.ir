skill_section.addEventListener('click' , function(event){
    let d = 1;
    
    if (d == 1) {
        skill_section.style.overflowX = 'hidden'
        skill_section.style.height = '100%'
        cantener_section.style.height = '347px'
        text_div_section.style.display = 'none'
        skill_section.style.width = '300px'
        // skill_section.style.margin = '0.25rem auto'
        cantener_section.style.margin = '0.25rem auto'
        skill_section.style.transition = 'width 2s , height 2s,margin 2s'
        cantener_section.style.width = '300px'
        cantener_section.style.transition = 'width 2s , height 2s,margin 2s'
        cantener_section.style.display = 'flex'
        cantener_section.style.justifyContent = 'center'
        svg_div_section.style.display = 'flex'
        setTimeout(() => {
            if (cantener_section.style.height == '347px') {
                card_section.forEach(card => {
                    card.style.opacity ='1'
                });
                return;
            }else{
                return
            }
        }, 2000);
    }else{
        return;
    }
})

section_svg.addEventListener('click' , function(event){
    let s = 0
    if (s == 0) {
        setTimeout(() => {
            article_class.style.margin = ' 0rem 0.25rem 0.5rem'
            article_class.style.transition = 'margin 2s'
            skill_section.style.overflowX = 'none'
            skill_section.style.animation = `identifier 2s linear`
            text_div_section.style.animation = `identifier 2s linear`
            cantener_section.style.display = 'none'
            svg_div_section.style.display = 'none'
            paragraf_section.style.display = 'flex'
            text_div_section.style.display = 'flex'
            text_div_section.style.width = '200px'
            text_div_section.style.height = '200px'
            let  x = window.matchMedia("(max-width: 475px)")
            if (x.matches) {
                text_div_section.style.margin = '0.25rem auto'
            } else {
                text_div_section.style.margin = '0 0.25rem'
            }
            text_div_section.style.transition = 'width 2s , height 2s ,margin 2s'
            skill_section.style.width = '200px'
            skill_section.style.height = '200px'
            skill_section.style.margin = '0 0.25rem'    
            // skill_section.style.margin = '0.25rem auto'
            skill_section.style.overflowX = 'none'
            if (x.matches) {
                skill_section.style.margin = '0.25rem auto'
            } else {
                skill_section.style.margin = '0 0.25rem'
            }
            if (skill_section.style.width == '200px') {
                card_section.forEach(card => {
                    card.style.opacity ='0'
                });
                return;
            }else{
                return
            }
        }, 0);
    }else{
        return;
    }
})
let  x = window.matchMedia("(min-width: 1024px)")
let  y = window.matchMedia("(max-width: 475px)")
if (x.matches) {
    article_class.style.margin = '0.25rem'
    article_class.style.transition = 'margin 2s'
    article_class.style.height = cantener_section.style.height
}else if(y.matches){
    article_class.style.height = '100%'
}
else{
    article_class.style.height = '100%'
}
let g_tag = selector.querySelectorAll('.g-tag')

section_svg.addEventListener('mouseenter' , function(event){
    g_tag.forEach((card)=>{
        card.style.fill = 'blue'
        card.style.transition = 'fill 3s '
    })
})

section_svg.addEventListener('mouseleave' , function(event){
    g_tag.forEach((card)=>{
        card.style.fill = '#a93c3c'
        card.style.transition = 'fill 3s '
    })
})

