import React from "react";
import { useRef } from "react";
import useTodoStore from "../stores/useTodoStore";

const TodoForm = () => {
    const { addTodo } = useTodoStore();

    const todoRef = useRef();
    const dateRef = useRef();

    const handleAddTodo = (e) => {
        e.preventDefault();
        const todo = todoRef.current.value;
        const date = dateRef.current.value;

        addTodo(todo, date);
    };

    return (
        <div>
            <form>
                <input type="text" ref={todoRef} />
                <input type="date" ref={dateRef} />
                <input type="submit" value={"등록"} onClick={handleAddTodo} />
            </form>
        </div>
    );
};

export default TodoForm;
