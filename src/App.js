import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [isReportLoading, setIsReportLoading] = useState(null);

  const [report, setReport] = useState({
    numRows: 0,
    numColumns: 0,
    columnNames: []
  });

  const handleReportStatusChange = status => {
    setIsReportLoading(status);
  };

  const handleReport = status => {
    setReport(status);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://localhost:8000/rest/report';
        
        const { data } = await axios.get(url);
        
        handleReport(data);

        handleReportStatusChange(false);
      } catch (error) {}
    };

    fetchData();
  }, []);

  if (isReportLoading === null) {
    return <div className="App">Loading...</div>;
  }

  return !isReportLoading ? (
    <div className="App">
      <p>Number of Rows: {report.numRows}</p>
      <p>Number of Columns: {report.numColumns}</p>
      <ul>
        {report.columnNames.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="App">Loading...</div>
  );
}

export default App;
