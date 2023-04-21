import React from 'react';
import {Link, Outlet, useParams} from 'react-router-dom';

export default function StoryList() {
    const fruitName = ["apple", "orange", "peach"]

    return (
        <div>
            <h1>StoryList</h1>
            <div className='story-list'>{
                fruitName.map((fruit, i) => (
                    <Link
                        to={`/storylist/${fruit}`}
                        key={i}
                    >
                        {fruit}Story
                    </Link>
                ))
            }</div>

            <Outlet/>
        </div>
    )
}
