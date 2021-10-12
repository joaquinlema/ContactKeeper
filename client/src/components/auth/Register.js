import { Form, Input, Button, Checkbox } from 'antd';
import { useContext, useState } from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Register = () => {

    const alertContext = useContext(AlertContext);

    const {setAlert} = alertContext;

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = register;

    const onChange = e =>
        setRegister({ ...register, [e.target.name]: e.target.value });

    const onFinish = (values) => {
        if(name === '' || email === '' || password === ''){
            setAlert('Ops ...', 'error','Please enter all Fields');
        } else if( password !== password2){
            setAlert('Ops ...', 'error','Passwords not match');
        }
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        setAlert('Ops ...', 'error',errorInfo);
        console.log('Failed:', errorInfo);
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
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                onChange={onChange}
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input name="name"/>
            </Form.Item>

            <Form.Item
                label="Email"
                
                onChange={onChange}
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input name="email"/>
            </Form.Item>

            <Form.Item
                label="Password"
                onChange={onChange}
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password name="password"/>
            </Form.Item>

            <Form.Item
                label="Password"
                onChange={onChange}
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password  name="password2"/>
            </Form.Item>

            <Form.Item
                
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox name="remember">Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Register;