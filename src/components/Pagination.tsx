interface PaginationProps {
    totalGames: number;
    gamesPerPage: number;
    setCurrentPage: (page: number) => void;
    currentPage: number;
  }
  
  const Pagination: React.FC<PaginationProps> = ({
    totalGames,
    gamesPerPage,
    setCurrentPage,
    currentPage,
  }) => {
    const pageNumbers: number[] = [];
  
    for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  