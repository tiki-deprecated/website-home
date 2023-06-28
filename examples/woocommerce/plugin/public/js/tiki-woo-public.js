
const tikiSetPresentedCookie = () => {
    let expire = new Date()
    let expireTime = expire.setFullYear(expire.getFullYear() + 1)
    expire.setTime(expireTime)
    document.cookie = 'tiki_presented=1;expires=' + expire.toUTCString() + ';path=/'
}

const tikiSetUserIdCookie = (tiki_user_id) => {
    let expire = new Date()
    let expireTime = expire.setFullYear(expire.getFullYear() + 1)
    expire.setTime(expireTime)
    document.cookie = 'tiki_user_id=' + tiki_user_id + ';expires=' + expire.toUTCString() + ';path=/'
}

const tikiCreateUserCoupon = () => {
    wp.api.loadPromise.done(function () {
        fetch(`${wpApiSettings.root}tiki/v1/woocommerce/coupon/create`, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'X-WP-Nonce': wpApiSettings.nonce
            }
        });
    })
}

const tikiRemoveUserCoupon = () => {
    wp.api.loadPromise.done(function () {
        fetch(`${wpApiSettings.root}tiki/v1/woocommerce/coupon/delete`, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'X-WP-Nonce': wpApiSettings.nonce
            }
        });
    })
}

const tikiGrantPoints = () => {
    wp.api.loadPromise.done(function () {
        fetch(`${wpApiSettings.root}tiki/v1/woocommerce/loyalty/grant`, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'X-WP-Nonce': wpApiSettings.nonce
            }
        });
    })
}

const tikiRemovePoints = () => {
    wp.api.loadPromise.done(function () {
        fetch(`${wpApiSettings.root}tiki/v1/woocommerce/loyalty/remove`, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'X-WP-Nonce': wpApiSettings.nonce
            }
        });
    })
}

const tikiCookieYesAcceptCallback = () =>
    document.querySelectorAll('[data-cky-tag="detail-accept-button"]')[0].click()

const tikiCookieYesDenyCallback = () =>
    document.querySelectorAll('[data-cky-tag="revisit-consent"]')[0].click()

