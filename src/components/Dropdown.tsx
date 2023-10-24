import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

export type SortValue = "asc" | "desc";

type DropdownProps = {
    selectedValue: SortValue;
    onSelectedChange: Dispatch<SetStateAction<SortValue>>;
};

const SORT_OPTIONS = [
    { value: "asc", title: "Id ⬆️" },
    { value: "desc", title: "Id ⬇️" },
];

const Dropdown = ({ selectedValue, onSelectedChange }: DropdownProps) => {
    const renderOption = ({ value, title }: (typeof SORT_OPTIONS)[number]) => {
        return <option value={value}>{title}</option>;
    };

    const handleChange: ChangeEventHandler<HTMLSelectElement> = event => {
        onSelectedChange(event.target.value as SortValue);
    };

    return (
        <div style={{ marginTop: 10 }}>
            <select value={selectedValue} onChange={handleChange}>
                {SORT_OPTIONS.map(renderOption)}
            </select>
        </div>
    );
};

export default Dropdown;
