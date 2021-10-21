import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Issue from "../components/Issue";

function IssueList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/create-react-app/issues")
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
      });
  }, []);

  return (
    <ListGroup>
      {issues.map((issue) => {
        return <Issue key={issue.id} data={issue} />;
      })}
    </ListGroup>
  );
}

export default IssueList;
