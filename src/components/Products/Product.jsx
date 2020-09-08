import React from 'react';
import './style.scss';

export default function Product({ isFavorite }) {
    return (
        <>
            <div className="product__photo">
                <div className="photo-container">
                    <div className="photo-main">
                        <div className="controls">
                            <i className="material-icons">share</i>
                            <i className="material-icons" style={{ ...isFavorite && { color: 'crimson' }}} >{isFavorite ? 'favorite' : 'favorite_border'}</i>
                        </div>
                        <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice" />
                    </div>
                    <div className="photo-album">
                        <ul>
                            <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" /></li>
                            <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" /></li>
                            <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" /></li>
                            <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
