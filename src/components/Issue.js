import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Label from "./Label";
import RelativeTime from "./RelativeTime";

function Issue(props) {
  const { title, number, created_at, user, labels } = props.data;
  // the above line is the same as doing these 4 lines:
  // const title = props.data.title;
  // const number = props.data.number;
  // const createdAt = props.data.createdAt;
  // const user = props.data.user;
  return (
    <ListGroupItem>
      <span className="fw-bold me-1">
        <Link to={`/issues/${number}`}>{title}</Link>
      </span>
      {labels.map((label) => (
        <Label key={label.id} text={label.name} color={label.color} />
      ))}
      <div className="text-secondary">
        #{number} opened <RelativeTime date={created_at} /> by{" "}
        <a className="text-secondary text-decoration-none" href={user.html_url}>
          {user.login}
        </a>
      </div>
    </ListGroupItem>
  );
}

export default Issue;
