import React from 'react'
import { useParams } from 'react-router-dom';

// 더미 데이터 배열
const data = [
    {
        name : "apple",
        detail : "사과입니다.",
        picture : 'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg'
    },
    {
        name :"orange",
        detail : "오렌지입니다.",
        picture : "https://cdn.pixabay.com/photo/2016/01/02/02/03/orange-1117645_960_720.jpg"
    },
    {
        name : "peach",
        detail : "복숭아입니다.",
        picture : "https://cdn.pixabay.com/photo/2017/08/11/17/41/peach-2632182_960_720.jpg"
    }
];

export default function FruitStory() {
    const { fruit } = useParams();
    const fruitData = data.find(
        (f) => (f.name === fruit)
        )
    
    return (
        <div>
            <h3>
                {fruitData.name}-Story
            </h3>
            <img
                src={fruitData.picture}
                className='fruit-img'
            />
            <p>
                {fruitData.detail}
            </p>
        </div>
    )
}