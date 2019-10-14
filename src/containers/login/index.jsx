import React from 'react'
import {Form, Icon, Input, Button, Card, Alert} from 'antd';
import {connect} from 'react-redux'
import Cookies from 'js-cookie'

import {login} from '../../redux/actions'

class logins extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err) => {
            if (!err) {
                //console.log('Received values of form: ', values);
                this.props.login(this.state)
            }
        });
    };
    handleChange = () => {
        this.props.form.validateFields((err, values) => {
            this.setState(values)
        })
    }

    componentDidUpdate() {
        const userId = this.props.user.user;
        if (userId!==undefined)
        Cookies.set ("userId",userId,{expires:1}) ;
        if (userId){
            this.props.history.push("/home")
        }

    }
    // login =()=>{
    //     const userId = Cookies.get('userId');
    //     if (userId){
    //         this.props.history.push("/home")
    //     }
    // }

    render() {
        const {message} = this.props.user;
        const {getFieldDecorator} = this.props.form;
        return (
            <div style={{
                backgroundSize: 'cover',
                height: 1000,
                backgroundImage: "url(" + require("../../assets/images/bg.jpg") + ")",
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Card
                    title='登陆'
                    style={{
                        width: 350,
                    }}>
                    <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: '请输入账号!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码!'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        {
                            message ?
                                <Alert message={message} type="error"/>
                                : null
                        }

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block onClick={this.login}>
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>

        )
    }
}

const Login = Form.create({})(logins);

export default connect(
    state => ({user: state.user}),
    {login}
)(Login)