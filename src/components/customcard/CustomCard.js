import React from 'react';
import './style.scss';
const CustomCard = ({ item }) => {
  return (
    <div className={item.color ? 'cstm-card clrcard' : 'cstm-card'}>
      <div className="position-relative">
        <div class="crd-img">
          <img src={item.img} alt="" />
        </div>
        <h4>{item.title}</h4>
        {item.desc}
      </div>
    </div>
  );
};
export default CustomCard;
