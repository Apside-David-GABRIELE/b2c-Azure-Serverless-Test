import Typography from "@material-ui/core/Typography";
import NavBar from "./NavBar";

export const PageLayout = (props) => {
    return (
        <>
            <NavBar />
            <Typography variant="h5">
                <center>Derniers article</center>
            </Typography>
            <br/>
            <br/>
            {props.children}
        </>
    );
};