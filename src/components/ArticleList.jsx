import { useState, useEffect } from "react";

export default function ArticleSelector() {
    // Stato per la lista articoli
    const [articles, setArticles] = useState([]);



    // hook per recuperare dati
    useEffect(() => {
        fetch("http://localhost:5000/posts")
            .then(response => {

                return response.json();
            })
            .then(data => setArticles(data));

    }, []);

    return (
        <>
            <h1>Lista Articoli</h1>


            <div>
                {articles.map((article) => (
                    <div key={article.id}>
                        <h2>Titolo: {article.title}</h2>
                        <img src={article.image} alt="" />
                        <label>tags: {article.tags}</label>
                        <p>Contenuto: {article.content}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
