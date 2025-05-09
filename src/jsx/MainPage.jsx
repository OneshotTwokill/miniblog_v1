import style from "styled-components"
import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"

import Button from "./Button.jsx"
import PostList from "./PostList.jsx"

import {db} from '../firebase.js'

function MainPage(props){
    const navigate = useNavigate();

    const [data, setData] = useState([])
    const [recentData, setRecentData] = useState([]);

    const [layoutType, setLayoutType] = useState('list'); // 'list' or 'grid'

    useEffect(() => {
        let tempData = [];
        db.collection('post')
          .orderBy('id', 'desc') // 최신순 정렬
          .get()
          .then((qs) => {
            qs.forEach((doc) => {
              tempData.push({ id: doc.id, ...doc.data() });
            });
            setData(tempData);
            setRecentData(tempData.slice(0, 5));
          });
      }, []);

    return(
        <div className="bodyPadding" style={{ height: '900px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{
                display:'flex', justifyContent:'space-between'
                ,marginBottom:'46px', alignItems:'flex-end'
                }}>
            <div>
                <div style={{display:'flex', gap:'7px'}}>
                    <div style={{display:'flex'}}><h2 className="Text1">12</h2><h2 className="Text2">D</h2></div>
                    <div style={{display:'flex'}}><h2 className="Text1">18</h2><h2 className="Text2">H</h2></div>
                    <div style={{display:'flex'}}><h2 className="Text1">23</h2><h2 className="Text2">M</h2></div>
                </div>
                <div style={{display:'flex', marginTop:'7px'}}>
                <h2 className="Text1">146,321</h2><h2 className="Text2">km</h2>
                </div>
            </div>
            <div style={{
                display:'flex', alignItems:'center'
                }}>
                <img src="/gridIcon1.png"
                style={{ cursor: 'pointer', opacity: layoutType === 'grid' ? 1 : 0.5 }}
    onClick={() => setLayoutType('grid')}></img>
                <img src="/gridIcon2.png"
                 style={{ cursor: 'pointer', opacity: layoutType === 'list' ? 1 : 0.5 }}
                 onClick={() => setLayoutType('list')}></img>
            </div>
            </div>
            
       <PostList
     posts={layoutType === 'list' ? data : recentData} // 최근 포스트 5개, list 타입일때는 전체
    layout = {layoutType}
    itemClicked={(post) => {
        console.log("클릭됨:", post.id);
        navigate(`/post/${post.id}`);
    }}
    />
    <div className="whiteBox2"></div>
    <div style={{position:'absolute', bottom:'100px',left: '50%',transform: 'translateX(-50%)'}}>
            <Button title="글 작성하기" onClick={(e)=>{ navigate('/write')}}></Button>
            </div>
        </div>
    )
}

export default MainPage