import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { TodoItem } from "../../models/Todo";
import NoData from "../no-data/NoData";
import Grow from "@mui/material/Grow";

const ListItemStyled = styled(ListItem)({
    backgroundColor: "rgb(221 221 221 / 16%)",
    borderRadius: "6px",
    position: "relative",
    marginBottom: "8px",
    ".border": {
        width: "4px",
        height: "32px",
        backgroundColor: "#ddd",
        position: "absolute",
        left: 0,
        borderRadius: "10px",
    },
    "&:nth-of-type(2n+1)": {
        backgroundColor: "#bf9fff17",
        ".border": {
            backgroundColor: "#bf9fff",
        },
    },
    "&:nth-of-type(3n+1)": {
        backgroundColor: "rgb(129 194 255 / 18%)",
        ".border": {
            backgroundColor: "#81c2ff",
        },
    },
    "&:nth-of-type(4n+1)": {
        backgroundColor: "rgb(255 161 234 / 21%)",
        ".border": {
            backgroundColor: "#ffa1ea",
        },
    },
    "&:nth-of-type(5n+1)": {
        backgroundColor: "rgb(255 185 140 / 20%)",
        ".border": {
            backgroundColor: "#ffb98c",
        },
    },
    ".deleteIcon": {
        marginRight: 4,
    },
    "&.done": {
        textDecoration: "line-through",
        color: "#777",
    },
});

interface ITodoList {
    data: any;
    deleteItem: (title: string) => void;
    updateStatus: (id: any) => void;
}

export default function TodoList(props: ITodoList) {
    const { data, deleteItem, updateStatus } = props;
    return (
        <Box mt={1}>
            <List>
                {data.length > 0 ? (
                    data.map((item: TodoItem, index: number) => (
                        <Grow in={true} timeout={600} key={item.id}>
                            <ListItemStyled
                                className={item.isCompleted ? "done" : ""}
                                secondaryAction={
                                    <Box>
                                        <Tooltip
                                            title="Remove"
                                            placement="left"
                                        >
                                            <IconButton
                                                className="deleteIcon"
                                                edge="end"
                                                aria-label="delete"
                                                onClick={() =>
                                                    deleteItem(item.id)
                                                }
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip
                                            title={
                                                item.isCompleted
                                                    ? "Undo"
                                                    : "Mark Done"
                                            }
                                            placement="right-start"
                                        >
                                            <IconButton
                                                edge="end"
                                                aria-label="mark unmark done"
                                                onClick={() =>
                                                    updateStatus(item.id)
                                                }
                                            >
                                                {item.isCompleted ? (
                                                    <RemoveCircleIcon />
                                                ) : (
                                                    <CheckCircleIcon />
                                                )}
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                }
                            >
                                <ListItemText primary={item.title} />
                                <span className="border">&nbsp;</span>
                            </ListItemStyled>
                        </Grow>
                    ))
                ) : (
                    <NoData />
                )}
            </List>
        </Box>
    );
}
