import React from 'react';
import "../style/categories.css";
import { RightOutlined } from '@ant-design/icons';

function Categories() {
    const imgSrc = [
        {
            name: "DarazMall",
            url :"https://laz-img-cdn.alicdn.com/images/ims-web/TB1T2lqvYj1gK0jSZFuXXcrHpXa.png",
            color: "#442e93"
        },
        {
            name: "dMart",
            url :"https://laz-img-cdn.alicdn.com/images/ims-web/TB1B8X_KRr0gK0jSZFnXXbRRXXa.png"
        },
        {
            name: "Recharge & eStore",
            url :"https://laz-img-cdn.alicdn.com/images/ims-web/TB1ZH5VdRCw3KVjSZFuXXcAOpXa.png"
        },
        {
            name: "Vouchers",
            url :"https://laz-img-cdn.alicdn.com/images/ims-web/TB1XHelplr0gK0jSZFnXXbRRXXa.png"
        },
        {
            name: "Stay Informed",
            url :"https://laz-img-cdn.alicdn.com/images/ims-web/TB1YFALzBr0gK0jSZFnXXbRRXXa.png"
        }
    ]
    return (
        <div className="categories">
            {imgSrc.map((img)=> (
                <div className="category" key={img.name}>
                    <img src={img.url} alt={""}/>
                    <div>{img.name}</div>
                    <RightOutlined/>
                </div>
            ))}
        </div>
    )
}

export default Categories;
