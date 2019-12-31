const openBtn = document.querySelector(".navbar__open")
const closeBtn = document.querySelector(".navbar__close")
const navList = document.querySelector(".nav-list")

const navLinks = document.querySelectorAll('.nav-list__link')
console.log(navLinks)

navLinks.forEach(link=> {
    link.addEventListener("click", e=> {
        if(e.target.classList.contains('nav-list__link--current')) {
            if(navList.classList.contains("active")){
                navList.classList.remove('active')
            }
            

        } else {
            navLinks.forEach(link=> {
                link.classList.remove('nav-list__link--current')
            })
            e.target.classList.add('nav-list__link--current')
            if(navList.classList.contains("active")){
                navList.classList.remove('active')
            }
        }
    })
})

openBtn.addEventListener('click', ()=> {
    navList.classList.add('active')

})

closeBtn.addEventListener("click", ()=> {
    navList.classList.remove('active')
})

window.addEventListener("resize", ()=>{
    if(window.innerWidth>= 700 && navList.classList.contains("active") ) {
        navList.classList.remove("active")
        console.log("works")
    }
})

const now = new Date()
const year = now.getFullYear()
document.querySelector(".year").textContent = year