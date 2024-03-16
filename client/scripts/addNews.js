const openPopup = $("#open-popup");
const popup = $("#popup");
const titleInput = $("#title-input");
const contentInput = $("#content-input");
const imageInput = $("#image-input");
const addBtn = $("#add-btn");
const closeBtn = $("#close-btn");

const uploadedNews = {
  title: "",
  content: "",
  image: "",
};

const addNews = async () => {
  const news = new FormData();
  news.append("title", uploadedNews.title);
  news.append("content", uploadedNews.content);
  news.append("image", uploadedNews.image);

  try {
    const res = await fetch(
      `http://localhost/news-website/server/addNews.php`,
      {
        method: "POST",
        body: news,
      }
    );
    const data = await res.json();
    console.log(data);
    await app();
  } catch (error) {
    console.log(error);
  }
};

const open = () => popup.removeClass("hidden");
const close = () => popup.addClass("hidden");

openPopup.click(open);
closeBtn.click(close);

titleInput.change((e) => (uploadedNews.title = e.target.value));
contentInput.change((e) => (uploadedNews.content = e.target.value));
imageInput.change((e) => (uploadedNews.image = e.target.value));

addBtn.click(addNews);
