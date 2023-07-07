import {Box} from '@mui/material'
import Messages from './Messages';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import { AccountContext } from '../../../context/AccountProvider';
import { useContext } from 'react';

const ChatBox= ()=>{

    const { person } = useContext(AccountContext);

    const sendText = (e) => {
        console.log(e);
        const code = e.keyCode || e.which;
    }

    return (
        <Box>
        <ChatHeader person={person} />
        <Messages person={person} />
        <ChatFooter sendText={ sendText } />
        </Box>
    )
}

export default ChatBox; 