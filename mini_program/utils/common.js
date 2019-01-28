const NAV_DICT = {
    "我的信息":"userinfo",
    "优惠券":"coupon",
    "收藏的商家":"mall",
}

const promisic = function(func){
    return function(params={}){
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success:res=>{
                    resolve(res)
                },
                fail:error=>{
                    reject(error)
                }
            })
            func(args)
        })
    }
}

export {promisic, NAV_DICT}