import React from 'react';
import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { createRoot } from 'react-dom/client';

import TicketWrapper from "./Ticket.jsx"
import TicketWrapper2 from "./Ticket2.jsx"

const GridContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 auto;
justify-content: space-between;
`;

const ListContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0px;
justify-content: flex-start;
border-top: 1.5px solid #6B6B6B;

height: calc(100vh - 124px);       
overflow-y: auto;            
`;

const WrapperStyle = {
  height: 'calc(100vh - 124px)',
  overflowY: 'auto',
};

function PostList({ posts, layout, itemClicked }) {
  const WrapperComponent = layout === 'grid' ? TicketWrapper : TicketWrapper2;

  const Container = layout === 'grid' ? GridContainer : ListContainer;

  return (
    <div style={WrapperStyle}>
    <Container>
      {posts.map((post) => (
        <WrapperComponent
        key={post.id}
        post={post}
        id={post.id}
        year={post.year}
        country={post.country}
        place={post.place}
        date={post.date}
        passenger={post.passenger}
        thumbnail={post.image}
        barColor={post.color}
        onClick={() => itemClicked(post)}
        />
      ))}
    </Container>
    </div>
  );
  }
export default PostList