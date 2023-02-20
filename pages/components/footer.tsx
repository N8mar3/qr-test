import { Box } from "@mui/system";
import styles from "../styles/Home.module.css";

function Footer() {
    return (
        <Box sx={{marginTop:30, paddingBottom:10, letterSpacing: 6}}>
            <div className={styles.footer}>
                Made by SGG™
            </div>
        </Box>
    )
}

export default Footer;