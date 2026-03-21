const express = require('express');
const app = express();
app.use(express.json());

let articles = []; // Stockage temporaire en mémoire

// 1. Créer un article (POST)
app.post('/api/articles', (req, res) => {
    const article = { id: articles.length + 1, ...req.body, date: new Date() };
    articles.push(article);
    res.status(201).json({ message: "Article créé !", id: article.id });
});

// 2. Lire tous les articles (GET)
app.get('/api/articles', (req, res) => {
    res.status(200).json(articles);
});

// 3. Lire un article par ID (GET)
app.get('/api/articles/:id', (req, res) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    if (!article) return res.status(404).send("Article non trouvé.");
    res.status(200).json(article);
});

app.listen(3000, () => console.log("Serveur lancé sur le port 3000"));
