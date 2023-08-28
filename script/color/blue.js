
let blue_value = 2

div_color_blue.addEventListener('click',function(event){
    html.style.backgroundColor = 'rgb(18, 96, 197)';
    selector.querySelector('.text-header').style.color = 'rgb(18, 96, 197)';
    html.style.transition = 'background-color 3s'
    article_keper.forEach((card)=>{
        card.style.backgroundColor = 'rgb(237, 159, 58)'
        card.style.color = 'rgb(18, 96, 197)'
        card.style.transition = 'background-color 3s,color 3s'
    })
    article_text.forEach((card)=>{
        card.style.backgroundColor = 'rgb(237, 159, 58)'
        card.style.color = 'rgb(18, 96, 197)'
        card.style.transition = 'background-color 3s,color 3s'
    })
    footer_text.forEach((card)=>{
        card.style.color = 'rgb(18, 96, 197)'
        card.style.transition = 'color 3s'
    })
    skill_section.style.backgroundColor = 'rgb(237, 159, 58)'
    skill_section.style.transition = 'background-color 3s'
    
    cantener_section.style.backgroundColor = 'rgb(237, 159, 58)'
    cantener_section.style.transition = 'background-color 3s'
    
    paragraf_section.style.color = 'rgb(18, 96, 197)'
    paragraf_section.style.transition = 'color 3s'
    
    text_footer.style.color = 'rgb(18, 96, 197)'
    text_footer.style.transition = 'color 3s'
    
    
    about_icons.style.backgroundColor = `rgb(237, 159, 58)`
    about_icons.style.transition = 'background-color 3s'
    
    icons_footer_sand.style.backgroundColor = `rgb(237, 159, 58)`
    icons_footer_sand.style.transition = 'background-color 3s'
    paragraf_color_footer.forEach((card)=>{
        card.style.color = 'rgb(18, 96, 197)'
        card.style.transition = 'color 3s'
    })
    icons_footer_pen.style.backgroundColor = `rgb(237, 159, 58)`
    icons_footer_pen.style.transition = 'background-color 3s'
    
    
    text_section_icons.style.color = 'rgb(18, 96, 197)'
    text_section_icons.style.transition = 'color 3s'
    
    linkedin.style.fill = 'rgb(18, 96, 197)',linkedin.style.stroke = 'rgb(18, 96, 197)',linkedin.style.transition = 'fill 3s , stroke 3s'
    github.style.fill = 'rgb(18, 96, 197)',github.style.stroke = 'rgb(18, 96, 197)',github.style.transition = 'fill 3s , stroke 3s'
    gmail.style.fill = 'rgb(18, 96, 197)',gmail.style.stroke = 'rgb(18, 96, 197)',gmail.style.transition = 'fill 3s , stroke 3s'
    telegram.style.fill = 'rgb(18, 96, 197)',telegram.style.stroke = 'rgb(18, 96, 197)',telegram.style.transition = 'fill 3s , stroke 3s'
    chess.style.fill = 'rgb(18, 96, 197)',chess.style.stroke = 'rgb(18, 96, 197)',chess.style.transition = 'fill 3s , stroke 3s'
    instagram.style.fill = 'rgb(18, 96, 197)',instagram.style.stroke = 'rgb(18, 96, 197)',instagram.style.transition = 'fill 3s , stroke 3s'
    
    blue_value = 5
    m = 4
    orang_value = 6
    green_value = 7
})