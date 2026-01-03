import { useState } from "react";

export default function TaskCard({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");

  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task._id);
  };

  const handleSave = () => {
    if (!title.trim()) return;
    onUpdate(task._id, { title, description });
    setIsEditing(false);
  };

  // 🔹 EDIT MODE
  if (isEditing) {
    return (
      <div className="task">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Optional description"
        />

        <div className="actions">
          <button onClick={handleSave}>Save</button>
          <button className="danger" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  // 🔹 VIEW MODE
  return (
    <div
      className="task"
      draggable
      onDragStart={handleDragStart}
    >
      <p><strong>{task.title}</strong></p>

      {task.description && (
        <p className="desc">{task.description}</p>
      )}

      <div className="actions">
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button className="danger" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
