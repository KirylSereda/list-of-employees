import { connect } from "react-redux";
import Staff from "./Staff";
import { getUsers, deletePost, pushUser } from '../Redux/users-reducer'
import React from "react";
import Form from "../addform/form";
import style from './staff.module.css'

class StaffContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div className={style.container}>
                <div className={style.staff} >
                    {this.props.users.map(u => <Staff  user={u} key={u.id} deletePost={this.props.deletePost} />)}
                </div>
                <div  className={style.form}>
                    <Form pushUser={this.props.pushUser} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps, { getUsers, deletePost, pushUser })(StaffContainer);