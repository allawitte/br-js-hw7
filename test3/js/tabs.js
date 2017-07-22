const articles = document.querySelectorAll('.tabs-content article');
const tabsBlock = document.querySelector('.tabs-nav');
const FIRSTaRTICLE = 0;
const switchFunctions = [];
var tab = tabsBlock.firstElementChild.cloneNode();


tabsBlock.firstElementChild.remove();

for (let i = 1; i < articles.length; i++) {
    articles[i].classList.add('hidden');
}

for (let i = 0; i < articles.length; i++) {
    let a = document.createElement('a');
    a.classList.add(articles[i].dataset.tabIcon);
    a.textContent = articles[i].dataset.tabTitle;
    a.classList.add('fa');
    tab.appendChild(a);
    if (i === FIRSTaRTICLE) {
        tab.classList.add('ui-tabs-active');
    }
    tabsBlock.appendChild(tab);
    tab = tab.cloneNode();
    tab.classList.remove('ui-tabs-active');
}

for (let i = 0; i < articles.length; i++) {
    let current = i;
    let func = function (event) {
        let tabs = tabsBlock.children;
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('ui-tabs-active');
        }
        for (let k = 0; k < articles.length; k++) {
            articles[k].classList.add('hidden');
        }
        tabs[current].classList.add('ui-tabs-active');
        articles[current].classList.remove('hidden');
    };
    switchFunctions.push(func);

}

for (let i = 0; i < tabsBlock.children.length; i++) {
    tabsBlock.children[i].addEventListener('click', switchFunctions[i]);
}
/**
 * Created by Alla on 7/21/2017.
 */
