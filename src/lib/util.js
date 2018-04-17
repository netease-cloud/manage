import {routers} from '../router/router.js'

let util = {

}

util.findChildren = function (name){
    return (routers.filter(item => item.name == name))[0].children
}

export default util