import styled from 'styled-components'
import { Link } from 'react-router-dom';
import ColorButton from './ColorButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Ticket = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  background-color: white;
  width: 206px;
  aspect-ratio: 206 / 485;
  display: flex;
  flex-direction: column;
  color: #1A1A1A;
  border: solid 1px #D5D5D5;
  overflow: hidden;
  padding: 0;
  font-family: 'Pretendard-Regular';
  transition: background-color 0.3s ease;

  @media (max-width: 320px) {
    max-width: 160px;
  }

  @media (max-width: 250px) {
    transform: scale(0.9);
    transform-origin: top left;
  }

  &:hover {
    background-color: ${props => props.color || '#e0e0e0'};

    .visible img {
      display: none;
    }

    .visible {
      display: none;
    }
  }
`;

const SideBar = styled.div`
  position: absolute;
  top: 0;
  width: 12px;
  height: 346px;
  background-color: ${props => props.color || '#e0e0e0'};

  @media (max-width: 400px) {
    height: 300px;
  }
`;

const LeftBar = styled(SideBar)`
  left: 0;
`;

const RightBar = styled(SideBar)`
  right: 0;
`;

const QRCode = styled.img`
  display: block;
  margin: 0 auto;
  position: absolute;
  bottom: 14px;
  left: 50px;
  width: 50%;
  max-width: 112px;
  height: auto;
`;

const StyledYear = styled.h1`
  font-size: clamp(24px, 4vw, 36px);
  color: #9F9F9F;
  font-weight: 300;
  margin: 0;
  padding-bottom: 8px;
  padding-left: 14px;
  margin-top: 14px;
`;

const StyledCountry = styled.p`
  margin: 4px 0;
  color: white;
  background-color: black;
  width: 84px;
  height: 33px;
  text-align: center;
  font-size: clamp(18px, 3vw, 24px);
  font-weight: 100;
  line-height: 33px;
`;

const StyledPlace = styled.h2`
  margin: 0;
  font-size: clamp(36px, 6vw, 64px);
  margin-bottom: 40px;
  word-break: break-word;
  line-height: 90%;
  text-align: left;
`;

const DatePassengerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 8px;
  line-height: 90%;
`;

const StyledDate = styled.p`
  margin-left: 4px;
  font-size: 8px;
`;

const StyledPassenger = styled.p`
  margin-right: 4px;
  font-size: 8px;
  text-align: right;
`;

function TicketWrapper(props) {
  const { id, year, country, place, date, passenger, thumbnail, barColor, post = '#e0e0e0' } = props;
  const { title, content } = post || {};
  const navigate = useNavigate();

  const splitPlace = (place) => {
    if (!place) return ['', ''];
    if (place.length <= 3) {
      return [place, ''];
    } else {
      return [place.slice(0, 2), place.slice(2)];
    }
  };

  const [placeTop, placeBottom] = splitPlace(place);

  return (
    <div onClick={() => navigate(`/post/${id}`)} className="ticket-wrapper">
      <Ticket color={barColor}>
        <LeftBar color={barColor} />
        <RightBar color={barColor} />
        <div style={{ padding: '0px 12px',position: 'relative' }} className='visible'>
          <StyledYear>{year || '2025'}</StyledYear>

          <img
            src='/Plane.svg'
            alt="Plane icon"
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginBottom: '8px',
              marginRight: '8px',
              width: '24px'
            }}
          />

          <StyledCountry>{country}</StyledCountry>
          <StyledPlace>{placeTop}<br />{placeBottom}</StyledPlace>

          <DatePassengerWrapper>
            <StyledDate>DATE<br />{date}</StyledDate>
            <StyledPassenger>PASSENGER<br />{passenger || '@di_ed_ie'}</StyledPassenger>
          </DatePassengerWrapper>

          <QRCode src="/qrcode.svg" alt="QR Code" />
        </div>

        <div className='HoverContent'>
          <img  src={thumbnail || "/thumbnail.png"}
          style={{ width: '206px', height: '139px', objectFit: 'cover' }} />
          <div className='HoverContent_container'>
            <h2 style={{
              fontFamily: 'Pretendard-Regular',
              fontSize: '12px', color: 'white', fontWeight: '700' }}>{title}</h2>
            <h2 style={{
              fontFamily: 'Pretendard-Regular',
              fontSize: '12px', color: 'white', fontWeight: '100', lineHeight: '146%' }}>{content}</h2>
          </div>
          <p style={{
            marginTop: '8px', marginLeft: '150px', marginRight: '14px',
            fontSize: '8px', color: 'white', fontWeight: '100' }}>{passenger || '@di_ed_ie'}</p>
        </div>
      </Ticket>
    </div>
  );
} 


export default TicketWrapper