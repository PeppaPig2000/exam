import React from 'react'
import {Descriptions, Card, Button} from 'antd';
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import {getUser} from "../../redux/actions";

class inform extends React.Component {

    componentWillMount() {
        const userId = Cookies.get('userId');
        this.props.getUser(userId)
    }

    Logout = () => {
        Cookies.remove('userId');
        this.props.history.push('/login')
    }

    render() {
        const user = this.props.state;
        // console.log(this.props.state);
        return (
            <div
            >
                <Card title='个人信息' extra={<Button type={"primary"} shape={"round"} onClick={this.Logout}>登出</Button>}>
                    <Descriptions bordered column={1}>
                        <Descriptions.Item label="账号">{user.username}</Descriptions.Item>
                        <Descriptions.Item label="姓名">{user.nickname}</Descriptions.Item>
                        <Descriptions.Item label="性别">{user.sex}</Descriptions.Item>
                        <Descriptions.Item label="手机号" span={1}>
                            {user.phone}
                        </Descriptions.Item>
                        <Descriptions.Item label="邮箱">{user.email}</Descriptions.Item>
                        <Descriptions.Item label="状态">{user.status}</Descriptions.Item>
                        <Descriptions.Item label="备注">
                            {user.remark}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>

            </div>

        )
    }
}

export default connect(
    state => ({state: state.user}),
    {getUser}
)(inform)