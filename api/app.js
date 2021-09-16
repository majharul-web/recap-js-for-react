const searchText = document.getElementById('search');
const searchBtn = document.getElementById('search-button');
const errorDiv = document.getElementById('error');

const container = document.getElementById('container');

searchBtn.addEventListener('click', () => {
  const searchValue = searchText.value;

  if (searchValue === '') {
    errorDiv.innerHTML = `
    <h2 class="text-center bg-danger text-white p-2">Please type a Food Name</h2>
    `;
    return;
  }

  container.textContent = '';
  errorDiv.innerHTML = '';
  searchText.value = '';
  fetchData(searchValue);
});

const fetchData = async (key) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`;

  const res = await fetch(url);
  const data = await res.json();
  showUi(data.meals);
};

const showUi = (data) => {
  // console.log(data);

  data.forEach((food) => {
    const { strMeal, strMealThumb, strInstructions } = food;
    container.innerHTML += `
        <div class="col">
        <div class="card">
          <img src="${strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${strMeal}</h5>
            <p class="card-text">
            ${strInstructions.slice(0, 150)}
            </p>
          </div>
        </div>
      </div>
    `;
  });
};
