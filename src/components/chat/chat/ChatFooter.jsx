import { Box, InputBase,styled } from "@mui/material";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import { useState,useEffect } from "react";
import { uploadFile } from "../../../service/API";


const Component= styled(Box)`
    height:50px;
    background:#ededed;
    display:flex;
    width:100%;
    align-items:center;
    padding:0px 15px;
    // margin-bottom:10px;
    & > *{
        margin:5px;
        color:#919191;
        
    }
`

const Search = styled(Box)`
    background-color:#ffffff;
    border-radius:18px;
    width:90%;
`

const InputField = styled(InputBase)`
    width:100%;
    padding:0px 20px;
    font-size:15px;
`

const ClipIcon = styled(AttachFileOutlinedIcon)`
    transform:rotate(40deg);
`

const ChatFooter = ({ sendText,setValue,value,file,setFile })=>{


    useEffect(() => {
        const setImage = async () =>{
            if(file){
                 const data = new FormData();
                 data.append("name",file.name);
                 data.append("file",file);

                 await uploadFile(data);
            }
        }
        setImage();
    },[file]);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

    return (
        <Component>
            <EmojiEmotionsOutlinedIcon />
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input 
                type="file" 
                style={{display:"none"}} 
                id="fileInput"
                onChange = {(e) => onFileChange(e)}
            />
            <Search>
                <InputField placeholder="Type a message" 
                    onChange={ (e)=> setValue(e.target.value) } 
                    onKeyUp={(e) => sendText(e)}
                    value={value}
                />
            </Search>
            <MicOutlinedIcon />
        </Component>
    )
}

export default ChatFooter;