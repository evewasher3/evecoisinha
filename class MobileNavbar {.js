class MobileNavbar {
    constructor() {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active"; 
    
    this.handleClick = this.handleClick.bind();
    }

     handleClick() {
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent () {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

     init() {
        if (this.mobileMenu) {
            this.addClickEvent();
            }
        return this;
     }
    }  

const MobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list l1",
);