import React from 'react'
import style from './Users.module.css'
import axios from 'axios'
import photoUser from '../../image/photoUser.png'

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onChangeCurrentPage = (currentPage) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
        debugger
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div className={style.pagesList}>
                {pages.map((page) =>
                    <span key={page} className={this.props.currentPage === page ? style.currentPage : undefined}
                          onClick={() => this.onChangeCurrentPage(page)}>{page} </span>)}
            </div>
            {this.props.users.map(el =>
                <div key={el.id} className={style.userMain}>
                    <section className={style.userHead}>
                        <div>
                            <img src={el.photos.small != null ? el.photos.small : photoUser} alt='user avatar'/>
                        </div>
                        <div>
                            {el.followed
                                ? <button onClick={() => this.props.unfollow(el.id)}>UNFOLLOW</button>
                                : <button onClick={() => this.props.follow(el.id)}>FOLLOW</button>}
                        </div>
                    </section>
                    <section className={style.userInformation}>
                    <span>
                        <div><b>{el.name}</b></div>
                        <div>{el.status ?? <i>No status</i>}</div>
                    </span>
                    </section>
                </div>)}
        </div>
    }
}

export default Users;