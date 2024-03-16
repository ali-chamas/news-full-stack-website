const singlePage = $("#single-page");
const urlParams = new URLSearchParams(window.location.search);
const newsID = urlParams.get("id");

let singleNews = {};

const getSignleNews = async () => {
  try {
    const res = await fetch(`${apiURL}/getSingleNews.php?id=${newsID}`);
    const data = await res.json();
    console.log(data);
    singleNews = data;
    generate(singleNews);
  } catch (error) {
    console.log(error);
  }
};

const generate = async (news) => {
  singlePage.html(`<div class="flex column align-center gap">
    <h2>${singleNews.title}</h2>
    <img
      src="${singleNews.image}"
      alt=""
    />
    <p>
     ${singleNews.content}
    </p>
  </div>`);
};

getSignleNews();
