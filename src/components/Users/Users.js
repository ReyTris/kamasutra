import React from 'react'
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.jpg'
import styles from './users.module.css';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map( item => {
                    return <span className={props.currentPage === item && styles.selectedPage}
                    onClick={(e) => {props.onPageChanged(item)}}>{item}</span>
                })}
            </div>
            {
                props.users.map(item => {
                    return (
                        <div key={item.id}>
                            <span>
                                <div>я
                                    <NavLink to={'/profile/' + item.id}>
                                        <img src={item.photos.small != null ? item.photos.small : userPhoto} className={styles.userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {item.followed 
                                        ? <button onClick={() => {props.unfollow(item.id)}}>Unfollow</button> 
                                        : <button onClick={() => {props.follow(item.id)}}>Follow</button>}
                                    
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

export default Users;