import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import _ from 'lodash';
import ContactsItems from './ContactsItems';
import LoadingContactItem from './LoadingContactItem';

const Contacts = () => {
    const contactsContext = useContext(ContactContext);

    const { contacts } = contactsContext;

    return (
        <Fragment>
            {
                _.isEmpty(contacts)
                    ? <LoadingContactItem />
                    : _.map(contacts, (contact) => (
                        <ContactsItems nombre={contact.nombre} email={contact.email}/>
                    ))
            }
        </Fragment>
    )
}

export default Contacts
