import React, { useContext,useEffect } from 'react';
import { Row, Col } from 'antd';
import Contacts from '../contacts/Contacts';
import ContactContext from '../../context/contact/ContactContext';
import ContactForm from '../contacts/ContactForm';
import AuthContext from '../../context/auth/AuthContext';

const Home = () => {

    const contactsContext = useContext(ContactContext);
    const authContext = useContext(AuthContext);

    const { loadUser} = authContext;
    const {getContacts} = contactsContext;

    useEffect(() => {
        loadUser();
        getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Row gutter={16}>
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
