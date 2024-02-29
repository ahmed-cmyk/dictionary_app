import { useState, React } from "react";
import axios from "axios";

import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";
import Word from "../components/word";
import NotFound from "../components/notFound";

export default function Root() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeFont, setActiveFont] = useState("serif");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("unset");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeFont = (font) => {
    console.log(`Changed to font: ${font}`);
    setActiveFont(font);
  };

  const handleSubmit = async (e, searchTerm) => {
    setIsLoading(true);
    setStatus("unset");
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );
      setSearchResults(response.data);
      setStatus("found");
    } catch (error) {
      setSearchResults([]);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={`${darkMode ? "dark" : "light"} ${activeFont}`}>
        <NavBar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          activeFont={activeFont}
          changeFont={changeFont}
        />
        <SearchBar
          darkMode={darkMode}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
        {status === "unset" ? null : status === "found" ? (
          <Word searchResults={searchResults} />
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
}
