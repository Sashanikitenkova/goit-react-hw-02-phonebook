import PropTypes from 'prop-types';
import s from './ContactList.module.css'

const ContactList = ({contacts, onClick}) => {
    return (
        <ul className={s.contactList}>
            {contacts.map(({id, name, number}) => (
            <li className={s.contactItem} key={id} id={id}>
                {name}: {number}
                <button type='button' className={s.button} onClick={() => onClick(id)}>Delete</button>
            </li>
        ))}
     </ul>
    )
} 

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        })
      ), 
    onClick: PropTypes.func.isRequired,
};