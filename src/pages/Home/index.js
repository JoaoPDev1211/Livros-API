import { Container, LivroList, Livro } from "./styles";
import { useState, useEffect } from "react";
import { APIkey } from "../../config/key"; // Certificando-se de que o caminho está correto

function Home() {
  const [livros, setLivros] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("todos"); // Pode ser "todos", "lendo", "naoLido", "vouLer"

  useEffect(() => {
    fetch(APIkey,{
      
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer 7309",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setLivros(data);
      })
      .catch((error) => console.error("Erro ao buscar livros:", error));
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedBooks((prevSelectedBooks) =>
      prevSelectedBooks.includes(id)
        ? prevSelectedBooks.filter((bookId) => bookId !== id)
        : [...prevSelectedBooks, id]
    );
  };

  const filteredBooks = livros.filter((livro) => {
    if (activeTab === "lendo" && !selectedBooks.includes(livro.id)) return false;
    if (activeTab === "naoLido" && selectedBooks.includes(livro.id)) return false;
    if (activeTab === "vouLer" && selectedBooks.includes(livro.id)) return false;
    return livro.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Container>
      <h1>Livros</h1>
      <input
        type="text"
        placeholder="Pesquisar livros..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        <button onClick={() => setActiveTab("todos")}>Todos</button>
        <button onClick={() => setActiveTab("lendo")}>Lendo</button>
        <button onClick={() => setActiveTab("naoLido")}>Não Lido</button>
        <button onClick={() => setActiveTab("vouLer")}>Vou Ler</button>
      </div>
      <LivroList>
        {filteredBooks.map((livro) => (
          <Livro key={livro.id}>
            <input
              type="checkbox"
              checked={selectedBooks.includes(livro.id)}
              onChange={() => handleCheckboxChange(livro.id)}
            />
            <a href="https://www.google.com.br">
              <img src={livro.imageLinks.smallThumbnail} alt={livro.title} />
            </a>
            <span>{livro.title}</span>
          </Livro>
        ))}
      </LivroList>
    </Container>
  );
}

export default Home;
