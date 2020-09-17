import {styled} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {theme} from "../../theme";

export const PageWrapper = styled(Box)({
    paddingLeft: "5px",
    paddingRight: "5px",
    [theme.breakpoints.up('md')]: {
        paddingLeft: "200px",
        paddingRight: "200px",
    }
});

