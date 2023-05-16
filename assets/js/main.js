let menuButton = document.querySelector('.nav__content__right__menuIcon')
let exitButton = document.querySelector('.nav__content__right__exitIcon')
let nav__content  = document.querySelector('.nav__content')
let nav__content__logo  = document.querySelector('.nav__content__logo')
let nav__content__right = document.querySelector('.nav__content__right')
let nav__content__right__meuList  = document.querySelector('.nav__content__right__meuList')
let nav__content__right__languageButtons = document.querySelector('.nav__content__right__languageButtons')
let nav__content__right__menuIcon= document.querySelector('.nav__content__right__menuIcon')
menuButton.addEventListener('click',showMenu)
exitButton.addEventListener('click',hideMenu)


  function showMenu(){

    nav__content.classList.add('nav__openmenu')
    nav__content.classList.remove('nav__content')
    exitButton.classList.add('nav__openmenu__exiicon')
    exitButton.classList.remove('nav__content__right__exitIcon')
    nav__content__right.classList.add('nav__openmenu__content')
    nav__content__right.classList.remove('nav__content__right')
    nav__content__logo.classList.add('nav__openmenu__logo')
    nav__content__logo.classList.remove('nav__content__logo')
    nav__content__right__meuList.classList.add('nav__openmenu__menuList')
    nav__content__right__meuList.classList.remove('nav__content__right__meuList')
    nav__content__right__languageButtons.classList.add('nav__openmenu__languageButtons')
    nav__content__right__languageButtons.classList.remove('nav__content__right__languageButtons')
    nav__content__right__menuIcon.classList.add('nav__openmenu__menuicon')
    nav__content__right__menuIcon.classList.remove('nav__content__right__menuIcon')
    
    
    }
    
  function hideMenu(){

    nav__content.classList.remove('nav__openmenu')
    nav__content.classList.add('nav__content')
    exitButton.classList.remove('nav__openmenu__exiicon')
    exitButton.classList.add('nav__content__right__exitIcon')
    nav__content__right.classList.remove('nav__openmenu__content')
    nav__content__right.classList.add('nav__content__right')
    nav__content__logo.classList.remove('nav__openmenu__logo')
    nav__content__logo.classList.add('nav__content__logo')
    nav__content__right__meuList.classList.remove('nav__openmenu__menuList')
    nav__content__right__meuList.classList.add('nav__content__right__meuList')
    nav__content__right__languageButtons.classList.remove('nav__openmenu__languageButtons')
    nav__content__right__languageButtons.classList.add('nav__content__right__languageButtons')
    nav__content__right__menuIcon.classList.remove('nav__openmenu__menuicon')
    nav__content__right__menuIcon.classList.add('nav__content__right__menuIcon')
    
    
    }
    // let registerButton = document.querySelector('.register__button')
    // let registrationPopup = document.querySelector('.registrationPopup')
    // registerButton.addEventListener('click',registrationPopupToggle)
    // function registrationPopupToggle(){
    //   registrationPopup.classList.add('active')
    // }




    function openModal(modalSelector, triggerClass, closeClass) {
      const modal = document.querySelector(modalSelector)
      document.addEventListener('click', (e) => {
        if(e.target.classList.contains(triggerClass)) {
          modal.classList.add('active')
        } else if(e.target.classList.contains(closeClass)) {
          modal.classList.remove('active')
        }
      })
    }

    openModal('.registrationPopup', 'register__button', "registrationPopup__exit__button" )