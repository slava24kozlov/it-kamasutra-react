import React from 'react'
import style from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                imageUser: 'http://mhs.edu.af/en/wp-content/uploads/2015/05/unknown-user.png',
                name: 'Dwayne J',
                status: 'Our life is what our thoughts make it',
                location: {country: 'Hayward', city: 'United States'}
            },
            {
                id: 2,
                followed: false,
                imageUser: 'http://mhs.edu.af/en/wp-content/uploads/2015/05/unknown-user.png',
                name: 'Tom H',
                status: 'In the middle of difficulty lies opportunity',
                location: {country: 'Kingston upon Thames', city: 'United Kingdom'}
            },
            {
                id: 3,
                followed: true,
                imageUser: 'http://mhs.edu.af/en/wp-content/uploads/2015/05/unknown-user.png',
                name: 'Jim C',
                status: 'Life is a series of choices',
                location: {country: 'Newmarket', city: 'Canada'}
            }])
    }

    return <div>
        {props.users.map(el => (
            <div className={style.main}>
                <section className={style.userHead}>
                    <div>
                        <img src={el.imageUser} alt='image avatar'/>
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
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div><b>{el.location.country}</b></div>
                        <div><b>{el.location.city}</b></div>
                    </span>
                </section>
            </div>
        ))}
    </div>
}

export default Users;

/*let userElement = props.users.map(u =>
<User id={u.id} image={u.imageUser} followed={u.followed} name={u.name} status={u.status} country={u.country}
      city={u.city} changeFollow={props.changeFollow}/>
)*/

/*
<div className={style.main}>
    <b>Users</b>
    <div className={style.elements}>
        {userElement}
    </div>
    <div className={style.button_show_more}>
        <button>Show more</button>
    </div>
</div>
*/