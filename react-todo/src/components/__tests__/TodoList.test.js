import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// Test that the TodoList component renders correctly
test("renders TodoList component", () => {
    render( < TodoList / > );

    // Check if the Todo List header is present
    expect(screen.getByText(/todo list/i)).toBeInTheDocument();

    // Check if initial todos are displayed
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

// Test adding a new todo
test("adds a new todo", () => {
    render( < TodoList / > );

    // Simulate user typing in the input
    fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), {
        target: { value: "New Todo" },
    });

    // Simulate clicking the Add Todo button
    fireEvent.click(screen.getByText(/add todo/i));

    // Verify that the new todo appears in the list
    expect(screen.getByText("New Todo")).toBeInTheDocument();
});

// Test toggling a todo item
test("toggles todo completion", () => {
    render( < TodoList / > );

    // Click to toggle the completion of a todo
    fireEvent.click(screen.getByText("Learn React"));

    // Verify that the todo is marked as completed
    expect(screen.getByText("Learn React")).toHaveStyle(
        "text-decoration: line-through"
    );

    // Click again to toggle the todo back to not completed
    fireEvent.click(screen.getByText("Learn React"));

    // Verify that the todo is no longer marked as completed
    expect(screen.getByText("Learn React")).not.toHaveStyle(
        "text-decoration: line-through"
    );
});

// Test deleting a todo
test("deletes a todo", () => {
    render( < TodoList / > );

    // Simulate clicking the delete button for the first todo
    fireEvent.click(screen.getAllByText(/delete/i)[0]);

    // Verify that the deleted todo is no longer in the document
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});