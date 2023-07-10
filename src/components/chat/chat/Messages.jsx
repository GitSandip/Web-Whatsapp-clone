import { Box,styled } from "@mui/material";
import { getMessages } from "../../../service/API";
import { useEffect,useState } from "react";
import Message from "./Message";

const Wrapper = styled(Box)`
    
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size:50%;
`
const Component = styled(Box)`
    height:79vh;
    overflow-y:scroll;
`

const Container = styled(Box)`
    padding: 1px 10px;
`

const Messages = ({person,conversation,flag})=>{

    const [messages, setMessages] = useState([]); 

    useEffect(() => {
        const getMessageDetails = async () =>{
        let data = await getMessages(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    },[person._id,conversation._id,flag]);

    return (
        <Wrapper>
            <Component>
                {
                    messages && messages.map( message => (
                        <Container>
                            <Message message = {message}/>
                        </Container>
                        
                    ))
                }
            </Component>
            
        </Wrapper>
    )
}

export default Messages;