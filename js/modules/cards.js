import {getResource} from '../services/sevrices';

function cards(){
    //MenuCards
    class MenuItem {
        constructor(src, alt, title, descr, price, perentSelector, ...classes){
            this.src = src; 
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(perentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH(){
            this.price = Math.round(this.price * this.transfer);
        }

        render(){
            const element = document.createElement('div');
            this.classes.forEach(classElem => element.classList.add(classElem));
            element.innerHTML = 
                `   <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>`;
            this.parent.append(element);
            }
        }

    getResource('http://localhost:3000/menu')
    .then(data =>{
        data.forEach(({img, altimg,title, descr, price})=>{
            new MenuItem(img, altimg,title, descr, price, '.menu .container', "menu__item").render();
        });
    });
}

export default cards;