import TaskCard from "./TaskCard";

export default function Column({ status, tasks, onUpdate, onDelete }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    onUpdate(taskId, { status });
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="column"
      onDragOver={allowDrop}
      onDrop={handleDrop}
    >
      <h2>{status}</h2>

      {tasks.length === 0 && <p className="empty">Drop tasks here</p>}

      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
