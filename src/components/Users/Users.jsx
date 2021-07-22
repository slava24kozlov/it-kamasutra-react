import React from 'react'
import photoUser from '../../image/photoUser.png'
import style from './Users.module.css'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={style.pagesList}>
                {pages.map((page) =>
                    <span key={page} className={props.currentPage === page ? style.currentPage : undefined}
                          onClick={() => props.onChangeCurrentPage(page)}>{page} </span>)}
            </div>

            {props.users.map(el =>
                <div key={el.id} className={style.userMain}>
                    <section className={style.userHead}>
                        <div>
                            <img src={el.photos.small != null ? el.photos.small : photoUser} alt='user avatar'/>
                        </div>
                        <div>
                            {el.followed
                                ? <button onClick={() => props.unfollow(el.id)}>UNFOLLOW</button>
                                : <button onClick={() => props.follow(el.id)}>FOLLOW</button>}
                        </div>
                    </section>
                    <section className={style.userInformation}>
                    <span>
                        <div><b>{el.name}</b></div>
                        <div>{el.status ?? <i>No status</i>}</div>
                    </span>
                    </section>
                </div>)}
        </div>);
}

export default Users;