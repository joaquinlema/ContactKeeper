import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/ContactContext';
import _ from 'lodash';
import ContactsItems from './ContactsItems';
import LoadingContactItem from './LoadingContactItem';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const Contacts = () => {
    const contactsContext = useContext(ContactContext);

    const { contacts } = contactsContext;

    return (
        <Fragment>
            {
                (_.isEmpty(contacts))
                    ? <LoadingContactItem loading={true} />
                    :
                    <TransitionGroup>
                        {_.map(contacts, (contact, index) => (
                            <CSSTransition
                                key={index}
                                timeout={500}
                                classNames="item"
                            >   
                                <ContactsItems nombre={contact.nombre} email={contact.email} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
            }
        </Fragment>
    )
}

export default Contacts
