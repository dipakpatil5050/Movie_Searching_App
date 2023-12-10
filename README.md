# API Fetching Project in React.js

## Movie API fetching from omdb API 

```javascript
const fetchMovieData = async () => {
  try {
    setLoading(true);
    const res = await fetch(
      `https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`
    );
    const data = await res.json();
    setAllMovieData(data.Search);
    console.log(data.Search);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};
```
