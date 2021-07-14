import React, { useState } from "react";
import { connect } from "react-redux";
import { produtSelect, produtUpdate } from "../actions";
//styles
import "../assets/styles/components/MenuSubItem.scss";
//static
import sent from "../assets/static/sent.png";

const MenuSubItem = (props) => {
  const { id, name, price, subname, bill } = props;
  const [product, setValues] = useState({});
  let [cont, setCount] = useState(1);

  const handleContSum = () => {
    setCount(cont + 1);
  };

  const handleContRest = () => {
    setCount(cont - 1);
  };

  const handleSelect = () => {
      setValues({
        ...product,
        id,
        name: `${subname} ${name}`,
        price: cont * price,
        cant: cont,
      })
  }

  const handleclick = () => {
    const tmp = bill.find((b) => b.id === id);
    console.log(tmp)
    if (tmp) {
      let _tmp = { ...tmp };
      _tmp.cant += cont;  
      _tmp.price += cont * price;
      props.produtUpdate(_tmp)
    } else {
      props.produtSelect(product);
    }
    setCount(1);
  };

  return (
    <div className="menuSubItem">
      <div className="menuSubItem__title">
        <p onClick={handleSelect}>{`${id}   ${name}`}</p>
      </div>
      <div className="menuSubItem__cant">
        <a onClick={handleContRest}>-</a>
        <p>{cont}</p>
        <a onClick={handleContSum}>+</a>
      </div>
      <div className="menuSubItem__price">
        <p>{`${price} $`}</p>
        <div className="menuSubItem__sent">
          <img
            src={sent}
            alt="sent"
            onMouseDown={handleSelect}
            onMouseUp={handleclick}
          />
        </div>
      </div>
    </div>
  );
};

const mapDispathToProps = {
  produtSelect,
  produtUpdate,
};

const mapStateToProps = (state) => {
  return {
    bill: state.bill,
  };
};

export default connect(mapStateToProps, mapDispathToProps)(MenuSubItem);
