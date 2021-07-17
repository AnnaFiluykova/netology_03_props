import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  list: PropTypes.array
}

const defaultProps = {
  list: [],
};

const Listing = (props) => {
  return (
    <div className="item-list">
      {props.list.map((item, index) => {
        let currency = item.currency_code;

        if (currency === 'EUR') {
          currency = '€'
        } else if (currency === 'USD') {
          currency = '$';
        }

        let colorQuantity = 'level-low';

        if (item.quantity > 10 && item.quantity <= 20) {
          colorQuantity = 'level-medium';
        } else if (item.quantity > 20) {
          colorQuantity = 'level-high';
        }

        return (
          <div className="item" key={`listing-item-${item.listing_id}-${index}`}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage?.url_570xN} alt='картинка' />
              </a>
            <div />
            </div>
            <div className="item-details">
              <p className="item-title">{item.title?.length > 50 ? `${item.title.substring(0, 50)}...` : item.title}</p>
              <p className="item-price">{currency} {item.price}</p>
              <p className={colorQuantity}>{item.quantity} left</p>
            </div>
          </div>
        )
      })}
    </div>
  )
};

Listing.propTypes = propTypes;

Listing.defaultProps = defaultProps;

export default Listing;
