import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Catergory = () => {
  const { categories, addCategory } = useContext(GlobalContext);
  const [isInputShown, setIsInputShown] = useState(false);
  const [categoryInput, setCategoryInput] = useState('');

  function showInput() {
    setIsInputShown(true);
  }

  function handleAddCategory(e) {
    if (e.keyCode === 13) {
      const category = {
        id: categories.length + 1,
        name: categoryInput,
        dateCreated: Date.now(),
        isActive: false,
      };
      addCategory(category);
      setCategoryInput('');
      setIsInputShown(false);
    }
  }

  function removeCategory(ev, id) {
    return new Error('Method not defined');
  }

  function changeInputVal(e) {
    setCategoryInput(e.target.value);
  }

  return (
    <div className="leftbar__categories">
      <div className="leftbar__categories__head">Categories</div>

      {categories.map((category) => (
        <div
          className={
            'leftbar__categories__category ' +
            (category.isActive && 'leftbar__categories__category--active')
          }
          key={category.id}
        >
          <div className="leftbar__categories__category__icon">
            <i className="material-icons">folder_open</i>
          </div>
          <div className="leftbar__categories__category__content">
            {category.name}
          </div>
          <div
            className="leftbar__categories__category__close"
            onClick={(e) => removeCategory(e, category.id)}
          >
            &times;
          </div>
        </div>
      ))}

      {isInputShown ? (
        <div className="leftbar__categories__input">
          <input
            type="text"
            name="add"
            id="add"
            placeholder="Category"
            autoFocus={isInputShown}
            value={categoryInput}
            onKeyUp={handleAddCategory}
            onChange={changeInputVal}
          />
        </div>
      ) : (
        <div className="leftbar__categories__add" onClick={showInput}>
          <div className="leftbar__categories__add__icon">
            <i className="material-icons">add</i>
          </div>
          <div className="leftbar__categories__add__content">add category</div>
        </div>
      )}
    </div>
  );
};

export default Catergory;
