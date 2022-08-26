import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import {sliderItems} from '../data.js';
import {Link} from "react-router-dom";


const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    margin: 2rem 0rem;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props)=>props.bg};
`;

const Imgcontainer = styled.div`
    height: 100%;
    width: 80%;
    flex: 1;
`;

const Image = styled.img`
    height: 100%;
    width: 120%;
`;

const InfoContainer = styled.div`
    flex: 1;  
    padding: 50px 0px;
    margin-left: 8rem;
    // top right bottom left 
    text-align: center;
`;

const Title = styled.h1`
    font-size: 50px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #3e7ddb;
    color: #f0f9ff;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const clickHandler = (direction)=> {
    if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2) 
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>clickHandler("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                    <Imgcontainer>
                        <Image src={item.img}></Image>
                    </Imgcontainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>
                        <Link to={`${item.connect}`} style={{textDecoration: "none", color: "white"}}>{item.btn}</Link>
                        </Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>clickHandler("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider;