import { connect } from "react-redux";
import Staff from "./Staff";
import { getUsers, deletePost, pushUser } from '../Redux/users-reducer'
import React from "react";
import Form from "../addform/form";
import style from './staff.module.css'
import { useEffect } from "react";

const StaffContainer = (props) => {

    useEffect(() => {
        props.getUsers();
    }, []);

    return (
        <div className={style.container}>
            <div className={style.staff} >
                {props.users.map(u => <Staff user={u} key={u.id} deletePost={props.deletePost} />)}
            </div>
            <div className={style.form}>
                <Form pushUser={props.pushUser} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps, { getUsers, deletePost, pushUser })(StaffContainer);