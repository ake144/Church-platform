const data = [

    {
        id: 1,
        title: "Article 1",
    },
    {
        id: 2,
        title: "Article 2",
    },
    {
        id: 3,
        title: "Article 3",
    }
]




const Articles = () => {
  

    return (
        <ul>
            {data.map((article) => (
                <li key={article.id}>{article.title}</li>
            ))}
        </ul>
    );
}

export default Articles;