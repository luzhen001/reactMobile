import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavBar, Icon } from 'antd-mobile';
import styles from './index.module.scss';
class headBar extends Component {
    static defaultProps = {
        isBack: true,
        isRight: false
    }
    static propTypes = {
        isBack: PropTypes.bool,
        title: PropTypes.string,
        isRight: PropTypes.bool,
        handleNavLeftClick: PropTypes.func,
        handleNavRightClick: PropTypes.func
    }
    handleDefaultBack = () => {
        const { isBack } = this.props;
        if (isBack) {
            this.props.history.go(-1);
        }
    }
    handleRightClick = () => {
        const { isRight, handleNavRightClick } = this.props;
        if (isRight) {
            handleNavRightClick();
        }
    }
    render () {
        const { isBack, title, isRight, handleNavLeftClick } = this.props;
        return (
            <div className={styles.nav_wrap}>
                <NavBar
                    mode="dark"
                    icon={isBack ? <Icon type="left" /> : null}
                    onLeftClick={handleNavLeftClick || this.handleDefaultBack}
                    rightContent=
                    {isRight ? <Icon key="1" type="ellipsis" onClick={this.handleRightClick} /> : null}
                >
                    {title}
                </NavBar>
            </div>
        )
    }
}
export default withRouter(headBar)