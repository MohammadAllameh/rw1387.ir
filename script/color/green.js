let green_value = 3
div_color_green.addEventListener('click',function(event){
    html.style.backgroundColor = 'rgb(63, 171, 63)';
    selector.querySelector('.text-header').style.color = 'rgb(63, 171, 63)';
    html.style.transition = 'background-color 3s'
    article_keper.forEach((card)=>{
        card.style.backgroundColor = 'rgb(192, 84, 192)'
        card.style.color = 'rgb(63, 171, 63)'
        card.style.transition = 'background-color 3s,color 3s'
    })
    article_text.forEach((card)=>{
        card.style.backgroundColor = 'rgb(192, 84, 192)'
        card.style.color = 'rgb(63, 171, 63)'
        card.style.transition = 'background-color 3s,color 3s'
    })
    footer_text.forEach((card)=>{
        card.style.color = 'rgb(63, 171, 63)'
        card.style.transition = 'color 3s'
    })
    skill_section.style.backgroundColor = 'rgb(192, 84, 192)'
    skill_section.style.transition = 'background-color 3s'
    
    cantener_section.style.backgroundColor = 'rgb(192, 84, 192)'
    cantener_section.style.transition = 'background-color 3s'
    
    paragraf_section.style.color = 'rgb(63, 171, 63)'
    paragraf_section.style.transition = 'color 3s'
    
    text_footer.style.color = 'rgb(63, 171, 63)'
    text_footer.style.transition = 'color 3s'
    
    about_icons.style.backgroundColor = `rgb(192, 84, 192)`
    about_icons.style.transition = 'background-color 3s'
    
    icons_footer_sand.style.backgroundColor = `rgb(192, 84, 192)`
    icons_footer_sand.style.transition = 'background-color 3s'
    paragraf_color_footer.forEach((card)=>{
        card.style.color = 'rgb(63, 171, 63)'
        card.style.transition = 'color 3s'
    })
    
    icons_footer_pen.style.backgroundColor = `rgb(192, 84, 192)`
    icons_footer_pen.style.transition = 'background-color 3s'
    
    
    text_section_icons.style.color = 'rgb(63, 171, 63)'
    text_section_icons.style.transition = 'color 3s'
    
    linkedin.style.fill = 'rgb(63, 171, 63)',linkedin.style.stroke = 'rgb(63, 171, 63)',linkedin.style.transition = 'fill 3s , stroke 3s'
    github.style.fill = 'rgb(63, 171, 63)',github.style.stroke = 'rgb(63, 171, 63)',github.style.transition = 'fill 3s , stroke 3s'
    gmail.style.fill = 'rgb(63, 171, 63)',gmail.style.stroke = 'rgb(63, 171, 63)',gmail.style.transition = 'fill 3s , stroke 3s'
    telegram.style.fill = 'rgb(63, 171, 63)',telegram.style.stroke = 'rgb(63, 171, 63)',telegram.style.transition = 'fill 3s , stroke 3s'
    chess.style.fill = 'rgb(63, 171, 63)',chess.style.stroke = 'rgb(63, 171, 63)',chess.style.transition = 'fill 3s , stroke 3s'
    instagram.style.fill = 'rgb(63, 171, 63)',instagram.style.stroke = 'rgb(63, 171, 63)',instagram.style.transition = 'fill 3s , stroke 3s'
    
    blue_value = 6
    m = 4
    orang_value = 7
    green_value = 5
})