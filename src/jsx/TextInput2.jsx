import styled from 'styled-components'

const StyledTextArea = styled.textarea`
    background-color: none;
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    border-radius: ${props=>props.radius}px;
    margin: 0 auto;
    font-size: 20px;
      font-family: 'Pretendard-Regular', sans-serif; 
      border: 1px solid #B7B7B7;

    resize: none;

    padding-left:20px;
    line-height: 1.4;
     padding-top: calc((${props => props.height}px - 24px * 1.4) / 2);
    

    &::placeholder {
    color: #999;   
    font-size: 20px;
    align-items:center;
    opacity: 0.8;
    font-family: 'Pretendard-Regular', sans-serif; 
  }
     &:focus {    
     border: 1px solid #B7B7B7;
    outline: none;
  }
`
function TextInput2(props){
    const {width, height, radius, value, onChange, placeholder} = props

    return (
        <StyledTextArea width={width ||20} height={height || 20}  radius={radius|| 20}  placeholder={placeholder || ''} value={value} onChange={onChange}></StyledTextArea>
    )
}

export default TextInput2
