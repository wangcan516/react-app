import React, {Component} from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
class TabsMenu extends Component {
    render() {
        const {children,hidden,location} =this.props;
        console.log('children',children)
        return (
            <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
            <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={hidden}
                    tabBarPosition='bottom'
                >
                    <TabBar.Item
                        title="home"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={location.pathname === '/app/home'}
                        onPress={() => {
                            this.props.history.push('/app/home');
                            this.setState({
                                selectedTab: '/app/home',
                            });
                        }}
                        data-seed="logId"
                    >

                        {children}

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="person"
                        key="Koubei"
                        selected={location.pathname === '/app/person'}
                        onPress={() => {
                            this.props.history.push('/app/person')
                            this.setState({
                                selectedTab: '/app/person',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {children}
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default withRouter(TabsMenu)
