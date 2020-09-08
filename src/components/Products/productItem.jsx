import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import './productItem.scss';

export default function ProductItem({ isFavorites, isNewPrice, isSale, productImg }) {

    let history = useHistory();
    const [isFavorite, setFavorite] = useState(false);

    const favoriteHandler = () => {
        setFavorite(!isFavorite);
    }

    return (
        <>
            <section className="cards">
                <article className="card" >
                    <div className="card__info-hover">
                        <a className="detail__btn" onClick={() => history.push(`/product/${1}`)}>View Details</a>
                        <div className="card__clock-info">
                            {!isSale && <span className="card__off">23% Off</span>}
                        </div>
                        <i className="material-icons __icons" style={{ ...isFavorite && { color: 'crimson' } }} onClick={favoriteHandler}  >{isFavorite ? 'favorite' : 'favorite_border'}</i>
                    </div>

                    <div className="card__img" style={{ backgroundImage: `url(https://www.onehundredtenstore.com/wp-content/uploads/2019/03/LSA-20CP-BR2a-thumb.jpg)` }}></div>
                    <a className="card_link">
                        <div className="card__img--hover" style={{ backgroundImage: `url(https://www.onehundredtenstore.com/wp-content/uploads/2019/03/LSA-20CP-BR2a-thumb.jpg)` }}></div>
                    </a>
                    <div className="card__info">
                        <div className="card-top">
                            <span className="card__category"> Life  style</span>
                            <h3 className="card__title">Leather bag</h3>
                        </div>
                        <div className="card__bottom">
                            {!isNewPrice ? (
                                <p>
                                    <span className="card__new__price" >PKR 472</span>
                                    <br />
                                    <span className="card__old__price" >PKR 600</span>
                                </p>
                            ) :
                                <p className="card__price" >PKR 500</p>
                            }
                            <span className="card__add">Add to cart</span>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
}
