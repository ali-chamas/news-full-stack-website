const newsContainer = $("#news-container");

const apiURL = "http://localhost/news-website/server";

let news = [];

const getNews = async () => {
  const res = await fetch(`${apiURL}/getNews.php`);
  const data = await res.json();
  news = data.news;
};

const generateNews = () => {
  newsContainer.html("");
  news.forEach((n) => {
    const htmlDiv = ` <a href="/client/pages/singleNews.html?id=${n.id}" class="news-card flex column align-center gap">
        <img
          src="${n.image}"
          alt=""
        />
        <h2>${n.title}</h2>
      </a>`;
    newsContainer.append(htmlDiv);
  });
};

const app = async () => {
  await getNews();
  generateNews();
};

app();
