const axios = require('axios');
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Налаштування інтерсепторів для логування
axios.interceptors.request.use(request => {
  console.log(`➡️ [Request] ${request.method.toUpperCase()} ${request.url}`, request.data);
  return request;
}, error => {
  console.error('❌ [Request Error]', error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(`⬅️ [Response] ${response.status} ${response.config.url}`, response.data);
  return response;
}, error => {
  console.error('❌ [Response Error]', error);
  return Promise.reject(error);
});

// Ф-ція для виконання тестових запитів
const runTests = async () => {
  try {
    // 1. GET: Отримання списку постів
    const getPostsResponse = await axios.get(`${BASE_URL}/posts`);
    console.log('GET /posts Status:', getPostsResponse.status);
    console.log('GET /posts Data Length:', getPostsResponse.data.length);
    if (getPostsResponse.status === 200 && Array.isArray(getPostsResponse.data)) {
      console.log('GET /posts - Passed');
    } else {
      console.error('GET /posts - Failed');
    }

    // 2. GET: Отримання конкретного поста
    const postId = 1;
    const getPostResponse = await axios.get(`${BASE_URL}/posts/${postId}`);
    console.log('GET /posts/:id Status:', getPostResponse.status);
    console.log('GET /posts/:id Data:', getPostResponse.data);
    if (
      getPostResponse.status === 200 &&
      getPostResponse.data.id === postId
    ) {
      console.log('GET /posts/:id - Passed');
    } else {
      console.error('GET /posts/:id - Failed');
    }

    // 3. POST: Створення нового поста
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const postPostResponse = await axios.post(`${BASE_URL}/posts`, newPost);
    console.log('POST /posts Status:', postPostResponse.status);
    console.log('POST /posts Data:', postPostResponse.data);
    if (
      postPostResponse.status === 201 &&
      postPostResponse.data.title === newPost.title
    ) {
      console.log('POST /posts - Passed');
    } else {
      console.error('POST /posts - Failed');
    }

    // 4. GET: Отримання коментарів для поста
    const getCommentsResponse = await axios.get(
      `${BASE_URL}/posts/${postId}/comments`
    );
    console.log('GET /posts/:id/comments Status:', getCommentsResponse.status);
    console.log('GET /posts/:id/comments Data Length:', getCommentsResponse.data.length);
    if (
      getCommentsResponse.status === 200 &&
      Array.isArray(getCommentsResponse.data)
    ) {
      console.log('GET /posts/:id/comments - Passed');
    } else {
      console.error('GET /posts/:id/comments - Failed');
    }

    // 5. POST: Створення нового коментаря
    const newComment = {
      postId: 1,
      name: 'test name',
      email: 'test@example.com',
      body: 'test body',
    };
    const postCommentResponse = await axios.post(
      `${BASE_URL}/comments`,
      newComment
    );
    console.log('POST /comments Status:', postCommentResponse.status);
    console.log('POST /comments Data:', postCommentResponse.data);
    if (
      postCommentResponse.status === 201 &&
      postCommentResponse.data.body === newComment.body
    ) {
      console.log('POST /comments - Passed');
    } else {
      console.error('POST /comments - Failed');
    }
  } catch (error) {
    console.error('Test failed:', error.message);
  }
};

// Запуск
runTests();