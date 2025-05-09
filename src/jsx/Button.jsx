import styled from 'styled-components'

const StyledButton = styled.button`
  height:50px;
  display: flex;
align-items: center;   /* 세로 정렬 */
justify-content: center; /* 가로 정렬 */
  color: white;
  font-size: 24px;
  background-color: #000000cb;
  border:none;
  border-radius: 100px;
  padding: 10px 84px 10px 84px;
  font-family: 'Pretendard-Regular';
  font-weight: 100;
  margin: 0 auto;
  white-space: nowrap;
   width: ${props => props.width || 'auto'}px;  
 transition: background-color 0.3s ease;  
     &:hover {
    background-color: #FE9015;
  }
`
function Button(props){
    const {title, onClick, width} = props
    return (
        <StyledButton width={width || ''} onClick={onClick}>{title || 'Button'}</StyledButton>
    )
}

export default Button

