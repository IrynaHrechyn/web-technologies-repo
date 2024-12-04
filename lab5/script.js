const catalogContainer = document.getElementById('catalog-container');
const homeLink = document.getElementById('home-link');
const catalogLink = document.getElementById('catalog-link');

function fetchJSON(file, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', file, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.onerror = function () {
        console.error(`Не вдалося завантажити файл: ${file}`);
    };
    xhr.send();
}

function renderCategories(categories) {
    catalogContainer.innerHTML = '';
    categories.forEach(category => {
        const categoryEl = document.createElement('div');
        categoryEl.classList.add('category');
        categoryEl.innerHTML = `
            <h3>${category.name}</h3>
            <p>${category.notes}</p>
        `;
        categoryEl.addEventListener('click', () => loadCategoryItems(category.shortname));
        catalogContainer.appendChild(categoryEl);
    });

    const specialsLink = document.createElement('div');
    specialsLink.classList.add('category');
    specialsLink.innerHTML = `
        <h3>Specials</h3>
        <p>Спеціальні пропозиції</p>
    `;
    specialsLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadRandomCategory(categories);
    });
    catalogContainer.appendChild(specialsLink);
}

function loadCategories() {
    fetchJSON('src/categories.json', renderCategories);
}

function loadCategoryItems(shortname) {
    fetchJSON(`src/${shortname}.json`, items => {
        catalogContainer.innerHTML = '';
        items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.classList.add('category');
            itemEl.innerHTML = `
                <img src="https://placehold.co/200x200" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description || 'Опис відсутній.'}</p>
                <p><strong>${item.price}</strong></p>
            `;
            catalogContainer.appendChild(itemEl);
        });
    });
}

function loadRandomCategory(categories) {
    const randomIndex = Math.floor(Math.random() * categories.length);
    const randomCategory = categories[randomIndex];
    loadCategoryItems(randomCategory.shortname);
}

homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    catalogContainer.innerHTML = '<p>Ласкаво просимо на головну сторінку!</p>';
});

catalogLink.addEventListener('click', (e) => {
    e.preventDefault();
    loadCategories();
});

catalogContainer.innerHTML = '<p>Ласкаво просимо на головну сторінку!</p>';
