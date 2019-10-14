import React from 'react'
import {
    Card,
    Col,
    Row,
    Radio,
    Statistic,
    Affix,
    Checkbox,
    Input,
    Button,
    message,
} from 'antd';
import {connect} from 'react-redux'
import {getTestList} from "../../redux/actions";
import {postTestList} from '../../redux/actions'
import Cookies from 'js-cookie';

const {Countdown} = Statistic;
const {TextArea} = Input;
const userId = Cookies.get('userId');

class topicList extends React.Component {
    state = {
        TestAnswer: '',
        // time:this.props.testList.duration
    };

    // 倒计时
    time = () => {
        // 清除可能存在的定时器
        clearInterval(this.timer);
        // 创建（重新赋值）定时器
        this.timer = setInterval(() => {
            // 当前时间回显-1
            this.setState({
                time: this.state.time - 1
            }, () => {
                // 判断修改后时间是否小于1达到最小时间
                if (this.state.time <= 0) {
                    // 清除定时器
                    clearInterval(this.timer);
                    // 结束定时器循环
                    return
                }
                // 循环自调用
                this.time()
            })
        }, 1000)
    };

    componentDidMount() {
        this.time()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    componentWillMount() {
        const str = this.props.location.pathname; //topiclist/3
        const testId = str.slice(11);
        this.props.getTestList({userId, testId});
    }

    componentWillReceiveProps(nextProps) {
        // this.setState({someThings: nextProps.someThings});
        this.setState({TestAnswer: nextProps.testList})
        this.setState({time: nextProps.testList.duration * 60})
    }


    render() {
        const {testList} = this.props;
        const {singleChoiceArrayList} = testList;//单选题列表
        const {multipleChoiceArrayList} = testList;//多选题列表(包含MultipleOptions：此多选题的选项)
        const {judgeArrayList} = testList;//判断题列表
        const {subjectiveItems} = testList;//主观题列表
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        //将"2019-08-26 17:23:54",转化为标准时间
        const parserDate = function (date) {
            const t = Date.parse(date);
            if (!isNaN(t)) {
                return new Date(Date.parse(date.replace(/-/g, "/")));
            } else {
                return new Date();
            }
        };
        const {startTime} = testList;//开始时间
        const start = parserDate(startTime).getTime();//开始时间戳
        const {endTime} = testList;//结束时间
        const end = parserDate(endTime).getTime();//结束时间戳
        const mydate = new Date().getTime();
        if (start > mydate || end < mydate) {
            // this.props.history.push('/myexam');
            return (
                message.warning('该试卷不在答题时间，换套题试试吧！', 1)
            )

        }
        return (
            <div style={{background: '#ECECEC', padding: '20px'}}>
                {/*<Prompt message="请提交试卷后再离开页面，系统将不会保存您的数据！" when={true}/>*/}
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    <Col span={24}>
                        <Card title='单选题'>
                            {
                                singleChoiceArrayList ?
                                    singleChoiceArrayList.map(singleChoice => (
                                        <div key={singleChoice.id}>
                                            <Card
                                                title={<div style={{whiteSpace: 'normal'}}>{singleChoice.subject}</div>}
                                                type={"inner"}
                                                extra={singleChoice.mark + '分'}
                                            >
                                                <Radio.Group onChange={
                                                    e => {
                                                        // console.log('单选' + singleChoice.id + ':' + e.target.value);
                                                        let data = this.state.TestAnswer;
                                                        let lists = this.state.TestAnswer.singleChoiceArrayList;
                                                        // eslint-disable-next-line
                                                        lists.map(list => {
                                                                if (list.id === singleChoice.id) {
                                                                    list.choice = e.target.value;
                                                                    this.setState({
                                                                        TestAnswer: data,
                                                                        //singleChoiceArrayList:lists
                                                                    })
                                                                }
                                                            }
                                                        )
                                                    }
                                                }>
                                                    <Radio style={radioStyle} value='A'>
                                                        A. {singleChoice.choiceA}
                                                    </Radio>
                                                    <Radio style={radioStyle} value='B'>
                                                        B. {singleChoice.choiceB}
                                                    </Radio>
                                                    <Radio style={radioStyle} value='C'>
                                                        C. {singleChoice.choiceC}
                                                    </Radio>
                                                    <Radio style={radioStyle} value='D'>
                                                        D. {singleChoice.choiceD}
                                                    </Radio>
                                                </Radio.Group>
                                            </Card>
                                            <br/>
                                        </div>
                                    ))
                                    : null
                            }
                        </Card>
                        <br/>
                        <Card title='多选题'>
                            {
                                multipleChoiceArrayList ?
                                    multipleChoiceArrayList.map(multipleChoice => (
                                        <div key={multipleChoice.id}>
                                            <Card
                                                title={<div
                                                    style={{whiteSpace: 'normal'}}>{multipleChoice.subject}</div>}
                                                type={"inner"}
                                                extra={multipleChoice.mark + '分'}
                                            >
                                                <Checkbox.Group style={{width: '100%'}}
                                                                onChange={(checkedValues) => {
                                                                    // console.log(multipleChoice.id + '多选题选中的选项Id:' + checkedValues);
                                                                    let data = this.state.TestAnswer;
                                                                    let lists = this.state.TestAnswer.multipleChoiceArrayList;
                                                                    // eslint-disable-next-line
                                                                    lists.map(list => {
                                                                        if (list.id === multipleChoice.id) {
                                                                            // eslint-disable-next-line
                                                                            checkedValues.map(checked => {
                                                                                // eslint-disable-next-line
                                                                                list.multipleOptions.map(Options => {
                                                                                    if (Options.id === checked) {
                                                                                        Options.isChoose = 1
                                                                                    } else {
                                                                                        Options.isChoose = 0
                                                                                    }
                                                                                    this.setState({
                                                                                        TestAnswer: data,
                                                                                        options: lists
                                                                                    })
                                                                                });
                                                                            });


                                                                        }
                                                                    })


                                                                }}>
                                                    {
                                                        multipleChoice.multipleOptions.map(options => (
                                                                <div key={options.id}>
                                                                    <Row>
                                                                        <Col span={18}>
                                                                            <Checkbox value={options.id}>
                                                                                {options.m_option}
                                                                            </Checkbox>
                                                                        </Col>
                                                                    </Row>
                                                                </div>

                                                            )
                                                        )

                                                    }
                                                </Checkbox.Group>
                                            </Card>
                                            <br/>
                                        </div>

                                    )) : null
                            }
                        </Card>
                        <br/>
                        <Card title='判断题'>
                            {
                                judgeArrayList ?
                                    judgeArrayList.map(judge => (
                                        <div key={judge.id}>
                                            <Card
                                                title={<div style={{whiteSpace: 'normal'}}>{judge.subject}</div>}
                                                type={"inner"}
                                                extra={judge.mark + '分'}
                                            >
                                                <Radio.Group onChange={
                                                    e => {
                                                        let data = this.state.TestAnswer;
                                                        let lists = this.state.TestAnswer.judgeArrayList;
                                                        // eslint-disable-next-line
                                                        lists.map(list => {
                                                            if (list.id === judge.id) {
                                                                list.userChoice = e.target.value;
                                                                this.setState({
                                                                    TestAnswer: data
                                                                })
                                                            }
                                                        })

                                                    }
                                                }>
                                                    <Radio style={radioStyle} value='1'>
                                                        对
                                                    </Radio>
                                                    <Radio style={radioStyle} value='0'>
                                                        错
                                                    </Radio>
                                                </Radio.Group>
                                            </Card>
                                            <br/>
                                        </div>
                                    )) : null
                            }
                        </Card>
                        <br/>
                        <Card title='主观题'>
                            {
                                subjectiveItems ?
                                    // eslint-disable-next-line
                                    subjectiveItems.map((subjective =>
                                            <div key={subjective.id}>
                                                <Card
                                                    type={"inner"}
                                                    title={<div
                                                        style={{whiteSpace: 'normal'}}>{subjective.subject}</div>}
                                                    extra={subjective.mark + '分'}
                                                >
                                                    <TextArea onChange={event => {
                                                        let data = this.state.TestAnswer;
                                                        let lists = this.state.TestAnswer.subjectiveItems;
                                                        lists.map(list => {
                                                            if (list.id === subjective.id) {
                                                                list.anwser = event.target.value;
                                                                this.setState({
                                                                    TestAnswer: data
                                                                })
                                                            }
                                                        })
                                                    }}
                                                              rows={4}
                                                    />
                                                </Card>
                                            </div>
                                    )) : null
                            }
                        </Card>
                    </Col>
                    <Col>
                        <Affix offsetTop={40} style={{height: 20}}>
                            <div>
                                <Row gutter={{xs: 8, sm: 16, md: 24}}>
                                    <Col span={3}>
                                        {/*<Card>*/}
                                        {/*<Statistic*/}
                                        {/*title="剩余时间"*/}
                                        {/*value={this.state.time}*/}
                                        {/*valueStyle={{ color: '#cf1322'}}*/}

                                        {/*/>*/}
                                        {/*<Button type={"primary"} onClick={() => {*/}
                                        {/*const testAnswer = this.state.TestAnswer;*/}
                                        {/*this.props.postTestList({testAnswer, userId});*/}
                                        {/*message.success('提交成功！');*/}
                                        {/*this.props.history.push('/home');*/}
                                        {/*}*/}
                                        {/*}>交卷</Button>*/}
                                        {/*</Card>*/}
                                        <Countdown title="剩余时间"
                                                   value={Date.now() + 1000 * this.state.time}
                                                   onFinish={() => {
                                                       const testAnswer = this.state.TestAnswer;
                                                       this.props.postTestList({testAnswer, userId});
                                                       message.success('考试结束，已自动提交试卷！');
                                                       this.props.history.push('/home');
                                                   }}/>
                                        <Button type={"primary"} onClick={() => {
                                            const testAnswer = this.state.TestAnswer;
                                            this.props.postTestList({testAnswer, userId});
                                            message.success('提交成功！');
                                            this.props.history.push('/home');
                                        }
                                        }>交卷</Button>
                                    </Col>
                                </Row>
                            </div>
                        </Affix>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default connect(
    state => ({testList: state.testList}),
    {getTestList, postTestList}
)(topicList)