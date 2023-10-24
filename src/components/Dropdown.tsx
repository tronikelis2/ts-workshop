import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

type Option<T extends string> = {
    value: T;
    title: string;
};

type Props<T extends string> = {
    options: Array<Option<T>>;
    selectedValue: T;
    onSelectedChange: Dispatch<SetStateAction<T>>;
};

const Dropdown = <T extends string>({
    selectedValue,
    onSelectedChange,
    options,
}: Props<T>) => {
    const renderOption = ({ value, title }: Option<T>) => {
        return <option value={value}>{title}</option>;
    };

    const handleChange: ChangeEventHandler<HTMLSelectElement> = event => {
        onSelectedChange(event.target.value as T);
    };

    return (
        <div style={{ marginTop: 10 }}>
            <select value={selectedValue} onChange={handleChange}>
                {options.map(renderOption)}
            </select>
        </div>
    );
};

export default Dropdown;
