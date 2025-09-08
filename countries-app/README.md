## I created a frontend web page using HTML, CSS, and JavaScript.
The page fetches data from the REST Countries API [API](https://restcountries.com/v3.1/all?fields=name,capital,flags) and displays:

- The total number of countries

- Each country’s name

- Its capital city and Its flag

The data is sorted alphabetically (A → Z) by country name.
<br>
I used JavaScript DOM manipulation to dynamically create **li** elements and display them in a list.

 

## Questions & Short Answers

Q). What is the purpose of XMLHttpRequest in JavaScript? <br>
→ To send requests to a server and receive data without reloading the page (AJAX).

Q). Why do we use JSON.parse(xhr.responseText) in AJAX? <br>
→ To convert JSON string from the server into a JavaScript object/array.

Q). What is the role of innerHTML = "" before appending new list items? <br>
→ To clear old content and avoid duplicate entries.

Q). Explain the difference between textContent and innerHTML. <br>
→ textContent: inserts only text. <br>
→ innerHTML: inserts text + HTML markup.

Q). How do we dynamically create HTML elements in JavaScript? <br>
→ Using document.createElement('li') and then appending with appendChild().

Q). What does localeCompare() do in JavaScript? <br>
→ Compares two strings and returns a number (-1, 0, 1) for sorting alphabetically.

Q). Why do we use template literals (`${}`) in JS instead of string concatenation? <br>
→ Easier to embed variables inside strings and more readable.

Q). How can you display an image dynamically using data from an API (like country flags)? <br>
→ By creating <img> with document.createElement('img') and setting src = API flag URL.

Q). What is the difference between synchronous and asynchronous code in JavaScript? <br>
→ Synchronous: executes line by line (blocking). <br>
→ Asynchronous: doesn’t block, continues running other code (e.g., AJAX, setTimeout). <br>

Q). Why innerHTML instead of textContent? <br>
→ Because I wanted to include an <img> tag for the flag, and textContent would just show it as plain text.

Q). What does this line mean?
```
ele.capital ? ele.capital[0] : "Doesn't Exist"
```

→ It checks if the country has a capital. If yes, it shows the first capital (some countries have multiple). Otherwise, it prints "Doesn't Exist".


Q). How did you sort the country names? <br>
→ By using:
```
data.sort((a, b) => a.name.common.localeCompare(b.name.common));
```


ele.name.common → country name (like India).

 ele.capital ? ele.capital[0] = take the first capital : "N/A" →

 If capital exists → show it (like New Delhi).

 If capital doesn’t exist → show N/A.


 Sorting the country name from (A → Z)
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));
 