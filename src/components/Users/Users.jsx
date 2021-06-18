import React from 'react'
import style from './Users.module.css'
import axios from 'axios'
import photoUser from '../../image/photoUser.png'

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            }
        )
    }
    return <div>
        {props.users.map(el =>
            <div key={el.id} className={style.main}>
                <section className={style.userHead}>
                    <div>
                        <img src={el.photos.small != null ? el.photos.small : photoUser} alt='image avatar'/>
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
            </div>
        )}
    </div>
}

export default Users;


/*if (props.users.length === 0) {
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
   }*/