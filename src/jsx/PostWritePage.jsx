import { useState } from "react"
import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"

import TextInput from "./TextInput.jsx"
import TextInput2 from "./TextInput2.jsx"
import Button from './Button.jsx'
import ColorPicker from "./ColorPicker.jsx"

import { db } from '../firebase.js'

function PostWritePage(props){

    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [country, setCountry] = useState('')
    const [place, setPlace] = useState('')
    const [date, setDate] = useState('')
    const [color, setColor] = useState('')

    const writePost = () => {
        if (!color) {
            alert("색상을 선택해주세요!");
            return;
        }
        
        let timestamp = new Date().getTime().toString()
        db.collection('post').doc(timestamp).set({
            id: timestamp,
            title: title,
            content: content,
            country: country,
            place: place,
            date: date,
            comments: [],
            color: color ,
            image: image
        }).then(()=>{
            alert('글이 등록되었습니다!')
            navigate('/')
        })
    }

    const [image, setImage] = useState(null)

    const handleImage = (e) =>{
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = (_e)=>{
            console.log(_e.target.result)
            setImage(_e.target.result)
        }
    }

    return(
        <div>

            <div className="bodyPadding2">
                <div style={{display:'flex', gap:'24px'}}>
                <h2 style={{fontSize:'28px',fontWeight:'100',color:'#FE9015'}}>LADING PASS</h2>
                <h2 style={{fontSize:'28px',fontWeight:'100',color:'#FE9015', fontFamily:'"Fuzzy Bubbles", sans-serif'}}>Check-List</h2>
                </div>
                <div style={{display:'flex', gap:'30px', justifyContent:'space-evenly'}}>
                <div className="InputBox">
                <span className="NumBox">1</span>
                <TextInput2  width="266" height="50" radius="10" placeholder="나라를 입력해주세요" value={country} onChange={(e)=>setCountry(e.target.value)} ></TextInput2>
                </div>
                <div className="InputBox">
                <span className="NumBox">2</span>
                <TextInput2  width="266" height="50" radius="10" placeholder="지역을 입력해주세요" value={place} onChange={(e)=>setPlace(e.target.value)} ></TextInput2>
                </div>
                <div className="InputBox">
                <span className="NumBox">3</span>
                <TextInput2  width="266" height="50" radius="10"  placeholder="날짜를 입력해주세요"value={date} onChange={(e)=>setDate(e.target.value)} ></TextInput2>
                </div>
            </div>
            <div style={{display:'flex', marginLeft:'26px'}}>
                <ColorPicker value={color}  onChange={(val) => setColor(val)}></ColorPicker>
            </div>
        </div>


        <div className="bodyPadding2">
             <div style={{marginBottom:'30px'}}>
            <TextInput  width="1050" height="50" value={title} placeholder="제목" fontsize="32" onChange={(e)=>setTitle(e.target.value)}></TextInput>
            </div>
           
            <div style={{ width: '874px', position: 'relative' }}>
            <TextInput
                width="1050"
                height="320"
                value={content}
                borderColor="none"
                placeholder="내용을 작성해주세요"
                onChange={(e) => setContent(e.target.value)}
            />
            {image && (
                <img
                src={image}
                alt="미리보기"
                className="ContentImage"
                style={{
                    position: 'absolute',
                    bottom: '-50px',
                    right: '-180px',
                    width: '150px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    boxShadow: '0 0 5px rgba(0,0,0,0.2)',
                }}
                />
            )}
            </div>

                <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={(e) => handleImage(e)}
                style={{ display: 'none' }}
                />
            <div style={{position:'absolute', bottom:'82px',left: '50%',transform: 'translateX(-50%)'}}>
                
                <div style={{display:'flex',
                    alignItems:'center',gap:'18px'
                }}>
            <Button title="업로드" onClick={(e)=>{ writePost()}}></Button>
            <label htmlFor="image-upload" className="ImageInput"></label>
            </div>
            </div>
        </div>
        </div>
    )
}


export default PostWritePage