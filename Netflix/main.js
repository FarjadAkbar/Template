const tabItem=document.querySelectorAll('.tab-item');
const tabContentItem=document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e){
    removeBorder();
    removeShow();

    this.classList.add('tab-border');
    const tabContentItem=document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItem.forEach(item=>item.classList.remove('tab-border'));
}
function removeShow(){
    tabContentItem.forEach(item=>item.classList.remove('show'));
}

//Listen for tab click
tabItem.forEach(item=> item.addEventListener('click',selectItem));