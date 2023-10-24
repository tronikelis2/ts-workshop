import { UserDto } from "./dtos/user";

export type GetUsersResponse = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: UserDto[];
    support: GetUsersResponse_Support;
};

export type GetUsersResponse_Support = {
    url: string;
    text: string;
};
