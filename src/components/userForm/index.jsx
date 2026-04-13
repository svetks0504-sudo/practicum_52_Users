import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addUser, editUser } from "../../redux/slices/userSlice";
import styles from "./styles.module.css"
import { useEffect } from "react";



function UserForm ({editingUser, setEditingUser}){
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        setValue
    } = useForm()

    
  useEffect(() => {
       if(editingUser){
        setValue("name", editingUser.name || "");
        setValue("age", editingUser.age || "");
        setValue("email", editingUser.email || "");
       } else {
        reset();
       }
    },[editingUser])

    const onSubmit = (data) => {
        if(editingUser){
        dispatch(editUser({
            id: editingUser.id,
            ...data
        }));
        setEditingUser(null);
    }else{
        dispatch(addUser({
            id: Date.now(),
                ...data
        }))
    }
        reset();
    }

    return (
        <div className={styles.container}>
            <h1>Add User</h1>
        <form className={styles.form}
         onSubmit={handleSubmit(onSubmit)}>
            <input type="text"
            {...register("name", {required: true} )}
            placeholder="Name"/>
             <input type="number"
             {...register("age", {required: true} )}
            placeholder="Age"/>
             <input type="email"
             {...register("email", {required: true} )}
            placeholder="Email"/>

            <button className={styles.button}
            type="submit">{editingUser ? "Update" : "Add"}</button>
        </form>
        </div>
    )
}

export default UserForm;