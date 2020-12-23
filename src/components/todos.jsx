import React from "react";
import { IconButton } from "@material-ui/core";
import DelIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";

export default function Todos(props) {
  const { task, createdAt, markDone, delTodo, index, completed,completedAt } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {completed ? (
        <div style={{ marginRight: "1em", color: "red" }}>{completedAt}</div>
      ) : (
        <IconButton onClick={() => markDone(index)}>
          <CheckIcon />
        </IconButton>
      )}

      <h2 style={{ color: completed ? "red" : "black" }}>{task}</h2>
      <IconButton onClick={() => delTodo(index)}>
        <DelIcon />
      </IconButton>
      {createdAt}
    </div>
  );
}
