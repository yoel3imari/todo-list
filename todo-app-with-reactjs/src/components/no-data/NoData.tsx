import Box from "@mui/material/Box";
import { NO_DATA_TEXT } from "../../constans/Strings";
import Zoom from "@mui/material/Zoom";

export default function NoData() {
    return (
        <Zoom in={true}>
            <Box mt={3} className="text-center">
                <img src="/no-data-image.png" alt="no data" />
                <Box mt={1} className="font-mono text-xl font-semibold">
                    {NO_DATA_TEXT}
                </Box>
            </Box>
        </Zoom>
    );
}
