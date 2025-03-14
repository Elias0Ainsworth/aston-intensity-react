import { useState } from "react";

interface User {
    id: number;
    name: string;
}

function createRandomKey(): string{
    return `id${+(new Date(3600 * 24)) + Math.random()}`
}


export function ListComponent() {
    const [users, setUsers] = useState<User[]>([{ id: 1, name: "Tom"}, { id: 2, name: "Jon" }, { id: 3, name: "Sem"}])
    return (
        <>
            <h1>Пользователи</h1>
            {users.map(user => (
                <h2 key={createRandomKey()}>Уникальный идентификатор: {user.id} Имя: {user.name}</h2>
            ))}
        </>
    )
}