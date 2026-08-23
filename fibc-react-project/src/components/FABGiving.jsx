import { Link, useLocation } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import '../styles/FABGiving.css';

function FABGiving() {
    return (
        <Fab
            component="a"
            href="#"
            className="fibc-fab"
            target='_blank'
        >
            <AttachMoneyIcon className="fibc-fab__icon" aria-hidden="true" />
        </Fab>
    );
}

export default FABGiving;
