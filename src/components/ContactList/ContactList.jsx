import Contact from "../Contact/Contact";
import css from './ContactList.module.css'

export default function ContactList({ contacts, onDelete }) {
    
    
    return (
        <ul className={css.list}>
            {contacts.map((contactItem) => (
                <li key={contactItem.id}>
                    <Contact contact={contactItem} onDelete={onDelete}/>
                </li>
            ))}
        </ul>
    )
}