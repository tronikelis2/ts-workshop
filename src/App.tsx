import { useCallback, useEffect, useState } from "react";

import UserDetails from "./components/UserDetails";
import { getUsers } from "./data/apiCalls";
import { transformUsers } from "./data/transformers/user";
import HighlightWrapper from "./components/HighlightWrapper";
import Dropdown from "./components/Dropdown";
import { UiState } from "./constants/uiState";

const App = () => {
    const [userList, setUserList] = useState<ReturnType<typeof transformUsers>>(
        []
    );

    const [selectedSort, setSelectedSort] = useState<"asc" | "desc">("asc");

    const [uiState, setUiState] = useState(UiState.Pending);

    const handleFetchData = useCallback(async () => {
        setUiState(UiState.Pending);

        try {
            const { data } = await getUsers();

            const transformedResponse = transformUsers(data.data);

            setUserList(transformedResponse);
        } catch (error) {
            console.log(error);
            setUiState(UiState.Error);
        }

        setUiState(UiState.Success);
    }, []);

    const sortedUsers = userList.sort((a, b) => {
        if (selectedSort === "asc") return a.id - b.id;

        return b.id - a.id;
    });

    useEffect(() => {
        handleFetchData();
    }, [handleFetchData]);

    const renderUser = ({
        id,
        email,
        firstName,
        lastName,
    }: (typeof userList)[number]) => {
        return (
            <div key={id}>
                <HighlightWrapper>
                    <>
                        <h3>
                            {firstName} {lastName} ({id})
                        </h3>
                        <UserDetails email={email} />
                    </>
                </HighlightWrapper>
            </div>
        );
    };

    if (uiState === UiState.Loading) return <div>Loading...</div>;

    if (uiState === UiState.Error) return <div>Something went wrong...</div>;

    return (
        <div>
            <button onClick={handleFetchData}>♻️</button>
            <Dropdown
                options={[
                    { value: "asc", title: "Asc" },
                    { value: "desc", title: "Desc" },
                ]}
                selectedValue={selectedSort}
                onSelectedChange={setSelectedSort}
            />
            <div>{sortedUsers.map(renderUser)}</div>
        </div>
    );
};

export default App;
