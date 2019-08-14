import React from 'react';
import {findDOMNode} from 'react-dom';
import TweenOne from 'rc-tween-one';
import {Menu, Icon, Drawer,Form,  Input, Button, Checkbox} from 'antd';
import {Link} from "react-router-dom";

const {Item, SubMenu} = Menu;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneOpen: false,
            menuHeight: 0,
            visible: false,
        };
    }

    phoneClick = () => {
        const menu = findDOMNode(this.menu);
        const phoneOpen = !this.state.phoneOpen;
        this.setState({
            phoneOpen,
            menuHeight: phoneOpen ? menu.scrollHeight : 0,
        });
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        const {dataSource, isMobile, ...props} = this.props;
        const {menuHeight, phoneOpen} = this.state;
        const navData = dataSource.Menu.children;
        const navChildren = Object.keys(navData).map((key, i) => {
            const {a, navProps} = navData[key];
            return (
                <Item {...navProps} key={i.toString()}>
                    <Link
                        {...a}
                        href={a.href}
                        to={a.href}
                        target={a.blank && '_blank'}
                    >
                        {a.children}
                    </Link>
                </Item>
            );
        });

        // user 涉及到数据，请自行替换。
        const userTitle = (
            <div {...dataSource.user} onClick={this.showDrawer}>
        <span className="img" {...dataSource.user.img}>
          <img
              src="https://zos.alipayobjects.com/rmsportal/iXsgowFDTJtGpZM.png"
              width="100%"
              height="100%"
              alt="img"
          />
        </span>
                <span>请登录</span>
            </div>
        );

        navChildren.push(
            <SubMenu className="user" title={userTitle} key="user">
                <Item key="a">用户中心</Item>
                <Item key="b">修改密码</Item>
                <Item key="c">登出</Item>
            </SubMenu>
        );
        const menuProps = {
            mode: isMobile ? 'inline' : 'horizontal',
            defaultSelectedKeys: ['0'],
            theme: isMobile ? 'dark' : 'default',
        };
        if (isMobile) {
            menuProps.openKeys = ['user'];
        }
        return (
            <TweenOne
                component="header"
                animation={{opacity: 0, type: 'from'}}
                {...dataSource.wrapper}
                {...props}
            >
                <Drawer  //右侧抽屉
                    title="登陆"
                    placement="right"
                    width={300}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{width:'100%'}} >
                                登 陆
                            </Button>
                        </Form.Item>
                    </Form>
                </Drawer>
                <div
                    {...dataSource.page}
                    className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
                >
                    <TweenOne
                        animation={{
                            x: -30,
                            delay: 100,
                            type: 'from',
                            ease: 'easeOutQuad',
                        }}
                        {...dataSource.logo}
                    >
                        <img width="100%" src={dataSource.logo.children} alt="img"/>
                    </TweenOne>
                    {isMobile && (
                        <div
                            {...dataSource.mobileMenu}
                            onClick={() => {
                                this.phoneClick();
                            }}
                        >
                            <em/>
                            <em/>
                            <em/>
                        </div>
                    )}
                    <TweenOne
                        {...dataSource.Menu}
                        animation={{x: 30, type: 'from', ease: 'easeOutQuad'}}
                        ref={(c) => {
                            this.menu = c;
                        }}
                        style={isMobile ? {height: menuHeight} : null}
                    >
                        <Menu {...menuProps}>{navChildren}</Menu>
                    </TweenOne>
                </div>
            </TweenOne>
        );
    }
}

export default Form.create()(Header);
