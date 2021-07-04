import { Toast, Modal } from 'antd-mobile';

/**
 * @param {string} content 提示内容
 * @param {string} type 提示类型
 * @param {function} onClose 关闭后回调
 * @param {number} duration 自动关闭的延时，单位秒
 * @param {boolean} mask 是否显示透明蒙层，防止触摸穿透
 * @return {} 轻提示信息
 */
export function toastMsg (content, type = 'info', onClose = () => { }, duration = 2, mask = true) {
    Toast.hide();
    switch (type) {
        case 'success':
            Toast.success(content, duration, onClose, mask);
            break;
        case 'fail':
            Toast.fail(content, duration, onClose, mask);
            break;
        case 'loading':
            Toast.loading(content, duration, onClose, mask);
            break;
        case 'offline':
            Toast.offline(content, duration, onClose, mask);
            break;
        default:
            Toast.info(content, duration, onClose, mask);
            break;
    }
}

/**
 * @param {string} message 提示内容
 * @param {function} confirmCallBack 确认回调
 * @param {function} cancelCallBack 取消回调
 * @param {string} cancelText 取消文本
 * @param {string} confirmText 确认文本
 * @param {string} title 标题
 * @param {string} platform 设定组件的平台特有样式, 可选值为 android, ios， 默认为 ios
 * @return {} 对话确认框
 */
export function modalAlert (message, confirmCallBack = () => { }, cancelCallBack = () => { },cancelText = '取消', confirmText = '确定', title = '温馨提示', platform = 'ios') {
    Modal.alert(
        title,
        message,
        [
            { text: cancelText, onPress: cancelCallBack },
            { text: confirmText, onPress: confirmCallBack }
        ],
        platform
    )
}

/**
 * @param {function} func 回调函数
 * @param {number} delay 延迟时间
 * @return {} 防抖处理
*/
export function debounce (func, delay) {
    let timer = null;
    return function (...args) {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}

/**
 * @param {number} num 传入的数值
 * @param {number} decimal 需要保留的小数位
 * @return {} 保留n小数单，但是不四舍五入
*/
export function toKeepDecimal (num, decimal = 0) {
    num = num.toString();
    let index = num.indexOf('.');
    if (index !== -1) {
        num = num.substring(0, decimal + index + 1);
    } else {
        num = num.substring(0);
    }
    return parseFloat(num).toFixed(decimal);
}

/**
 * @param {Object|string|number} time日期
 * @param {string} cFormat格式
 * @return {string | null}  格式化日期  例如：parseTime(new Date(), '{y}-{m}-{d} {h}:{i}:{s}')  2021-03-09 12:07:35
*/
export function parseTime (time, cFormat) {
    if (arguments.length === 0 || !time) {
        return null;
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    let date;
    if (typeof time === 'object') {
        date = time;
    } else {
        if ((typeof time === 'string')) {
            if ((/^[0-9]+$/.test(time))) {
                time = parseInt(time);
            } else {
                time = time.replace(new RegExp(/-/gm), '/');
            }
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000;
        }
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        w: date.getDay()
    }
    const timeStr = format.replace(/{([ymdhisw])+}/g, (result, key) => {
        const value = formatObj[key];
        if (key === 'w') {
            return ['日', '一', '二', '三', '四', '五', '六'][value];
        }
        return value.toString().padStart(2, '0');
    })
    return timeStr;
}

/**
 * @param {string} phoneNum手机号码
 * @return {true/false} 验证手机号码 精准验证 第一位是1，第二位是3,4,5,7,8,9，第三位是0-9，后面8位数字
*/
export function isPhone (phoneNum) {
    return RegExp(/^1[3|4|5|7|8|9][0-9]\d{8}$/).test(phoneNum);
}

/**
 * @param {string} str邮箱
 * @return {true/false} 验证邮箱
*/
export function isEmail (str) {
    return RegExp(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/).test(str);
}

/**
 * @param {n} string
 * @return {} 返回格式化后的字符串 前面添加0 例如：formatString('5') 返回 '05'
*/
export function formatString (n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
}

/**
 * @param {string} phoneNum手机号码
 * @return {} 返回隐藏的手机号 例如:hidePhone('13917121914') 返回139****1914
*/
export function hidePhone (phoneNum) {
    let reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
    if (reg.test(phoneNum)) {
        return phoneNum.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
    }
}

/**
 * @param {number} price金额
 * @return {} 返回格式化的金额 例如：formatPrice(12345678) 返回12,345,678
 */
export function formatPrice (price) {
    let str = price.toString();
    let reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return str.replace(reg, "$1,");
}