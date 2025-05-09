import styled from 'styled-components'

const StyledTextArea = styled.textarea`
    background-color: rgba(0, 0, 0, 0);
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    display: block;
    margin: 0 auto;
    border: none;
    font-size: ${props=>props.fontsize}px;
    border-bottom: solid 1px  ${props=>props.borderColor};
    font-family: 'Pretendard-Regular', sans-serif; 

    resize: none;  

    &::placeholder {
    color: #999;   
    font-size: ${props=>props.fontsize}px;
    align-items:center;
    opacity: 0.8;
    font-family: 'Pretendard-Regular', sans-serif; 
  }
     &:focus {    
     border-bottom: solid 1px ${props=>props.borderColor}; /* 포커스 상태에서도 border 진해지지 않게 고정 */
    outline: none;
  }
`
function TextInput(props){
    const {width, height, value, placeholder, fontsize, borderColor, onChange} = props

    return (
        <StyledTextArea width={width ||20} height={height || 20} value={value}
        borderColor= {borderColor || '#B7B7B7'}  
        placeholder={placeholder || ''} fontsize={fontsize || 20} onChange={onChange}></StyledTextArea>
    )
}

export default TextInput

