const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const cocktailList = document.getElementById('cocktailList');

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

searchBtn.addEventListener('click', fetchCocktails);

function saveToLocalStorage(cocktailName) {
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (!searchHistory.includes(cocktailName)) {
        searchHistory.push(cocktailName);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
}

function loadSearchHistory() {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (searchHistory.length > 0) {
        const historyContainer = document.createElement('div');
        historyContainer.innerHTML = `
            <h3>Historial de búsquedas</h3>
            <ul id="searchHistoryList">
                ${searchHistory.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        document.body.appendChild(historyContainer);
    }
}

async function fetchCocktails() {
    const query = searchInput.value;
    if (query === '') {
        alert('Introduce un nombre o ingrediente');
        return;
    }

    saveToLocalStorage(query);

    try {
        const response = await fetch(`${API_URL}${query}`);
        const data = await response.json();

        if (data.drinks) {
            displayCocktails(data.drinks);
        } else {
            cocktailList.innerHTML = '<p>No se encontraron cócteles.</p>';
        }
    } catch (error) {
        console.error('Error al obtener los cócteles:', error);
    }
}

function displayCocktails(drinks) {
    cocktailList.innerHTML = '';

    drinks.forEach(drink => {
        const card = document.createElement('div');
        card.classList.add('cocktail-card');

        card.innerHTML = `
            <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" class="cocktail-img">
            <h3>${drink.strDrink}</h3>
            <button onclick="viewCocktail('${drink.idDrink}')">Ver receta</button>
        `;
        cocktailList.appendChild(card);
    });
}

async function viewCocktail(id) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        const cocktail = data.drinks[0];
        showRecipe(cocktail);
    } catch (error) {
        console.error('Error al obtener la receta:', error);
    }
}

function showRecipe(cocktail) {
    cocktailList.innerHTML = '';

    const recipe = document.createElement('div');
    recipe.classList.add('cocktail-recipe');

    recipe.innerHTML = `
        <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
        <h2>${cocktail.strDrink}</h2>
        <p><strong>Categoría:</strong> ${cocktail.strCategory}</p>
        <p><strong>Tipo:</strong> ${cocktail.strAlcoholic}</p>
        <p><strong>Vaso:</strong> ${cocktail.strGlass}</p>
        <h3>Ingredientes:</h3>
        <ul>
            ${getIngredientsList(cocktail).map(ing => `<li>${ing}</li>`).join('')}
        </ul>
        <p><strong>Instrucciones:</strong> ${cocktail.strInstructions}</p>
        <button onclick="goBack()">Volver a la búsqueda</button>
    `;
    cocktailList.appendChild(recipe);
}

function getIngredientsList(cocktail) {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
        let ingredient = cocktail[`strIngredient${i}`];
        let measure = cocktail[`strMeasure${i}`];
        if (ingredient) ingredients.push(`${measure || ''} ${ingredient}`);
    }
    return ingredients;
}

function goBack() {
    fetchCocktails();
}

document.addEventListener('DOMContentLoaded', loadSearchHistory);
