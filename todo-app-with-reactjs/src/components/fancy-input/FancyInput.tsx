import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";

interface IProps {
    placeholder?: string;
    setNewTodo: (value: string) => void;
}

export default function FancyInput(props: IProps) {
    const { setNewTodo } = props;
    const [value, setValue] = useState("");

    const handleTodoSubmit = () => {
        // check if value is valid or not
        if (value === "" || value.replace(/\s+/g, " ").trim() === "") {
            return;
        }
        setNewTodo(value);
        setValue("");
    };

    return (
        <Box>
            <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type="text"
                    size="small"
                    placeholder="Add Todo Here"
                    onChange={(e: any) => {
                        setValue(e.target.value);
                    }}
                    value={value}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            handleTodoSubmit();
                        }
                    }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Add todo"
                                edge="end"
                                onClick={handleTodoSubmit}
                            >
                                <AddCircleRoundedIcon color="primary" />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    );
}
