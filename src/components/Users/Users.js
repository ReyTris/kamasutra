import * as axios from 'axios';
import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++){
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map( item => {
                        return <span className={this.props.currentPage === item && styles.selectedPage}
                        onClick={(e) => {this.onPageChanged(item)}}>{item}</span>
                    })}
                </div>
                {
                    this.props.users.map(item => {
                        return (
                            <div key={item.id}>
                                <span>
                                    <div>
                                        <img src={item.photos.small != null ? item.photos.small : userPhoto} className={styles.userPhoto}/>
                                    </div>
                                    <div>
                                        {item.followed 
                                            ? <button onClick={() => {this.props.unfollow(item.id)}}>Unfollow</button> 
                                            : <button onClick={() => {this.props.follow(item.id)}}>Follow</button>}
                                        
                                    </div>
                                </span>
                                <span>
                                    <span>
                                        <div>
                                            {item.name}
                                        </div>
                                        <div>
                                            {item.status}
                                        </div>
                                    </span>
                                    <span>
                                        <div>
                                            {"item.location.city"}
                                        </div>
                                        <div>
                                            {"item.location.country"}
                                        </div>
                                    </span>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Users;