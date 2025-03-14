// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
    test("renders TodoList with initial todos", () => {
        render( < TodoList / > );
        const todoItems = screen.getAllByRole("listitem");
        expect(todoItems).toHaveLength(3);
    });

    test("can add a new todo", () => {
        render( < TodoList / > );
        const input = screen.getByPlaceholderText("Add a new todo");
        const button = screen.getByText("Add Todo");

        fireEvent.change(input, { target: { value: "New Todo" } });
        fireEvent.click(button);

        const todoItems = screen.getAllByRole("listitem");
        expect(todoItems).toHaveLength(4);
        expect(screen.getByText("New Todo")).toBeInTheDocument();
    });

    test("can toggle todo completion", () => {
        render( < TodoList / > );
        const todoItem = screen.getByText("Learn React");
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle("text-decoration: line-through");
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle("text-decoration: none");
    });

    test("can delete a todo", () => {
        render( < TodoList / > );
        const deleteButton = screen.getAllByText("Delete")[0];
        fireEvent.click(deleteButton);
        const todoItems = screen.getAllByRole("listitem");
        expect(todoItems).toHaveLength(2);
    });
});