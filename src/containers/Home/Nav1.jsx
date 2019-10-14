import React from 'react';
import {findDOMNode} from 'react-dom';
import TweenOne from 'rc-tween-one';
import {Menu} from 'antd';
import {Link} from "react-router-dom";

const {Item} = Menu;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneOpen: false,
            menuHeight: 0,
            visible: false,
        };
    };

    phoneClick = () => {
        const menu = findDOMNode(this.menu);
        const phoneOpen = !this.state.phoneOpen;
        this.setState({
            phoneOpen,
            menuHeight: phoneOpen ? menu.scrollHeight : 0,
        });
    };



    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    render() {
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

        // user

        const menuProps = {
            mode: isMobile ? 'inline' : 'horizontal',
            defaultSelectedKeys: ['0'],
            theme: isMobile ? 'dark' : 'default',
        };
        if (isMobile) {
            menuProps.openKeys = ['user'];
        }

        return (
            <div>
                <TweenOne
                    component="header"
                    animation={{opacity: 0, type: 'from'}}
                    {...dataSource.wrapper}
                    {...props}
                >
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
                            <a href={'http://www.zzuli.edu.cn/'}><img width="150%" src={dataSource.logo.children} alt="img"/></a>
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
            </div>

        );
    }
}

export default Header