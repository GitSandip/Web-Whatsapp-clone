import {Box, Typography,styled} from '@mui/material'
import { formateDate } from '../../../utils/common-utils'
import { AccountContext } from '../../../context/AccountProvider'
import { useContext } from 'react'

const Sender = styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    margin-left: auto;
    padding: 5px;
    width: fit-content;
    border-radius:7px;
    word-break: break-word;
    display:flex;
    margin-top:3px;

`

const Receiver = styled(Box)`
    background: #FFFFFF;
    max-width: 60%;
    padding: 5px;
    width: fit-content;
    border-radius:7px;
    word-break: break-word;
    display:flex;
    margin-top:3px;


`
const Text = styled(Typography)`
    font-size: 14px;
    padding: 0px 20px 0px 0px;

`
const Time = styled(Typography)`
    font-size:10px;
    margin-top:auto;
    color:#919191;
    word-break:keep-all;

`

const Message = ({message}) =>{

    const {Account} = useContext(AccountContext); 

    return (
        <>
        
        {
            Account.sub === message.senderId ? 
            <Sender>
            <Text>{message.value}</Text>
            <Time>{formateDate(message.createdAt)}</Time>
            </Sender>
            :
            <Receiver>
            <Text>{message.value}</Text>
            <Time>{formateDate(message.createdAt)}</Time>
            </Receiver>

        }
        </>
        
    )
}

export default Message;