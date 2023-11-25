export default function () {
  getContentAsidePanel();
}

function gettingDataAsidePanel() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      fetch('/data.json').then((result) => {
        resolve(result.json());
      });
    }, 3000);
  });
}
function gettingImgAsidePanel() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      fetch('/JSON/pictures.json').then((result) => {
        resolve(result.json());
      });
    }, 3000);
  });
}

async function getContentAsidePanel() {
  // topic-hashtags start
  let hashtagListPreloader = document.getElementById('hashtag-list-preloader');
  let hashtagListWrapper = document.getElementById('hashtag-list');

  let asideData = await gettingDataAsidePanel();
  let asideBlogsImg = await gettingImgAsidePanel();

  let topicHashtags;
  let topicTitle;
  for (let itemTopic in asideData.topics) {
    topicTitle = asideData.topics[itemTopic].title;
    topicHashtags = asideData.topics[itemTopic].hashtags;
  }

  hashtagListPreloader.style.display = 'none';
  hashtagListWrapper.style.display = 'block';

  renderHashtagList(topicHashtags);

  const markupTitle = ` <h4 class="hashtag-list-title">${topicTitle}</h4>`;
  document.getElementById('hashtag-list').insertAdjacentHTML('afterBegin', markupTitle);
  // topic-hashtag-end

  // bloggers-start
  let bloggersListPreloader = document.getElementById('bloggers-list-preloader');
  let bloggersListWrapper = document.getElementById('bloggers-list');

  let bloggersTitle;
  let blogsList;
  let blogsListImages = [];

  for (let bloggersItem in asideData.blogs) {
    bloggersTitle = asideData.blogs[bloggersItem].title;
    blogsList = asideData.blogs[bloggersItem].blogs;
  }

  for (let avatar in asideBlogsImg.pictures) {
    blogsListImages.push(asideBlogsImg.pictures[avatar]);
  }
  bloggersListPreloader.style.display = 'none';
  bloggersListWrapper.style.display = 'block';

  const markupTitleBlogs = `<h4 class="bloggers-list-title">${bloggersTitle}</h4>`;
  document.getElementById('bloggers-list').insertAdjacentHTML('afterbegin', markupTitleBlogs);

  for (let blogItem in blogsList) {
    let blog = {};
    let avatar = blogsListImages.find((item) => {
      if(item.userId === blogsList[blogItem].id){
        return item
      }
    })
    
    blog.avatar = avatar.userAvatar;
    blog.id = blogsList[blogItem].id;
    blog.name = blogsList[blogItem].name;
    blog.nikName = blogsList[blogItem].nikName;

    renderBlogs(blog);
  }
  // bloggers-end
}

function renderHashtagList(hashtags) {
  for (let hashtag of hashtags) {
    const markupHashtag = `
                          <li class="hashtag-list-item">
                            <p>${hashtag}</p>
                            <small>2 941 сообщение</small>
                          </li>
                          `;
    document.getElementById('hashtag-list-wrapper').insertAdjacentHTML('beforeend', markupHashtag);
  }
}

function renderBlogs(blog) {
  const markup = `<div class="bloggers-list-item">
                    <div class="blogger-img">
                      <img src="${blog.avatar}" alt="" />
                    </div>
                    <div class="blogger-item-title">
                      <p>${blog.name}</p>
                      <small>${blog.nikName}</small>
                    </div>
                    <div class="blogger-item-btn"><button>Читать</button></div>
                  </div>`;
  document.getElementById('bloggers-list-wrapper').insertAdjacentHTML('beforeend', markup);
}
