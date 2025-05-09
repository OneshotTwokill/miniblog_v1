import { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"

import {db} from '../firebase.js'

import Button from './Button.jsx'
import TextInput2 from "./TextInput2.jsx"
import PostContainer from "./PostContainer.jsx"
import CommentList from "./CommentList.jsx"

const UserIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  margin-right: 12px;
  margin-left: 4px;
  align-items: center;
  justify-content: center;
`
function PostViewPage(props) {
  const postId = useParams().id;

  const [post, setPost] = useState({
    id: postId,
    title: '',
    content: '',
    comments: [] ,
    image: '' 
  })

useEffect(()=>{
  db.collection('post').doc(postId).get().then((doc)=>{
      setPost(doc.data())
  })
},[])

useEffect(() => {
  setCommentList(post.comments || []);
}, [post]);

  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState(post.comments || []);

  const addComment = async () => {
    if (comment.trim() === "") return;
  
    const newComment = {
      content: comment,
      author: "익명",
      createdAt: new Date()
    };
  
    const updatedComments = [  newComment, ...commentList];
  
    setCommentList(updatedComments);
    setComment('');
  
    try {
      // Firebase에 댓글 저장
      await db.collection('post').doc(postId).update({
        comments: updatedComments
      });
    } catch (error) {
      console.error("댓글 저장 중 오류 발생:", error);
    }
  };
  return (
    <div className="bodyPadding">
    <div style={{  paddingLeft: '5%',paddingRight:'5%' , boxSizing: 'border-box',overflow: 'hidden'}}>
      <PostContainer post={post} />
      <h1 style={{fontSize:'24px', paddingTop:'20px', paddingBottom:'30px'}}>COMMENT</h1>
      <CommentList comments={commentList} />
      <div className="whiteBox"></div>
      <div style={{ display: 'flex', gap: '8px',marginTop:'30px', alignItems: 'center', position:'absolute', bottom:'50px'}}>
      <UserIcon></UserIcon>
        <TextInput2
          width="874"
          height="50"
          radius="100"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 작성해주세요."
        />
        <Button title="작성하기" width="177" onClick={addComment}/>
      </div>
    </div></div>
  );
}

export default PostViewPage;
