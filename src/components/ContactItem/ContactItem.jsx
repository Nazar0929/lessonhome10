import { Component } from "react";
import style from "./ContactItem.module.css"


class ContactItem extends Component {
    render() {

        const {name, number, id, onDelete} = this.props

        return(
             <li className={style.item}>
                {name} : {number}
                <button className={style.btn} type="button" onClick={() => onDelete(id)}>Видалити</button>
              </li> 
        )
    }
}

export default ContactItem