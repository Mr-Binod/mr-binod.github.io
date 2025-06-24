import React from 'react'
import styled from 'styled-components'


const Wrap = styled.div`
    color: #ebebeb;
    padding: 100px 70px;
    /* margin-top: 100px; */
    .Title{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .Titlecontent{
        font-size: 80px;
    }

    .Answers{
        
        width: 1000px;
        height: max-content;
        border-radius: 25px;
        /* border: 1px solid white; */
        margin: 15px auto;
        padding: 5px 20px;
        box-sizing: border-box;
        background-color: #505050;
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
            <div className='Answers'>
                <h3>Q : 풀스택 개발자 선택하는 이유는 무엇인가요? </h3>
                <p>> 저는 문제를 처음부터 끝까지 주도적으로 해결하고 싶은 마음 때문에 풀스택 개발을 선택했습니다.
                    저는 프론트엔드와 백엔드를 모두 이해하고 설계함으로써, 기능의 흐름을 전체적으로
                    파악하고, 사용자 경험부터 데이터 처리, 서버 로직까지 일관성 있는 품질을 제공할수 있다고 생각했습니다.      
                 </p>
            </div>
            <div className='Answers'>
                <h3>Q : 웹 개발자에게 어떤 특성을 선호하시나요? </h3>
                <p>> 팀원과 원활히 소통하고 협업하려는 열린 태도,
                    그리고 지속적으로 배우고 성장하려는 자세를 가장 중요하게 생각합니다.
                    웹 개발은 기술 변화가 빠르고 팀 작업이 필수이기 떄문에 
                    이러한 특성을 가진 분들이 더 좋은 품질의 결과물을 만들고 팀에 긍정적인 영향을 준다고 생각합니다.
                 </p>
            </div>
            <div className='Answers'>
                <h3>Q : 자기계발을 위해서 어떤 노력을 해왔는지? </h3>
                <p>> 저는 개발자로서 성장하기 위해 지속적인 학습과 실습을 중요하게 생각해왔습니다.
                    nomadcoders 같은 온라인 강의도 활용해서 최신 기술과 클린코드 같은 주제를 꾸준히 공부하고있습니다.
                    공부한 내용들이 블로그에도 정리하고 있습니다. 
                 </p>
            </div>
        </Wrap>
    )
}

export default Aboutme