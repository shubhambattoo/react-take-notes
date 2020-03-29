import React, { useContext, useState } from 'react';
import './LeftMenu.scss';
import { GlobalContext } from '../../context/GlobalState';

export const LeftMenu = () => {
  const { actions, categories, addCategory } = useContext(GlobalContext);
  const [isInputShown, setIsInputShown] = useState(false);
  const [categoryInput, setCategoryInput] = useState('');

  function handleAddCategory(e) {
    const category = {
      id: categories.length + 1,
      name: categoryInput,
      dateCreated: Date.now(),
      isActive: false
    };
    if (e.keyCode === 13) {
      addCategory(category);
      setCategoryInput('');
      setIsInputShown(false);
    }
  }

  return (
    <aside className="leftbar">
      <div className="leftbar__actions">
        {actions.map((el, i) => (
          <div
            className={
              'leftbar__actions__item ' +
              (el.isActive && 'leftbar__actions__item--active')
            }
            key={i}
            onClick={() => this.selectAction(el.id)}
          >
            <div className="leftbar__actions__item__icon">
              <i className="material-icons">{el.icon}</i>
            </div>
            <div className="leftbar__actions__item__content">{el.value}</div>
          </div>
        ))}
      </div>
      <div className="leftbar__categories">
        <div className="leftbar__categories__head">Categories</div>

        {categories.map(category => (
          <div
            className={
              'leftbar__categories__category ' +
              (category.isActive && 'leftbar__categories__category--active')
            }
            onClick={e => this.categoryActive(e, category.id)}
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
              onClick={e => this.removeCategory(e, category.id)}
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
              onChange={e => setCategoryInput(e.target.value)}
            />
          </div>
        ) : (
          <div
            className="leftbar__categories__add"
            onClick={() => setIsInputShown(true)}
          >
            <div className="leftbar__categories__add__icon">
              <i className="material-icons">add</i>
            </div>
            <div className="leftbar__categories__add__content">
              add category
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
