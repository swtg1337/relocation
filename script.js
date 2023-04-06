window.addEventListener("load", () => {
    class MenuCard {
        constructor(href, src, title, parentSelector){
            this.href = href;
            this.src = src;
            this.title = title;
            this.parent = document.querySelector(parentSelector);
        }
        
        render() {
            const element = document.createElement('div');
            element.classList.add ('country_item');
            element.innerHTML = `
                <a href=${this.href}><img class="country_img" src=${this.src} alt="">
                    <h4 class="country_title">${this.title}</h4>
                </a>
            `;
            this.parent.append(element);
        }
    }
    
    new MenuCard(
        "/georgia.html",
        "./img/georgia.png",
        "Georgia",
        '.country'
    ).render();

    new MenuCard(
        "/kazakhstan.html",
        "./img/kazakhstan.png",
        "Kazakhstan",
        '.country'
    ).render();

    new MenuCard(
        "/romania.html",
        "./img/romania.png",
        "Romania",
        '.country'
    ).render();

    new MenuCard(
        "/turkey.html",
        "./img/turkey.png",
        "Turkey",
        '.country'
    ).render();

    new MenuCard(
        "/armenia.html",
        "./img/armenia.png",
        "Armenia",
        '.country'
    ).render();

    new MenuCard(
        "/china.html",
        "./img/china.png",
        "China",
        '.country'
    ).render();

}); 

