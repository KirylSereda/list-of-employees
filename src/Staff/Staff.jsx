import style from './staff.module.css'
import userPhoto from '../img/userPhoto.png'

const Staff = ({ user, ...props }) => {
    return (
        <div className={style.staff_block} >
            <div className={style.staff_inner}>
                <img className={style.staff_avatar} src={user.avatar || userPhoto} />
                <div className={style.staff_data}>
                    <div> First name: <span>{user.first_name}</span> </div>
                    <div> Last name: <span>{user.last_name}</span></div>
                    <div> Email: <span>{user.email}</span></div>
                </div>
                <span >
                    <button className={style.staff_btn} onClick={() => props.deletePost(user.id)}>Delete</button>
                </span>
            </div>
        </div>
    )
}

export default Staff;