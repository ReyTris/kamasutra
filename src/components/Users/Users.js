import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://api.kinoart.ru/storage/post/470/regular_detail_picture-104f002d75489745dd42215c4e4da5ab.jpg', followed: false, fullName: 'Nikita', status: 'i am a boss', location: {city: 'Minsk', country: 'Russia'}},
            {id: 2, photoUrl: 'https://api.kinoart.ru/storage/post/470/regular_detail_picture-104f002d75489745dd42215c4e4da5ab.jpg', followed: true, fullName: 'Sasha', status: 'i am a boss too', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl: 'https://api.kinoart.ru/storage/post/470/regular_detail_picture-104f002d75489745dd42215c4e4da5ab.jpg', followed: false, fullName: 'Andrew', status: 'i am a boss too', location: {city: 'Kiev', country: 'Ukrain'}},
        ])
    }
    
    return (
        <div>
            {
                props.users.map(item => {
                    return (
                        <div key={item.id}>
                            <span>
                                <div>
                                    <img src={item.photoUrl} className={styles.userPhoto}/>
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
                                        {item.fullName}
                                    </div>
                                    <div>
                                        {item.status}
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        {item.location.city}
                                    </div>
                                    <div>
                                        {item.location.country}
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