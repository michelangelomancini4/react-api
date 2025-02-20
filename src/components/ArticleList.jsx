import { useState } from "react";


const initialArticles = [
    { id: 1, title: "ECO NELLA MENTE", categoria: "LETTERATURA ITALIANA", autore: "UMBERTO ECO", contenuto: "“Si nasce sempre sotto il segno sbagliato e stare al mondo in modo dignitoso vuol dire correggere giorno per giorno il proprio oroscopo.”" },
    { id: 2, title: "RELIGIONI", categoria: "LETTERATURA ITALIANA", autore: "MONTALE", contenuto: "“Bisogna andare in Oriente per capire cos'è la religione. Ho inteso veramente il sentimento religioso solo laggiù; la vera sede delle religioni è l'Oriente." },
    { id: 3, title: "IL CORAGGIO", categoria: "LETTERATURA ITALIANA", autore: "FOSCOLO", contenuto: "Il coraggio non deve dar diritti per soverchiare il debole." },
    { id: 4, title: "FELICITA'", categoria: "LETTERATURA ITALIANA", autore: "PASCOLI", contenuto: "“Sarai felice di veder tu solo, non ciò che il volgo vìola con gli occhi, ma delle cose l'ombra lunga, immensa, nel tuo segreto pallido tramonto.”." },
    { id: 5, title: "TIRANNO", categoria: "FILOSOFIA TEDESCA", autore: "NIETZSCHE", contenuto: "“Al nostro istinto più forte, al tiranno che è in noi, non si sottomette solo la nostra ragionevolezza, ma anche la nostra coscienza.”" },
];

export default function ArticleSelector() {

    // stato della lista articoli
    const [articles, setArticle] = useState(initialArticles);

    // stato dell'input di inserimento nuovi articoli
    const [newArticle, setNewArticle] = useState('');

    // stato dell'input di inserimento nuovi titoli
    const [newTitle, setNewTitle] = useState('');

    // stato dell'input di inserimento nuovi autori
    const [newAuthor, setNewAuthor] = useState('');

    // stato dell'input di inserimento nuove categeorie
    const [newCategory, setNewCategory] = useState('');

    // stato dell'input di inserimento nuovi contenuti
    const [newTextarea, setNewTextarea] = useState('');


    //  aggiunta nuovo articolo alla lista

    const addArticle = e => {
        e.preventDefault();

        const newArticleInfo = {
            id: articles[articles.length - 1].id + 1,
            title: newTitle,
            autore: newAuthor,
            categoria: newCategory,
            contenuto: newTextarea
        };
        // creazione nuovo array
        const updatedArticle = [...articles, newArticleInfo];

        setArticle(updatedArticle);
        // azzeriamo il valore di newTitle
        setNewArticle('');
        // azzeriamo input titolo
        setNewTitle('');
        // azzeriamo input autore
        setNewAuthor('');
        // azzeriamo input categoria
        setNewCategory('');
        // azzeriamo input contenuto
        setNewTextarea('');

    }


    return (
        <>

            <form onSubmit={addArticle}>

                {/* input nuovo articolo */}
                <input
                    type="text"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    placeholder="Inserisci titolo"
                />

                {/* input nuovo autore */}
                <input
                    type="text"
                    value={newAuthor}
                    onChange={e => setNewAuthor(e.target.value)}
                    placeholder="Inserisci autore"
                />
                {/* input nuova categoria */}
                <input
                    type="text"
                    value={newCategory}
                    onChange={e => setNewCategory(e.target.value)}
                    placeholder="Inserisci categoria"
                />
                {/* input nuovo contenuto */}
                <input
                    type="text"
                    value={newTextarea}
                    onChange={e => setNewTextarea(e.target.value)}
                    placeholder="Inserisci contenuto"
                />

                <button > Invia!</button>


            </form >




            <div>
                {articles.map((article) => (
                    <div key={article.id}>
                        <h2>Titolo : {article.title}</h2>
                        <h4>Autore: {article.autore}</h4>
                        <label htmlFor="#">Categoria: {article.categoria}</label>
                        <p>Contenuto: {article.contenuto}</p>
                    </div>
                ))}
            </div>
        </>



    );
}