import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    gap: 2rem;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Title = styled.p`
    color: #3e7ddb;
    margin-bottom: 20px;
    border: 1px solid white;
    background-color: white;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 4px;
    border-radius: 0.5rem;
    opacity: 0.8;
`;

const Button= styled.button`
    border: none;
    padding: 10px;
    background-color: #3e7ddb;
    color: white;
    cursor: pointer;
    font-weight: 600;
    border-radius: 0.5rem;
    &:hover{
        opacity: 0.8;
    }
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.category}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>
                <Link to={`/${item.title}`} style={{textDecoration: "none", color: "white"}}>Explore</Link>
            </Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem