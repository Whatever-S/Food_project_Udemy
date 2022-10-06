function closeModalWindow(modalSelector){
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = "";
}

function openModal(modalSelector, modalTimerId){
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = "hidden";
    if (modalTimerId){
        clearInterval(modalTimerId);
    }

    
}

function modal(trigerSelector, modalSelector, modalTimerId) {
    //Modal window
    const modalBtns = document.querySelectorAll(trigerSelector);
    const modalWindow = document.querySelector(modalSelector);

    modalBtns.forEach((btn) =>{
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    modalWindow.addEventListener('click',(e)=>{
        if(e.target === modalWindow || e.target.getAttribute('data-close')== '' )
        closeModalWindow(modalSelector);
    });

    document.addEventListener('keydown',(e) =>{
        if(e.code === 'Escape' && modalWindow.classList.contains('show'))
        closeModalWindow(modalSelector);
    });

    function showModalInTheEnd(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight-1){
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalInTheEnd); 
        }
    }

    window.addEventListener('scroll', showModalInTheEnd);
}

export default modal;
export {closeModalWindow};
export {openModal};