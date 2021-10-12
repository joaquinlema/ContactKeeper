import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const { addContact, updateContact, clearCurrent, current } = contactContext;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            });
        }
    }, [contactContext, current]);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const onChange = e =>
        setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = values => {
        console.log('Received values of form: ', values);
        if (current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        clearAll();
    };

    const clearAll = () => {
        clearCurrent();
    };

    const onFinishFailed = (errorInfo) => {
        alert('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                onChange={onChange}
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input name="name" value={name} placeholder='Name' />
            </Form.Item>

            <Form.Item
                label="Email"
                onChange={onChange}
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input name='email' value={email} placeholder='Email' />
            </Form.Item>

            <Form.Item
                label="Phone"
                onChange={onChange}
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input name='phone'value={phone} placeholder='Phone'/>
            </Form.Item>

            <Form.Item name='type' label="Type" rules={[{ required: true }]}>
                <Select
                    placeholder="Select a option and change input text above"
                    defaultValue='personal'
                    checked={type === 'personal'}
                    onChange={(val) => onChange({target : {name:'type',value:val}})}
                    allowClear
                >
                    <Option value="personal">personal</Option>
                    <Option value="profesional">profesional</Option>
                    <Option value="other">other</Option>
                </Select>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    {current ? 'Update Contact' : 'Add Contact'}
                </Button>
            </Form.Item>
        </Form>
    );

    //  INFO: formulario viejo estandar
    // return (
    //     <form onSubmit={onSubmit}>
    //         <h2 className='text-primary'>
    //             {current ? 'Edit Contact' : 'Add Contact'}
    //         </h2>
    //         <input
    //             type='text'
    //             placeholder='Name'
    //             name='name'
    //             value={name}
    //             onChange={onChange}
    //         />
    //         <input
    //             type='email'
    //             placeholder='Email'
    //             name='email'
    //             value={email}
    //             onChange={onChange}
    //         />
    //         <input
    //             type='text'
    //             placeholder='Phone'
    //             name='phone'
    //             value={phone}
    //             onChange={onChange}
    //         />
    //         <h5>Contact Type</h5>
    //         <input
    //             type='radio'
    //             name='type'
    //             value='personal'
    //             checked={type === 'personal'}
    //             onChange={onChange}
    //         />{' '}
    //         Personal{' '}
    //         <input
    //             type='radio'
    //             name='type'
    //             value='professional'
    //             checked={type === 'professional'}
    //             onChange={onChange}
    //         />{' '}
    //         Professional
    //         <div>
    //             <input
    //                 type='submit'
    //                 value={current ? 'Update Contact' : 'Add Contact'}
    //                 className='btn btn-primary btn-block'
    //             />
    //         </div>
    //         {current && (
    //             <div>
    //                 <button className='btn btn-light btn-block' onClick={clearAll}>
    //                     Clear
    //                 </button>
    //             </div>
    //         )}
    //     </form>
    // );
};

export default ContactForm;