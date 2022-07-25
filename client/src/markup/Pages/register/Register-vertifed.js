import { userActions } from "actions";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import './register-vertifed.css'
function RegisterVertified(props) {

    const dispatch = useDispatch();

    const e = props.match.params.e
    const v = props.match.params.v

    useEffect(() => {
        dispatch(userActions.registerVertified(e,v))
    }, [e, v,dispatch])

    return (
        <div className=" text-center spinner-container ">
            <div className="loading-spinner">
            </div>
        </div>
    )

}
export default RegisterVertified