let i = 1;
div_icons.addEventListener('click', function(event){
    if (i == 1) {
        selector.querySelector('.div-icons').style.display = 'none'
        //
        selector.querySelector('.active-footer').style.display = 'flex'
        //
        this.style.backgroundColor = html.style.backgroundColor
        this.style.border = 'red'
        text_footer.style.transform = 'scale(1)'
        text_footer.style.transition = 'transform 4s'
        this.style.filter = 'none';
        this.style.transition = 'filter 3s'
        //
    }else{
        return;
    }
    i++;
})

let icons_footer_sand = selector.querySelector('.icons-div-sandbox')
icons_footer_sand.addEventListener('mouseenter' , function(event){
    this.style.filter = `hue-rotate(100deg)`
    this.style.transition = 'filter 3s'
})
let icons_footer_pen = selector.querySelector('.icons-div-codepen')
icons_footer_pen.addEventListener('mouseenter' , function(event){
    this.style.filter = `hue-rotate(100deg)`
    this.style.transition = 'filter 3s'
})
icons_footer_sand.addEventListener('mouseleave' ,function(event){
    this.style.filter = `hue-rotate(0deg)`
    this.style.transition = 'filter 3s'
})
icons_footer_pen.addEventListener('mouseleave' ,function(event){
    this.style.filter = `hue-rotate(0deg)`
    this.style.transition = 'filter 3s'
})
image_div.addEventListener('mouseenter', function(event){
    this.style.filter = 'saturate(0.4)'
})
image_div.addEventListener('mouseleave', function(event){
    this.style.filter = 'saturate(1)'
})
