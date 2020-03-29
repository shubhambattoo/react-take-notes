import React from 'react';
import './LeftMenu.scss';

export const LeftMenu = () => {
  return (
    <aside className="leftbar">
      <div className="leftbar__actions">
        <div className="leftbar__actions__item leftbar__actions__item--active">
          <div className="leftbar__actions__item__icon">
            <i className="material-icons">notes</i>
          </div>
          <div className="leftbar__actions__item__content">notes</div>
        </div>
        <div className="leftbar__actions__item">
          <div className="leftbar__actions__item__icon">
            <i className="material-icons">favorite_border</i>
          </div>
          <div className="leftbar__actions__item__content">favorites</div>
        </div>
        <div className="leftbar__actions__item">
          <div className="leftbar__actions__item__icon">
            <i className="material-icons">delete</i>
          </div>
          <div className="leftbar__actions__item__content">trash</div>
        </div>
      </div>
      <div className="leftbar__categories">
        <div className="leftbar__categories__head">Categories</div>

        <div className="leftbar__categories__category  leftbar__categories__category--active">
          <div className="leftbar__categories__category__icon">
            <i className="material-icons">folder_open</i>
          </div>
          <div className="leftbar__categories__category__content">
            Development
          </div>
          <div className="leftbar__categories__category__close">&times;</div>
        </div>

        <div className="leftbar__categories__input">
          <input type="text" name="add" id="add" placeholder="Category" />
        </div>

        <div className="leftbar__categories__add">
          <div className="leftbar__categories__add__icon">
            <i className="material-icons">add</i>
          </div>
          <div className="leftbar__categories__add__content">add category</div>
        </div>
        
      </div>
    </aside>
  );
};
