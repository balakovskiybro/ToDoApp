import React, { useState } from "react";
import { Card, CardContent } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import '../styles.css'

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

type Filter = "all" | "active" | "completed";

const ToDoApp: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>("");
    const [filter, setFilter] = useState<Filter>("all");

    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
        setNewTask("");
    };

    const toggleTask = (id: number) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
    };

    const clearCompleted = () => {
        setTasks(tasks.filter((task) => !task.completed));
    };

    const remainingTasks = tasks.filter((task) => !task.completed).length;

    const filteredTasks = tasks.filter((task) => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    return (
        <div className="container">
            <h1 className="title">ToDo List</h1>
            <div className="input-group">
                <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Добавить новую задачу..." />
                <Button onClick={addTask}>Добавить</Button>
            </div>
            <p className="remaining-tasks">Оставшиеся задачи: {remainingTasks}</p>
            <div className="filter-buttons">
                <Button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>Все</Button>
                <Button onClick={() => setFilter("active")} className={filter === "active" ? "active" : ""}>Активные</Button>
                <Button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>Завершенные</Button>
            </div>
            <Card className="task-list">
                <CardContent>
                    <h2 className="task-title">Задачи</h2>
                    {filteredTasks.map((task) => (
                        <div key={task.id} className="task-item">
                            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
                            <span className={task.completed ? "task-completed" : ""}>{task.text}</span>
                        </div>
                    ))}
                </CardContent>
            </Card>
            <Button className="clear-button" onClick={clearCompleted} variant="destructive">
                Удалить завершенные
            </Button>
        </div>
    );
};

export default ToDoApp;