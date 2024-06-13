import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";

interface IProps {
    setFilter: (value: string) => void;
    clearAll: () => void;
}

export default function ToggleButtons(props: IProps) {
    const { setFilter, clearAll } = props;
    const [value, setValue] = React.useState<string>("");

    const handleFilter = (
        event: React.MouseEvent<HTMLElement>,
        newValue: string
    ) => {
        setValue(newValue);
        setFilter(newValue);
    };

    return (
        <ToggleButtonGroup
            value={value}
            size="small"
            exclusive
            aria-label="todo filters"
            color="primary"
            fullWidth
        >
            <ToggleButton onClick={handleFilter} value="all" aria-label="All">
                All
            </ToggleButton>
            <ToggleButton onClick={handleFilter} value="todo" aria-label="todo">
                Todo
            </ToggleButton>
            <ToggleButton
                onClick={handleFilter}
                value="completed"
                aria-label="completed"
            >
                Completed
            </ToggleButton>
            <ToggleButton
                onClick={clearAll}
                value="clearAll"
                aria-label="clear all"
            >
                Clear
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
