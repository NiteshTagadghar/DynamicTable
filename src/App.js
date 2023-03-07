import "./styles.scss";
import { useState, useEffect } from "react";
import TableData from "./Components/TableData";
import Header from "./Header";
import Pagination from "./Pagination";

function App() {
  const [jsonData, setJsonData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
        setFilteredData(data);
      });
  }, []);

  const slicedData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <Header data={jsonData} setFilteredData={setFilteredData} />
      <TableData slicedData={slicedData} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalPost={filteredData.length}
      />
    </div>
  );
}

export default App;
