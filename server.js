const axios = require('axios');
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
  try {
    const graphqlEndpoint = '*******';  //graphql link
    const query = `
      query {
        posts {
          createdAt
          datePublished
          id
          publishedAt
          slug
          title
          updatedAt
        }
      }
    `;

    const response = await axios.post(graphqlEndpoint, {
      query,
    });

    res.json(response.data.data.posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu çalışıyor. API burada: http://localhost:${port}`);
});
