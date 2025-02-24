import { useState, useEffect } from "react";
import axios from "axios";

const initialFormData = {
    name: "",
    image: "",
    ingredients: [],
    content: ""
};

export default function ArticleList() {
    const [articles, setArticles] = useState([]);
    const [formData, setFormData] = useState(initialFormData);

    function fetchArticles() {
        axios
            .get("http://localhost:5000/posts")
            .then((res) => {
                console.log("Risposta ricevuta dal server:", res.data);
                setArticles(res.data);
            })
            .catch((err) => console.error("Errore nel recupero dei post:", err));
    }

    useEffect(fetchArticles, []);

    function handleFormData(e) {
        const value = e.target.name === "ingredients" ? e.target.value : e.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();


        axios
            .post("http://localhost:5000/posts", formData)
            .then((res) => {
                setArticles((prevArticles) => [...prevArticles, res.data]);

            })
            .catch((err) => console.log("Errore nella creazione del post:", err));
        setFormData(initialFormData);
    }

    return (
        <>
            <h1>Lista Articoli</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleFormData} placeholder="Titolo" />
                <input type="text" name="image" value={formData.image} onChange={handleFormData} placeholder="URL Immagine" />
                <input type="text" name="ingredients" value={formData.ingredients} onChange={handleFormData} placeholder="Tags (separati da virgola)" />
                <textarea name="content" value={formData.content} onChange={handleFormData} placeholder="Contenuto"></textarea>
                <button type="submit">Aggiungi</button>
            </form>

            <div>
                {articles.map((article) => (
                    <div key={article.id}>
                        <h2>{article.name}</h2>
                        <img src={article.image} alt={article.name} />
                        <p>{article.content}</p>
                        {article.ingredients && (
                            <label>
                                {Array.isArray(article.ingredients)
                                    ? article.ingredients.join(", ")
                                    : article.ingredients}
                            </label>
                        )}
                    </div>
                ))}
            </div>

        </>
    );
}