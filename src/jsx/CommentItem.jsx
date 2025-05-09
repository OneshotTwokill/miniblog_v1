import styled from 'styled-components'

const StyledWrapper = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center; 
  height: 47px;
  margin-bottom: 14px;
`
const StyledContent = styled.p`
    font-size: 20px;
`
const CommentUser = styled.p`
    font-size:16px;
    color:#C2C2C2;
    text-align:right;
`
const UserIcon = styled.div`
  width: 46px;
  height: 46px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  margin-right: 28px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

function CommentItem(props){
    const {comment} = props

    return (
        <StyledWrapper>
            <div style={{display:'flex',  alignItems:'center'}}>
            <UserIcon></UserIcon>
            <StyledContent>{comment.content}</StyledContent>
            </div>
            <CommentUser>@di_ed_ie</CommentUser>
        </StyledWrapper>
    )
}

export default CommentItem

