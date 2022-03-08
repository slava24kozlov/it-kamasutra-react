import React, {useState} from 'react'
import Preloader from "../common/Preloader/Preloader";
import photoUser from '../../image/photoUser.png'
import style from './Users.module.scss'
import {NavLink} from "react-router-dom";
import Pagination from "../common/Pagination/Pagination";
import Wrapper from "../common/Wrappers/WrapperComponents";

const Users = (props) => {
  const [value, setValue] = useState('');
  let [currentLine, setCurrentLine] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Wrapper title="USERS">
      {props.isFetching ? <Preloader/> : (
        <>
          <Pagination currentPage={props.currentPage}
                      onChangeCurrentPage={props.onChangeCurrentPage}
                      currentLine={currentLine}
                      onChangeCurrentLine={setCurrentLine}
                      pagesCount={Math.ceil(props.totalUsersCount / props.pageSize)}
          />
          <label><b>Enter a search name: </b></label>
          <input type="text" value={value} onChange={handleChange} placeholder="enter a search name"/>
          <div className={style.usersMain}>
            {props.users.filter(({name}) => name.startsWith(value)).map(el =>
              <div key={el.id} className={style.userItem}>
                <section className={style.userHead}>
                  <NavLink to={`/profile/${el.id}`} style={{textDecoration: 'none', color: 'black'}}>
                    <img src={el.photos.small != null ? el.photos.small : photoUser} alt='user avatar'/>
                  </NavLink>
                  <div>
                    {el.followed
                      ? <button
                        disabled={props.isFollowing.some(user => user === el.id)}
                        onClick={() => props.unfollow(el.id)}
                      >
                        UNFOLLOW
                      </button>
                      : <button
                        disabled={props.isFollowing.some(user => user === el.id)}
                        onClick={() => props.follow(el.id)}
                      >
                        FOLLOW
                      </button>}
                  </div>
                </section>
                <NavLink className={style.userInformation} to={`/profile/${el.id}`}
                         style={{textDecoration: 'none', color: 'black'}}>
                  <p><b>Name: </b>{el.name}</p>
                  <p><b>Status: </b>{el.status}</p>
                </NavLink>
              </div>
            )}
          </div>
          <Pagination currentPage={props.currentPage}
                      onChangeCurrentPage={props.onChangeCurrentPage}
                      currentLine={currentLine}
                      onChangeCurrentLine={setCurrentLine}
                      pagesCount={Math.ceil(props.totalUsersCount / props.pageSize)}
          />
        </>
      )}
    </Wrapper>
  );
}

export default Users;