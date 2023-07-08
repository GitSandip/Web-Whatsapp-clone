import { Box } from '@mui/material'
import Messages from './Messages';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import { AccountContext } from '../../../context/AccountProvider';
import { useContext, useEffect, useState } from 'react';
import { getConversations, newMessage } from '../../../service/API';

const ChatBox = () => {


    const { person, Account } = useContext(AccountContext);
    // const { Account } = useContext(AccountContext);
    const [conversation, setConversation] = useState({});

    const [value, setValue] = useState("");

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversations({ senderId: Account.sub, receiverId: person.sub });
            setConversation(data);
        }
        getConversationDetails();
    }, [person.sub]);

    const sendText = async (e) => {
        console.log(e);
        const code = e.keyCode || e.which;
        if (code === 13) {
            let message = {
                senderId: Account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                value: value
            }

            await newMessage(message);
            setValue("");
        }
    }

    return (
        <Box>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation} />
            <ChatFooter sendText={sendText} setValue={setValue} value={value}/>
        </Box>
    )
}

export default ChatBox; 