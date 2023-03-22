# Expenses-chart-component
Bar chart component with expenses of each day dynamically added from a JSON file


First, the code selects all HTML elements with class name bar using querySelectorAll() method and assigns them to a constant bar.

Then, the JSON data is fetched using fetch() method and converted to an object using response.json(). The resulting object is then processed using map() method to create an array of amount values from each object in the original JSON data. The maximum value of this new array is calculated using Math.max() method and assigned to maxValue variable.

A for loop iterates through each object in the original JSON data and calculates the height of each bar element using the percentage of its amount value relative to the maxValue variable. The height is set using inline CSS style with style.height. The value attribute of each bar element is also set to the amount value of the corresponding object.

Two event listeners are added to each bar element. The mouseover event listener toggles the class show on the previous sibling element of the bar, which is a span element that displays the amount value of the corresponding object. The click event listener does the same thing.

The current day of the week is calculated using the Date() object and assigned to the day variable. The . selector is used with the querySelector() method to select the bar element of the current day of the week and assign a specific background color to it.

Overall, this code snippet demonstrates how to fetch JSON data using Fetch API and render it in a bar chart format on a web page using JavaScript.
