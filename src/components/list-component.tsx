import { useState } from "react";

interface User {
    id: string;
    name: string;
}

function createRandomid(): string{
    return `id${+(new Date(3600 * 24)) + Math.random()}`
}


export function ListComponent() {
    const [users, setUsers] = useState<User[]>([{ id: createRandomid(), name: "Tom"}, { id: createRandomid(), name: "Jon" }, { id: createRandomid(), name: "Sem"}])
    return (
        <>
            <h1>Пользователи</h1>
            {users.map(user => (
                <h2 key={user.id}>Уникальный идентификатор: {user.id} Имя: {user.name}</h2>
            ))}
        </>
    )
}