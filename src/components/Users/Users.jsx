import React, {useState} from 'react';
import Preloader from "../common/Preloader/Preloader";
import photoUser from '../../image/photoUser.png';
import style from './Users.module.scss';
import {NavLink} from "react-router-dom";
import Pagination from "../common/Pagination/Pagination";
import Wrapper from "../common/Wrappers/WrapperComponents";

const Users = ({
                 users,
                 currentPage,
                 totalUsersCount,
                 pageSize,
                 isFetching,
                 isFollowing,
                 onChangeCurrentPage,
                 follow,
                 unfollow
               }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleFollow = (isFollow, id) => {
    isFollow ? unfollow(id) : follow(id);
  }

  return (
    <Wrapper title="USERS">
      {isFetching ? <Preloader/> : (
        <Pagination currentPage={currentPage}
                    onChangeCurrentPage={onChangeCurrentPage}
                    pagesCount={Math.ceil(totalUsersCount / pageSize)}
                    double
        >
          <label><b>Enter a search name: </b></label>
          <input type="text" value={value} onChange={handleChange} placeholder="enter a search name"/>
          <div className={style.usersMain}>
            {users.filter(({name}) => name.startsWith(value))
              .map(({
                      id,
                      followed,
                      name,
                      status,
                      photos: {small}
                    }) =>
                <article key={id} className={style.userItem}>
                  <div>
                    <NavLink to={`/profile/${id}`}>
                      <img src={small != null ? small : photoUser} alt='user avatar'/>
                    </NavLink>
                    <button
                      data-follow={followed}
                      disabled={isFollowing.some(user => user === id)}
                      onClick={() => handleFollow(followed, id)}>
                      {followed ? "UNFOLLOW" : "FOLLOW"}
                    </button>
                  </div>
                  <div>
                    <NavLink to={`/profile/${id}`}>
                      <p><b>Name: </b>{name}</p>
                      <p><b>Status: </b>{status}</p>
                    </NavLink>
                  </div>
                </article>
              )}
          </div>
        </Pagination>
      )}
    </Wrapper>
  );
}

export default Users;