import React from 'react';
import './_sale-item.scss';

export const SaleItem = () => {
  return (
    <div className="item">
    <p className="item__name">USED Antminer S9</p>
    <span className="hide-md">Mar 2019</span>
    <span className="hide-md">Bitmain</span>
    <span className="hide-md">S9i</span>
    <span>10.5-14.5 th/s</span>
    <span className="hide-md">SHA-256</span>
    <span className="hide-md"> 8.00j/H/s</span>
    <span className="hide-md">$122.88 / day</span>
    <img className="item__img" src={"https://sun9-68.userapi.com/KZ9AGvFK6hvf0To3xmgAXvk6f4CADZN1CeQ7VA/lhyo6svoihc.jpg"} />
    <span className="item__price">$137.00 - $217.00</span>
  </div>
    )
}
