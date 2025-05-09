import React from 'react';
import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { createRoot } from 'react-dom/client';

import CommentItem from "./CommentItem.jsx"

const ScrollContainer = styled.div`
  height: 380px;       
  overflow-y: auto;       
  padding-right: 8px;         
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

function CommentList({comments}) {
    return (
      <ScrollContainer>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ScrollContainer>
    );
  }

export default CommentList