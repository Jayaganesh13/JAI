interface SearchBarProps {
    setSearchTerm: (term: string) => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
    return (
      <input
        type="text"
        placeholder="Search games..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  