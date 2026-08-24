import Fab from '@mui/material/Fab';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import '../styles/FABGiving.css';

/**
 * Floating "Give" button, pinned to the bottom-right corner of every page.
 *
 * Rendered once from App so it persists across route changes. The href is
 * still a placeholder until the church's giving provider URL is available.
 */
function FABGiving() {
    return (
        <Fab
            component="a"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="fibc-fab"
            aria-label="Give (opens in a new tab)"
        >
            <AttachMoneyIcon className="fibc-fab__icon" aria-hidden="true" />
            Give
        </Fab>
    );
}

export default FABGiving;
