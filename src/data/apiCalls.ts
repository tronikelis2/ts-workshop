import axios from "axios";

export type GetUsersJSON = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Datum[];
    support: Support;
};

type Datum = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

type Support = {
    url: string;
    text: string;
};

export const getUsers = () =>
    axios.get<GetUsersJSON>("https://reqres.in/api/users");
