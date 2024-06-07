const users = [
  {
    role: 'guest',
    name: 'Гість',
  },
  {
    role: 'admin',
    name: 'nagibator228',
  },
  {
    role: 'user',
    name: 'skuf1488',
  },
];
let currentUser = '';

let postData = [
  // {
  //   publicationTheme: 'Тема публикации 1',
  //   publicationText:
  //     'Текст публикации 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //   id: '0',
  //   comments: [],
  // },
  // {
  //   publicationTheme: 'Тема публикации 2',
  //   publicationText:
  //     'Текст публикации 2. Etiam felis eros, lobortis in efficitur sed, scelerisque vel quam.',
  //   id: '1',
  //   comments: [],
  // },
];

createHeader();
renderPosts();
changeButtons('guest');
function createHeader() {
  const headerHTML = `
        <div class="header">
             <button id="create-theme-btn" class="create-theme-btn">Додати тему</button>
        </div>
    `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.querySelector('.create-theme-btn').addEventListener('click', () => {
    const newPost = getPostData();
    getLocalSorage();
    if (newPost) {
      postData.push(newPost);
      setLocalSorage();
      renderPosts();
    }
  });
  const selectMarkup =
    `<select name="example" class="select-user"> ` +
    users
      .map(user => {
        return `<option value="${user.name}">${user.name} (${user.role})</option>`;
      })
      .join('') +
    `</select>`;

  document
    .querySelector('.header')
    .insertAdjacentHTML('afterbegin', selectMarkup);

  const userSelect = document.querySelector('.select-user');

  document.querySelector('.select-user').addEventListener('change', evt => {
    currentUser = users.find(user => user.name == userSelect.value);
    changeButtons(currentUser.role);
  });
}

async function renderPosts() {
  getLocalSorage();
  document.getElementById('posts-container').innerHTML = '';
  postData.forEach(item => {
    createPostBlock(item.publicationTheme, item.publicationText, item.id);
  });
  renderComments();
  addEventListeners();
}

async function renderComments() {
  document.querySelectorAll('.post').forEach(postContainer => {
    let newMarkup = '';
    postData
      .find(post => post.id == postContainer.getAttribute('data-index'))
      .comments.forEach(comment => {
        newMarkup += `<li class = 'comment'>${comment}<li>`;
      });
    postContainer.querySelector('.comments').innerHTML = newMarkup;
  });
}

function addEventListeners() {
  document.querySelectorAll('.post').forEach(postContainer => {
    postContainer
      .querySelector('.post-delete-btn')
      .addEventListener('click', evt => {
        const parentNode = evt.currentTarget.parentNode.parentNode;
        postData = JSON.parse(localStorage.getItem('posts')).filter(
          el => el.id != parentNode.getAttribute('data-index')
        );
        setLocalSorage();
        parentNode.remove();
      });

    postContainer
      .querySelector('.post-edit-btn')
      .addEventListener('click', evt => {
        getLocalSorage();
        const id =
          evt.currentTarget.parentNode.parentNode.getAttribute('data-index');
        let post = postData.find(post => post.id === id);
        const updatedPost = getPostData(
          post.publicationTheme,
          post.publicationText
        );
        if (post) {
          post.publicationText = updatedPost.publicationText;
          post.publicationTheme = updatedPost.publicationTheme;
          setLocalSorage();
          renderPosts();
        }
      });
    postContainer
      .querySelector('.post-comment-btn')
      .addEventListener('click', evt => {
        getLocalSorage();
        const parentNode = evt.currentTarget.parentNode.parentNode;
        const commentText = prompt('Введите ваш комментарий:');
        if (commentText) {
          const post = postData.find(
            post => post.id === parentNode.getAttribute('data-index')
          );
          post.comments.push(commentText);
          setLocalSorage();
          renderPosts();
        }
      });
  });
}

function changeButtons(curRole) {
  if (curRole == 'guest') {
    document.querySelectorAll('button').forEach(button => {
      button.setAttribute('disabled', 'true');
    });
  } else if (curRole == 'admin') {
    document.querySelectorAll('button').forEach(button => {
      button.removeAttribute('disabled');
    });
  } else if (curRole == 'user') {
    document.querySelectorAll('button').forEach(button => {
      button.setAttribute('disabled', 'true');
    });
    document.querySelectorAll('.post-comment-btn').forEach(button => {
      button.removeAttribute('disabled');
    });
  }
}

function createPostBlock(title, content, index) {
  const postHTML = `
        <div class="post" data-index="${index}">
            <h2 class="post-title">${title}</h2>
            <p class="post-content">${content}</p>
            <div class="post-actions">
                <button class="post-delete-btn">Видалити</button>
                <button class="post-edit-btn">Редагувати</button>
                <button class="post-comment-btn">Коментувати</button>
            </div>
            <ul class = 'comments'>
            </ul>
        </div>
    `;
  const postsContainer = document.getElementById('posts-container');
  postsContainer.insertAdjacentHTML('beforeend', postHTML);
}

function getPostData(defaultTitle = '', defaultContent = '') {
  const title = prompt('Введите тему публикации:', defaultTitle);
  const content = prompt('Введите текст публикации:', defaultContent);
  if (title !== null && content !== null) {
    const newId =
      postData.length != 0
        ? toString(parseInt(postData[postData.length - 1].id) + 1)
        : '0';
    return {
      publicationTheme: title,
      publicationText: content,
      id: newId,
      comments: [],
    };
  }
  return;
}

function setLocalSorage() {
  localStorage.setItem('posts', JSON.stringify(postData));
}

function getLocalSorage() {
  postData = JSON.parse(localStorage.getItem('posts'));
}
