
function ElementBakgrandColor(stringToTest) {
    if (stringToTest === "") { return false; }
    if (stringToTest === "inherit") { return false; }
    if (stringToTest === "transparent") { return false; }
    const image = selector.createElement("img");
    image.style.color = "rgb(0, 0, 0)";
    image.style.color = stringToTest;
    if (image.style.color !== "rgb(0, 0, 0)") { return true; }
    image.style.color = "rgb(255, 255, 255)";
    image.style.color = stringToTest;
    return image.style.color !== "rgb(255, 255, 255)";
    }
    colorInput.addEventListener('change', () => {
    if (ElementBakgrandColor(colorInput.value)) {
        html.style.backgroundColor = `${colorInput.value}`
        colorInput.style.backgroundColor = `${colorInput.value}`
        selector.querySelector('.text-header').style.color = `${colorInput.value}`;
        
        
        
        html.style.transition = 'background-color 3s cubic-bezier(0.075, 0.82, 0.165, 1) , color 3s cubic-bezier(0.075, 0.82, 0.165, 1)'
    }
    else {
        colorInput.style.backgroundColor = `${colorInput.value}`
        
        html.style.backgroundColor = 'rgb(255, 128, 64)';
    }
});

const invertColor = (col) => {
  const colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
  let inverseColor = '#'
  col.replace('#','').split('').forEach(i => {
    const index = colors.indexOf(i)
    inverseColor += colors.reverse()[index]
  })
  return inverseColor
}
let m = 4
function colorelement(event){
    inverseInput.value = invertColor(event.target.value)
    let card = selector.querySelectorAll('.card')
    card.forEach((card)=>{
        card.style.backgroundColor = `${inverseInput.value}`
        card.style.color = `${colorInput.value}`
        card.style.transition = 'background-color 3s,color 3s'
    })
    article_keper.forEach((card)=>{
        card.style.backgroundColor = `${inverseInput.value}`
        card.style.color = `${colorInput.value}`
        card.style.transition = 'background-color 3s,color 3s'
    })
    article_text.forEach((card)=>{
        card.style.backgroundColor = `${inverseInput.value}`
        card.style.color = `${colorInput.value}`
        card.style.transition = 'background-color 3s,color 3s'
    })
    footer_text.forEach((card)=>{
        card.style.color = `${colorInput.value}`
        card.style.transition = 'color 3s'
    })
    
    skill_section.style.backgroundColor = `${inverseInput.value}`
    skill_section.style.transition = 'background-color 3s'
    
    paragraf_section.style.color = `${colorInput.value}`
    paragraf_section.style.transition = 'color 3s'
    
    cantener_section.style.backgroundColor = `${inverseInput.value}`
    cantener_section.style.transition = 'background-color 3s'
    
    text_footer.style.color = `${colorInput.value}`
    text_footer.style.transition = 'color 3s'
    
    about_icons.style.backgroundColor = `${inverseInput.value}`
    about_icons.style.transition = 'background-color 3s'
    
    text_section_icons.style.color = `${colorInput.value}`
    text_section_icons.style.transition = 'color 3s'
    
    icons_footer_sand.style.backgroundColor = `${inverseInput.value}`
    icons_footer_sand.style.transition = 'background-color 3s'
    
    paragraf_color_footer.forEach((card)=>{
        card.style.color = `${colorInput.value}`
        card.style.transition = 'color 3s'
    })
    
    icons_footer_pen.style.backgroundColor = `${inverseInput.value}`
    icons_footer_pen.style.transition = 'background-color 3s'
    
    
    linkedin.style.fill = `${colorInput.value}`,linkedin.style.stroke = `${colorInput.value}`,linkedin.style.transition = 'fill 3s , stroke 3s'
    github.style.fill = `${colorInput.value}`,github.style.stroke = `${colorInput.value}`,github.style.transition = 'fill 3s , stroke 3s'
    gmail.style.fill = `${colorInput.value}`,gmail.style.stroke = `${colorInput.value}`,gmail.style.transition = 'fill 3s , stroke 3s'
    telegram.style.fill = `${colorInput.value}`,telegram.style.stroke = `${colorInput.value}`,telegram.style.transition = 'fill 3s , stroke 3s'
    chess.style.fill = `${colorInput.value}`,chess.style.stroke = `${colorInput.value}`,chess.style.transition = 'fill 3s , stroke 3s'
    instagram.style.fill = `${colorInput.value}`,instagram.style.stroke = `${colorInput.value}`,instagram.style.transition = 'fill 3s , stroke 3s'
    
    blue_value = 6
    m = 5
    orang_value = 7
    green_value = 5
}
colorInput.addEventListener('change', colorelement)