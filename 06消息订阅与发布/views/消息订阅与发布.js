// 发布者
let pub = {
    publish: function () {
        dep.notify()
    }
}

// 订阅者
let sub1 = {
    updata: function () {
        console.log("updata");
    }
}

let sub2 = {
    delete: function () {
        console.log("delete");
    }
}

// 通知
function Dep() {
    let sub = [sub1, sub2]
    Dep.prototype.notify = function () {
        sub.forEach((sub) => {
            if (sub.updata) {
                sub.updata()
            }
            if (sub.delete) {
                sub.delete()
            }
        })
    }
}

let dep = new Dep()
pub.publish()