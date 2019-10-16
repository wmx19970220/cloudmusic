import styled from 'styled-components';
import border from 'utils/border'

export const OfficeContent = styled.div`
    padding-left : .1rem
`

export const SoaringText = styled.div`
    padding : .1rem;
    font-weight : 900
`

export const SoaringList = styled.div`
    display : flex;
    margin-bottom : .1rem
`

export const SoaringListImg = styled.div`
    width : 1rem;
    img {
        width : 100%;
        height : 100%
    }
`

export const SoaringListContent = border({
    component : styled.div`
    display : flex;
    flex : 1;
    flex-direction : column;
    justify-content : space-around;

    height : 1rem;

    margin-left : 0.1rem
    p{
        font-size : 0.12rem
    }
`,
    width : '0 0 1px 0',
    style : 'solid',
    color : '#ccc',
    radius : 0
})
