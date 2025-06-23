import React from 'react'
import styled from 'styled-components'


const Wrap = styled.div`
    color: #e0e0e0;
    padding: 0 70px;
    margin-top: 150px;
    .Title{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .Titlecontent{

        font-size: 80px;
    }
`

const Aboutme = () => {
    return (
        <Wrap>
            <div className='Title'>
                <div className='Titlecontent'>
                    Aboutme
                </div>
                <h1 >Q & A</h1>
            </div>
            <div>
                <h3></h3>
            </div>
        </Wrap>
    )
}

export default Aboutme