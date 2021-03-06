import { Form, Input, Button, Checkbox } from 'antd';
import { useContext, useState, useEffect } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/AuthContext';
const Register = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { register, error, clearErrors, isAuthenticated } = authContext;
    const { setAlert } = alertContext;

    useEffect(() => {

        if(isAuthenticated){
            props.history.push('/');
        }

        if (error) {
            let errormsg = '';
            error.map(elem => errormsg.concat(` ${elem.msg}`))
            setAlert('Ops ...', 'warning', `${errormsg}`);
            clearErrors();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error,isAuthenticated,props.history]);

    const [registerForm, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = registerForm;

    const onChange = e =>
        setRegister({ ...registerForm, [e.target.name]: e.target.value });

    const onFinish = (values) => {
        if (name === '' || email === '' || password === '') {
            setAlert('Ops ...', 'error', 'Please enter all Fields');
        } else if (password !== password2) {
            setAlert('Ops ...', 'error', 'Passwords not match');
        } else {
            register(registerForm)
        }
    };

    const onFinishFailed = (errorInfo) => {
        setAlert('Ops ...', 'error', errorInfo);
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
                <Input name="name" />
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
                <Input name="email" />
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
                <Input.Password name="password" />
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
                <Input.Password name="password2" />
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