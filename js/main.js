/* =============== typing animation =============== */
let typed = new Typed('.typing', {
    strings: ['','Web Designer', 'web Developer'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
/* =============== Aside =============== */
const nav = document.querySelector('.nav'),
      navList = nav.querySelectorAll('li'),
      totalNavList = navList.length;
      for (let i = 0; i < totalNavList; i++){
        const a = navList[i].querySelector('a')
        a.addEventListener('click', function(){
            for(let j = 0; j < totalNavList; j++){
                const a = navList[j].querySelector('a').classList.remove('active')
            }
            this.classList.add('active')
            showSection(this)
        })
      }
      function showSection(element){
        const target = element.getAttribute('href').split('#')[1]
        document.querySelector('#' + target).classList.add('active')
        
      }