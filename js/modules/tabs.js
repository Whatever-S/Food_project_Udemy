function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //tabs
    const styleTabs = document.querySelectorAll(tabsSelector),
    styleContent = document.querySelectorAll(tabsContentSelector),
    tabsMenu = document.querySelector(tabsParentSelector);
        

    function hideTabsContent(){
        styleContent.forEach((item)=>{
            item.classList.add('hide');
            item.classList.remove("show", "fade");
        });

        styleTabs.forEach(item =>{
            item.classList.remove(activeClass);
        });
        
    }

    function showTabContent(i = 0){
        styleContent[i].classList.add("show", "fade");
        styleContent[i].classList.remove('hide');

        styleTabs[i].classList.add(activeClass);

    }
    hideTabsContent();
    showTabContent();

    tabsMenu.addEventListener('click', (e) =>{
        if(e.target && e.target.classList.contains(tabsSelector.slice(1))){
            styleTabs.forEach((item,i) =>{
                if(item == e.target){ 
                    hideTabsContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;