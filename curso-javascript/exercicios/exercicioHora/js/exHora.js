function carregar()
{
var msg = document.getElementById('msg')
var img =  document.getElementById('imagem')
var hora = new Date().getHours()
msg.innerHTML= `Agora são ${hora}h`

if (hora >= 0 && hora <12)
{
    img.src = 'img/manha.png'
    document.body.style.background = '#836FFF'
}

else if (hora >= 12 && hora <18)
{
    img.src = 'img/tarde.png'
    document.body.style.background = '#6959CD'
}

else
{
    img.src = 'img/noite.png'
    document.body.style.background = '#483D8B'
}
}