const searchBar = document.getElementById('search-bar');

const fruits = ['Apple','Apricot', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Ice cream bean', 'Jackfruit', 'Kiwi', 'Lemon', 'Mango', 'Nectarine', 'Orange', 'Pineapple', 'Quince', 'Raspberry', 'Strawberry', 'Tomato', 'Ugli fruit', 'Vanilla', 'Watermelon', 'Xigua', 'Yellow Passionfruit', 'Zucchini'];

function search(input) {
  return fruits.filter(fruit => fruit.toLowerCase().includes(input.toLowerCase()));
}
//calls from keyup event listener with the search bar value as its argument 
//filter method to return new arrays, toLowerCase method to convert input into lowercase 

// Adding an event listener to the searchBar that triggers whenever a key is released (a 'keyup' event).
searchBar.addEventListener('keyup', (e) => {

    // Invoking the search function with the current value of the searchBar as the argument. 
    // The results are the array of fruits that contain the user's input.
    const results = search(e.target.value);
  
    // Get the element with the id 'results' from the HTML, this will be used to display the search results.
    const resultsElement = document.getElementById('results');
  
    // Clear the existing results, if any, to make room for the new results.
    resultsElement.innerHTML = '';
  
    // Loop through the array of results.
    results.forEach(result => {
      
      // Create a new div for each result.
      const resultElement = document.createElement('div');
  
      // Set the text content of the new div to be the result string (the fruit name).
      resultElement.textContent = result;
      
      // Add an event listener to the result div that triggers when the mouse pointer is over it.
      // Changes the background color of the result div to 'lightgray' to highlight it.
      resultElement.addEventListener('mouseover', () => {
        resultElement.style.backgroundColor = 'lightgray';
      });
  
      // Add another event listener to the result div that triggers when the mouse pointer leaves it.
      // Clears the background color back to the default to un-highlight it.
      resultElement.addEventListener('mouseout', () => {
        resultElement.style.backgroundColor = '';
      });
  
      // Add a third event listener to the result div that triggers when it is clicked.
      // Populates the searchBar with the clicked fruit and clears the results list.
      resultElement.addEventListener('click', () => {
        searchBar.value = result; // Populate the searchBar
        resultsElement.innerHTML = ''; // Clear the results list
      });
  
      // Finally, add the result div to the results list in the HTML.
      resultsElement.appendChild(resultElement);
    });
  });
  