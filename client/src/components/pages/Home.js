import React, { useContext,useEffect } from 'react';
import { Row, Col } from 'antd';
import Contacts from '../contacts/Contacts';
import ContactContext from '../../context/contact/ContactContext';
import ContactForm from '../contacts/ContactForm';

const Home = () => {

    const contactsContext = useContext(ContactContext);
    const {getContacts} = contactsContext;

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <Row>
            <Col xs={10} sm={4} md={8} lg={12} xl={12}>
                <ContactForm />
            </Col>
            <Col xs={14} sm={20} md={16} lg={12} xl={12}>
               <Contacts />
            </Col>
        </Row>
    );
}

export default Home
