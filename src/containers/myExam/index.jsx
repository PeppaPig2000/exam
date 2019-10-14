import React from 'react'
import {Card, Icon,Alert} from 'antd';
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import QueueAnim from 'rc-queue-anim';
import {getTestPaper} from "../../redux/actions";


const gridStyle = {
    width: '25%',
    textAlign: 'center',
};


class myExam extends React.Component {

    componentWillMount() {
        const userId = Cookies.get('userId');
        this.props.getTestPaper(userId)
    }

    toTsetList = (testId) => {
        this.props.history.push(`/topiclist/${testId}`)
    };


    render() {
        const {testPaper} = this.props;
        return (
           <div>
               <Alert
                   message="注意"
                   description="所有考试只有一次答题机会。点击试卷后自动开始计时，请在规定的时间内完成考试，考试结束后系统将会自动交卷！请合理安排答题时间。"
                   type="warning"
                   showIcon
                   banner
                   closable
               />
               <Card title='我的考试'>
                   {/*alpha left right top bottom  scaleBig */}
                   <QueueAnim type='scaleBig' duration='450'>
                       {
                           testPaper.map(test => (
                                   <div key={test.id}>
                                       <Card
                                           onClick={() => this.toTsetList(test.id)}
                                           title={'试卷名称：' + test.testname} hoverable={true} type={"inner"}
                                           actions={[
                                               <Icon type="edit" key="edit"/>,
                                           ]}
                                       >
                                           <Card.Grid style={gridStyle}>考试编号：{test.id}</Card.Grid>
                                           <Card.Grid style={gridStyle}>开始时间：{test.startTime}</Card.Grid>
                                           <Card.Grid style={gridStyle}>结束时间：{test.endTime}</Card.Grid>
                                           <Card.Grid style={gridStyle}>考试时长：{test.duration}分钟</Card.Grid>
                                           <Card.Grid style={gridStyle}>试卷类型：{test.manualOperation}</Card.Grid>
                                           <Card.Grid style={gridStyle}>出卷人：{test.publisher}</Card.Grid>
                                       </Card>
                                       <br/>
                                   </div>
                               )
                           )
                       }
                   </QueueAnim>
               </Card>
           </div>
        )
    }
}

export default connect(
    state => ({testPaper: state.testPaper}),
    {getTestPaper}
)(myExam);