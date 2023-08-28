let orang_value = 1
div_color_orang.addEventListener('click',function(event){
    html.style.backgroundColor = 'rgb(255, 128, 64)';
    selector.querySelector('.text-header').style.color = 'rgb(255, 128, 64)';
    html.style.transition = 'background-color 3s'
    article_keper.forEach((card)=>{
        card.style.backgroundColor = 'rgb(65, 251, 251)'
        card.style.color = 'rgb(255, 128, 64)'
        card.style.transition = 'background-color 3s,color 3s'
    })
    article_text.forEach((card)=>{
        card.style.backgroundColor = 'rgb(65, 251, 251)'
        card.style.color = 'rgb(255, 128, 64)'
        card.style.transition = 'background-color 3s,color 3s'
    })
    footer_text.forEach((card)=>{
        card.style.color = 'rgb(255, 128, 64)'
        card.style.transition = 'color 3s'
    })
    skill_section.style.backgroundColor = 'rgb(65, 251, 251)'
    skill_section.style.transition = 'background-color 3s'
    
    paragraf_section.style.color = 'rgb(255, 128, 64)'
    paragraf_section.style.transition = 'color 3s'
    
    cantener_section.style.backgroundColor = 'rgb(65, 251, 251)'
    cantener_section.style.transition = 'background-color 3s'
    
    text_footer.style.color = 'rgb(255, 128, 64)'
    text_footer.style.transition = 'color 3s'
    
    about_icons.style.backgroundColor = `rgb(65, 251, 251)`
    about_icons.style.transition = 'background-color 3s'
    
    icons_footer_sand.style.backgroundColor = `rgb(65, 251, 251)`
    icons_footer_sand.style.transition = 'background-color 3s'
    
    
    paragraf_color_footer.forEach((card)=>{
        card.style.color = 'rgb(255, 128, 64)'
        card.style.transition = 'color 3s'
    })
    
    icons_footer_pen.style.backgroundColor = `rgb(65, 251, 251)`
    icons_footer_pen.style.transition = 'background-color 3s'
    
    text_section_icons.style.color = 'rgb(255, 128, 64)'
    text_section_icons.style.transition = 'color 3s'
    
    linkedin.style.fill = 'rgb(255, 128, 64)',linkedin.style.stroke = 'rgb(255, 128, 64)',linkedin.style.transition = 'fill 3s , stroke 3s'
    github.style.fill = 'rgb(255, 128, 64)',github.style.stroke = 'rgb(255, 128, 64)',github.style.transition = 'fill 3s , stroke 3s'
    gmail.style.fill = 'rgb(255, 128, 64)',gmail.style.stroke = 'rgb(255, 128, 64)',gmail.style.transition = 'fill 3s , stroke 3s'
    telegram.style.fill = 'rgb(255, 128, 64)',telegram.style.stroke = 'rgb(255, 128, 64)',telegram.style.transition = 'fill 3s , stroke 3s'
    chess.style.fill = 'rgb(255, 128, 64)',chess.style.stroke = 'rgb(255, 128, 64)',chess.style.transition = 'fill 3s , stroke 3s'
    instagram.style.fill = 'rgb(255, 128, 64)',instagram.style.stroke = 'rgb(255, 128, 64)',instagram.style.transition = 'fill 3s , stroke 3s'
    
    blue_value = 6
    m = 4
    orang_value = 5
    green_value = 7
})