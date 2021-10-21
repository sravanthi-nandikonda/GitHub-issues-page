import React,{useEffect,useState} from 'react'



function IssuesList() {

const [issues,setIssues] =useState([]);

useEffect(() => {
  //fetch("https://api.github.com/repos/facebook/create-react-app/issues")
  fetch("https://api.github.com/repos/facebook/react/issues?page=3")
    .then((res) => res.json())
    .then((data) => {
      setIssues(data);
      console.log(data);
    });
}, []);

  


    return (
      
        <div>
          <ul>
             {issues.map((issue) => {
               console.log(issue.user.login);
        return <li key={issue.id}>{issue.user.login}</li>;
      })}
      
      </ul>
        </div>
    )
}

export default IssuesList
