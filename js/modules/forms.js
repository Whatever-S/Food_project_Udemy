import {openModal, closeModalWindow} from './modal';
import {postData} from '../services/sevrices';

function forms(formSelector, modalTimerId){
    // Forms
    const message = {
        loading: "img/form/spinner.svg",
        success: "Thanks! We will call you ASAP!",
        failed: "Opps, something gone wrong..."
    };

    const forms = document.querySelectorAll(formSelector);


    forms.forEach(item =>{
        bindPostData(item);
    });

    

    function bindPostData(form){
        form.addEventListener('submit',(e)=>{
            e.preventDefault();

            const sendStatus = document.createElement("img");
            sendStatus.src = message.loading;
            sendStatus.style.cssText = `
                display:block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', sendStatus);
            
            const formData = new FormData(form);//collecting all data from form
            
            /*transform form-data to object*/
            const object = {};
            formData.forEach( function(value, key){
                object[key] = value;
            });  

            const json = JSON.stringify(Object.fromEntries(formData.entries())); //transform form-data to JSON

            postData('http://localhost:3000/requests', json)//send data from form to server
            .then(data =>{
                console.log(data);
                showThanksModal(message.success);
                sendStatus.remove();
            }).catch(() =>{
                showThanksModal(message.failed);
            }).finally(()=>{
                form.reset();
            });
        });
    }

    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.remove('show');
        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
            </div>
            `;
        document.querySelector('.modal').append(thanksModal);

        setTimeout(()=>{
            thanksModal.remove();
            prevModalDialog.classList.add('show');                
            prevModalDialog.classList.remove('hide');
            closeModalWindow('.modal');
        }, 4000);
    }

    /* fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => console.log(res)); */
}

export default forms;