import styled from 'styled-components'

const StyledWrapper = styled.div`
    background-color: none;
    display: block;
    line-height:160%;
    border-bottom: solid 1px #BEBEBE;
`
const StyledTitle = styled.h3`
color: #3A3A3A;
font-size:24px;
font-weight: 700;
margin-bottom:14px;
`
const StyledContent = styled.p`
font-size:20px;
color: #3A3A3A;
margin-bottom:62px;
`
const PostDate = styled.div`
display:flex;
justify-content:space-between;
padding: 0px 0px 15px 16px;
border-bottom: solid 1px #3C3C3C;
color: #808080;
font-size:18px;
font-weight:100;
`

function PostContainer(props){
    const {post} = props

    return (
        <StyledWrapper>
            <StyledTitle>{post.title}</StyledTitle>
            <StyledContent>{post.content}</StyledContent>
            {post.image && (
                <img
                    src={post.image}
                    alt="업로드 이미지"
                    style={{
                        width: '200px',
                        height:'200px',
                        borderRadius: '10px',
                        marginTop: '16px',
                        objectFit: 'cover'
                    }}
                />
            )}
            <PostDate><p>2025.3.3</p><p>@di_ed_ie</p></PostDate>
        </StyledWrapper>
    )
}

export default PostContainer

