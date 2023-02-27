import tabs from './modules/tabs';
    import modal from './modules/modal';
    import timer from './modules/timer';
    import cards from './modules/cards';
    import culc from'./modules/culc';
    import slider from './modules/slider';
    import forms from './modules/forms';
    import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () =>{
    const modalTimerId = setTimeout(() =>  openModal( '.modal', modalTimerId), 30000);


    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', Date.parse('2023-10-20'));
    cards();
    culc();
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        currentCounter: 'current'
    });
    forms('form', modalTimerId);
});
