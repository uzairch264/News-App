import { API_KEY, country, endpoint } from "./config";

export default async function services(category = "general") {
  const newsArticle = await fetch(`${endpoint}?country=${country}&category=${category}`, {
    headers: {
      'X-API-KEY': API_KEY
    }
  });
  // const apikey = '34eea4e291d232e4717076c1fbc9d9fa';
  // const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apikey;
  const result = await newsArticle.json();
  const articles = result.articles;
  // return url;
  return articles;
}

//const newsArticle = await fetch(`${endpoint}?category=${category}&lang=en&country=${country}&max=10&apikey=${category}`);
