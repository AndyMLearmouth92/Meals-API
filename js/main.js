//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getMeal)

function getMeal(){
  let meal = document.querySelector('input').value
  // const choice = document.querySelector('input').value
  const url = `https://themealdb.com/api/json/v1/1/search.php?s=${meal}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.meals[0])
        document.querySelector('#name').innerText = data.meals[0].strMeal
        document.querySelector('img').src = data.meals[0].strMealThumb
        document.querySelector('#instructions').innerText = data.meals[0].strInstructions
        document.querySelector('#ing1').innerText = data.meals[0].strIngredient1
        document.querySelector('#ing2').innerText = data.meals[0].strIngredient2
        document.querySelector('#ing3').innerText = data.meals[0].strIngredient3
        document.querySelector('#ing4').innerText = data.meals[0].strIngredient4
        document.querySelector('#ing5').innerText = data.meals[0].strIngredient5
        document.querySelector('#ing6').innerText = data.meals[0].strIngredient6
        document.querySelector('#ing7').innerText = data.meals[0].strIngredient7
        document.querySelector('#ing8').innerText = data.meals[0].strIngredient8
        document.querySelector('#ing9').innerText = data.meals[0].strIngredient9
        document.querySelector('#ing10').innerText = data.meals[0].strIngredient10
        document.querySelector('#ing11').innerText = data.meals[0].strIngredient11
        document.querySelector('#ing12').innerText = data.meals[0].strIngredient12
        document.querySelector('#type').innerText = data.meals[0].strArea

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}