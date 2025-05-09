import styled from 'styled-components'

const Ticket2 = styled.div`
  box-sizing: border-box;
  position: relative;
  background-color: white;
  width: 396px;
  height:168px;
  display: flex;
  flex-direction: column;
  color: #1A1A1A;
  border: solid 1px #D5D5D5;
  overflow: hidden;
  padding: 0;
  font-family: 'Pretendard-Regular';
`

const SideBar = styled.div`
  position: absolute;
  top: 0;
  width: 11.5px;
  height: 100%;
  background-color: ${props => props.color || '#e0e0e0'};
`

const LeftBar2 = styled(SideBar)`
  left: 0;
`

const QRCode2 = styled.img`
  display: block;
  margin: 0 auto;
  position: absolute;
  top:40%;
  right:10px;
  width: 30%;
  max-width: 91px;
  height: auto;
`

function TicketWrapper2(props) {
  const { year, country, place, date, thumbnail, passenger, barColor, post, onClick = '#e0e0e0' } = props
  const { title, content } = post || {};

  return (
    <div onClick={onClick} className="ticket-wrapper2"
    style={{
      paddingBottom:'23px',
      paddingTop:'23px',
      borderBottom:' 1px solid #BEBEBE'}}>
    <Ticket2>
      <LeftBar2 color={barColor} />

      <div style={{ padding: '0px 12px', height:'100%' ,display:'flex', flexDirection:'column', gap:'0px'}}>

        <div style={{display:'flex', alignItems: 'center'}}>
      <img src='/Plane.svg' alt="Plane icon" style={{
          display: 'block',
          marginLeft: 'auto',
          marginBottom: '0px',
          marginRight: '28px',
          width: '24px'
        }} />
        <h1 style={{
            width: '74px',
          fontSize: '30px',
          color: '#9F9F9F',
          fontWeight: '300',
          margin: '0px',
          paddingBottom: '8px',
          paddingLeft: '0px',
          marginTop: '14px'
        }}>{year || '2025'}</h1>
        </div>

        <p style={{
            position:'absolute',
            top:'24px',
          margin: '0 0 4px 0',
          color: 'white',
          backgroundColor: 'black',
          width: '68px',
          height: '27px',
          textAlign: 'center',
          fontSize: '19px',
          fontWeight: '100',
          display: 'flex',             
          alignItems: 'center',       
          justifyContent: 'center'
        }}>
          {country}
        </p>

        <h2 style={{
           position:'absolute',
           top:'55px',
          margin: '0',
          fontSize: '52px',
          fontWeight:'700',
          paddingLeft:'16px',
          paddingBottom:'20px',
          marginBottom: '0px',
          wordBreak: 'break-word'
        }}>{place}</h2>

        <div style={{
          position:'absolute',
           top:'126px',
            width:'150px',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0px 8px',
          paddingLeft:'20px',
          lineHeight: '90%'
        }}>
          <p style={{ marginLeft: '4px', fontSize: '7px', color:'#1A1A1A' }}>
            DATE<br />{date}
          </p>
          <p style={{ marginRight: '4px', fontSize: '7px', textAlign: 'right', color:'#1A1A1A'  }}>
            PASSENGER<br />{passenger || '@di_ed_ie'}
          </p>
        </div>
      </div>

      <QRCode2 src="./qrcode.svg" alt="QR Code" />
    </Ticket2>

<div style={{width:'802px', height:'168px' , paddingLeft:'24px' ,display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
    <div style={{display:'block',  overflow:'hidden'}}>
        <h2 className='List_TicketTitle'>{title}</h2>
        <h2 className='List_TicketContent'>{content}</h2>
        </div>
      <div style={{paddingTop:'10px', display:'flex', justifyContent:'space-between'}}>
      <p style={{color:'#3A3A3A'}}>{date}</p>
      <p style={{color:'#7B7B7B'}}>{passenger || '@di_ed_ie'}</p>
      </div>
    </div>
    </div>
  )
}

export default TicketWrapper2