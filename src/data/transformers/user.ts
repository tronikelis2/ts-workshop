import { GetUsersJSON } from "../apiCalls";

const transformUser = ({
    id,
    email,
    first_name,
    last_name,
    avatar,
}: GetUsersJSON["data"][number]) => ({
    id,
    email,
    firstName: first_name,
    lastName: last_name,
    avatar,
});

export const transformUsers = (users: GetUsersJSON["data"]) =>
    users.map(transformUser);
