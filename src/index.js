import './scss/styles.scss';

const burgerSwitcher = (event) => {
    const burger = event.target.closest('.header__burger');
    const burgerInfo = burger.dataset.info;

    switch (burgerInfo) {
        case 'open':
            burger.classList.add('opened');
            burger.dataset.info = 'close';
            headerSwitcher('open');
            break;
        case 'close':
            burger.classList.remove('opened');
            burger.dataset.info = 'open';
            headerSwitcher('close');
            break;
    }
}

const headerSwitcher = (type) => {
    const header = document.querySelector('.header');
    const headerNavigation = document.querySelector('.header__nav');
    const headerLogo = header.querySelector('.body__logo');

    switch (type) {
        case 'open':
            headerLogo.style.display = 'none';
            headerNavigation.style.display = 'flex';
            break;
        case 'close':
            headerLogo.style.display = 'block';
            headerNavigation.style.display = 'none';
    }
}

document.querySelector('.header__burger').addEventListener('click', burgerSwitcher);
