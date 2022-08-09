const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Menu
function menuOnTabletMobile() {
    const menu = $('.menu__even')
    const closeMenu = $('.close-menu__even')
    const list = $('.list__even')
    const items = $$('.list__even li a')

    // Show menu on tablet and mobile
    menu.addEventListener('click', () => {
        list.classList.remove('hide-on-mobile-tablet')
        list.classList.add('block-on-mobile-tablet')
    })

    // Hide menu
    closeMenu.addEventListener('click', () => {
        list.classList.remove('block-on-mobile-tablet')
        list.classList.add('hide-on-mobile-tablet')
    })

    // Item click
    for(const it of items) {
        it.addEventListener('click', () => {
            $('.list__even li a.active').classList.remove('active')
            it.classList.add('active')
        })
    }
}

// Scroll
function scrollEven() {
    let lastScrollTop = 0;

    const header = $('.header__even')
    const topUp = $('.top__even')

    // Top up
    topUp.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })

    // Scroll header changed background
    window.addEventListener('scroll', () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;

        if (st > lastScrollTop){
            header.classList.remove('header')
            header.classList.add('hide')
        } else {
            header.classList.remove('hide')
            header.classList.add('header')
            if(st == 0) {
                header.classList.remove('menu-background')
            } else {
                header.classList.add('menu-background')
            }
        }

        if(st > 100) {
            topUp.classList.remove('hide')
        } else {
            topUp.classList.add('hide')
        }
    lastScrollTop = st <= 0 ? 0 : st;
    })
}

// Breen information
function breedInformation() {
    const listBreed = $$('.breeds__even')

    // Breeds click
    for(const breed of listBreed) {
        breed.addEventListener('click', () => {
            const listParagrap = breed.querySelectorAll('p')
            if(breed.classList.contains('show')) {
                for(const paragrap of listParagrap) {
                    paragrap.classList.add('hide')
                }
                breed.classList.remove('show')
            } else {
                for(const paragrap of listParagrap) {
                    paragrap.classList.remove('hide')
                }
                breed.classList.add('show')
            }
        })
    }
}

// Contact see more
function contactSeeMore() {
    const listContactSee = $$('.contact-see__even')

    // Contact see more
    for(const see of listContactSee) {
        see.addEventListener('click', () => {
            const para = see.parentElement.querySelector('.contact-listParagraph__even[index]')
            if(para.classList.contains('paragraph-clamp')) {
                para.classList.remove('paragraph-clamp')
                see.querySelector('.see-more__even').classList.add('hide')
                see.querySelector('.see-less__even').classList.remove('hide')
            } else {
                para.classList.add('paragraph-clamp')
                see.querySelector('.see-less__even').classList.add('hide')
                see.querySelector('.see-more__even').classList.remove('hide')
            }
        })
    }
}

// Testmonial screen
function testimonialScreen() {
    if(screen.width < 740) {
        var swiper = new Swiper(".testimonialSwiper", {
            slidesPerView: 1,
            slidesPerColumn: 2,
            spaceBetween: 30,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
        });
    } else if(screen.width >= 740 && screen.width <= 1023) {
        var swiper = new Swiper(".testimonialSwiper", {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
        });
    } else {
        var swiper = new Swiper(".testimonialSwiper", {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 30,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
        });
    }
}

// Filter location
function filterBreedLocation() {
    const locationMenu = $$('.location__even')
    const breedItem = $$('.all')
    const buttonLoadMore = $('.load-more__even')
    const notItem = $('.not-item__even')

    if(breedItem.length <= 12) {
        buttonLoadMore.style.display = "none"
    }

    for(const loca of locationMenu) {
        loca.addEventListener('click', () => {
            for(const lmenu of locationMenu) {
                lmenu.classList.remove('active')
            }
            loca.classList.add('active')

            let count = 0;
            for(const breed of breedItem) {
                if(breed.classList.contains(loca.attributes.id.value)) {
                    breed.style.transform = "scale(1)"
                    setTimeout(() => {
                        breed.style.display = "block"
                    }, 500);
                    count++;
                } else {
                    breed.style.transform = "scale(0)"
                    setTimeout(() => {
                        breed.style.display = "none"
                    }, 500);
                }
            }
            if(count <= 12) {
                buttonLoadMore.style.display = "none"
                if(count == 0) {
                    notItem.classList.remove('hide')
                } else {
                    notItem.classList.add('hide')
                }
            }
        })
    }
}

// Swiper image of breed information
function swiperImageBreed() {
    var swiper = new Swiper(".breed-info-swiper__even", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".breed-info-swiper2__even", {
        loop: true,
        spaceBetween: 10,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        thumbs: {
        swiper: swiper,
        },
    });
    var swiper3 = new Swiper(".history-swiper__even", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
}

// Breed traits show information
function breedTraitsShow() {
    const listBreedTraitsShow = $$('.breed-traits-show__even')
    const listBreedTraitsInfo = $$('.breed-traits-info__even')

    for(const [index, value] of listBreedTraitsShow.entries()) {
        value.addEventListener('click', () => {
            const plus = value.querySelector('.icon-plus__even')
            const minus = value.querySelector('.icon-minus__even')

            let check = true;
            if(plus.classList.contains('hide')) {
                check = false
            }

            if(check) {
                plus.classList.add('hide')
                minus.classList.remove('hide')
                listBreedTraitsInfo[index].classList.remove('hide')
            } else {
                minus.classList.add('hide')
                plus.classList.remove('hide')
                listBreedTraitsInfo[index].classList.add('hide')
            }
        })
    }
}

// Load trait
function loadTrait() {
    const nav = $('.breed-traits-nav__even.active')
    const listBreedTraitItem = $$('.trait-all')

    for(const item of listBreedTraitItem) {
        if(item.classList.contains(nav.attributes.id.value)) {
            item.style.transform = "scale(1)"
            setTimeout(() => {
                item.style.display = "block"
            }, 300);
        } else {
            item.style.transform = "scale(0)"
            setTimeout(() => {
                item.style.display = "none"
            }, 300);
        }
    }
}

// Filter traits
function filterBreedTraits() {
    const listBreedTraitsNav = $$('.breed-traits-nav__even')
    const listBreedTraitItem = $$('.trait-all')

    for(const nav of listBreedTraitsNav) {
        nav.addEventListener('click', () => {
            $('.breed-traits-nav__even.active').classList.remove('active')

            nav.classList.add('active')

            for(const item of listBreedTraitItem) {
                if(item.classList.contains(nav.attributes.id.value)) {
                    item.style.transform = "scale(1)"
                    setTimeout(() => {
                        item.style.display = "block"
                    }, 300);
                } else {
                    item.style.transform = "scale(0)"
                    setTimeout(() => {
                        item.style.display = "none"
                    }, 300);
                }
            }
        })
    }
}

// About breed read more and read less
function aboutBreedRead() {
    const listBtn = $$('.about-breed-more__even')
    const listFader = $$('.about-breed-fader__even')
    const listParagraph = $$('.about-breed-paragraph__even')

    for(const [index, value] of listBtn.entries()) {
        value.addEventListener('click', () => {
            if(value.classList.contains('read-more')) {
                value.classList.remove('read-more')
                value.innerHTML = "Read less"
                listFader[index].classList.add('hide')
                listParagraph[index].classList.remove('about-breed__text-less')
            } else {
                value.classList.add('read-more')
                value.innerHTML = "Read more"
                listParagraph[index].classList.add('about-breed__text-less')
                listFader[index].classList.remove('hide')
            }
        })
    }
}