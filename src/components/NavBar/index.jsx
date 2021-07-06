import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavBar, Icon } from 'antd-mobile';
import styles from './index.module.scss';
class headBar extends Component {
    static defaultProps = {
        isBack: true,
        isRight: false,
        rightIcon: 'gongneng'
    }
    static propTypes = {
        isBack: PropTypes.bool,
        isRight: PropTypes.bool,
        title: PropTypes.string,
        rightIcon: PropTypes.string,
        handleNavLeftClick: PropTypes.func,
        handleNavRightClick: PropTypes.func.isRequired
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
        const { isBack, isRight, title, rightIcon, handleNavLeftClick } = this.props;
        return (
            <div className={styles.nav_wrap}>
                <NavBar
                    mode="dark"
                    icon={isBack ? <Icon type="left" /> : null}
                    onLeftClick={handleNavLeftClick || this.handleDefaultBack}
                    rightContent=
                    {isRight ? <i className={"iconfont " + `${rightIcon}`} key={rightIcon} onClick={this.handleRightClick} /> : null}
                >
                    {title}
                </NavBar>
            </div>
        )
    }
}
export default withRouter(headBar)