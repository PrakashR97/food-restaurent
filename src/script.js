
document.addEventListener('DOMContentLoaded',()=>
{
    let menu=document.querySelector('#menu-bar')
    let navbar=document.querySelector('.navbar')

    menu.onclick=()=>
    {
        menu.classList.toggle('fa-times')
        navbar.classList.toggle('active')
    }

    window.onscroll=()=>
    {
        menu.classList.remove('fa-times')
        navbar.classList.remove('active')
    }

    if(window.scrollY>30)
    {
        document.querySelector('#scroll-top').classList.add('active')
    }
    else
    {
        document.querySelector('#scroll-top').classList.remove('active')
    }
})