webpackJsonp([14],{qhbN:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={data:function(){return{list:""}},components:{Head:s("oNff").a},created:function(){var t=this;""!=this.$store.state.user_id&&this.axios.get("http://elm.cangdu.org/v1/user?user_id="+this.$store.state.user_id).then(function(i){t.list=i.data})}},n={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"box"},[s("Head",[s("div",{attrs:{slot:"center"},slot:"center"},[t._v("我的")])]),t._v(" "),s("section",[s("router-link",{directives:[{name:"show",rawName:"v-show",value:""==this.$store.state.user_id,expression:"this.$store.state.user_id==''"}],staticClass:"login",attrs:{to:"/login",tag:"div"}},[s("div",[s("div",{staticClass:"left"},[s("i",{staticClass:"iconfont iconnantouxiang"})]),t._v(" "),s("div",{staticClass:"right"},[s("p",[s("span",[t._v("登录")]),t._v("/"),s("span",[t._v("注册")])]),t._v(" "),s("p",[s("i",{staticClass:"iconfont icon44"}),t._v("暂无绑定手机号")])])]),t._v(" "),s("i",{staticClass:"iconfont iconqianjin",staticStyle:{color:"#fff"}})]),t._v(" "),s("router-link",{directives:[{name:"show",rawName:"v-show",value:""!=this.$store.state.user_id,expression:"this.$store.state.user_id!=''"}],staticClass:"login",attrs:{to:"/outLogin",tag:"div"}},[s("div",[s("div",{staticClass:"left"},[s("img",{attrs:{src:"https://elm.cangdu.org/img/"+t.list.avatar}})]),t._v(" "),s("div",{staticClass:"right"},[s("p",[t._v(t._s(t.list.username))]),t._v(" "),s("p",[s("i",{staticClass:"iconfont icon44"}),t._v("暂无绑定手机号")])])]),t._v(" "),s("i",{staticClass:"iconfont iconqianjin",staticStyle:{color:"#fff"}})]),t._v(" "),s("ul",{staticClass:"money"},[s("router-link",{attrs:{to:"/money",tag:"li"}},[s("p",[s("span",[t._v("0.00")]),t._v("元")]),t._v(" "),s("p",[t._v("我的余额")])]),t._v(" "),t._m(0),t._v(" "),t._m(1)],1),t._v(" "),s("ul",{staticClass:"nav"},[s("router-link",{attrs:{to:"/zhu/zhuOrder",tag:"li"}},[s("div",[s("i",{staticClass:"iconfont icondingdan"}),t._v("我的订单")]),t._v(" "),s("i",{staticClass:"iconfont iconqianjin"})]),t._v(" "),s("router-link",{attrs:{to:"",tag:"li"}},[s("div",[s("i",{staticClass:"iconfont iconjifenshangcheng",staticStyle:{color:"#FF7247"}}),t._v("积分商城")]),t._v(" "),s("i",{staticClass:"iconfont iconqianjin"})]),t._v(" "),s("router-link",{attrs:{to:"/vip",tag:"li"}},[s("div",[s("i",{staticClass:"iconfont iconhuiyuan",staticStyle:{color:"#FFC333"}}),t._v("饿了么会员卡")]),t._v(" "),s("i",{staticClass:"iconfont iconqianjin"})])],1),t._v(" "),s("ul",{staticClass:"nav"},[s("router-link",{attrs:{to:"/server",tag:"li"}},[s("div",[s("i",{staticClass:"iconfont iconyk_fangkuai_fill",staticStyle:{color:"#008BFF"}}),t._v("服务中心")]),t._v(" "),s("i",{staticClass:"iconfont iconqianjin"})]),t._v(" "),s("router-link",{attrs:{to:"/download",tag:"li"}},[s("div",[s("i",{staticClass:"iconfont iconeliaomo",staticStyle:{color:"#008BFF"}}),t._v("下载饿了么APP")]),t._v(" "),s("i",{staticClass:"iconfont iconqianjin"})])],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("p",[i("span",[this._v("0")]),this._v("个")]),this._v(" "),i("p",[this._v("我的优惠")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",[i("p",[i("span",[this._v("0")]),this._v("分")]),this._v(" "),i("p",[this._v("我的积分")])])}]};var o=s("C7Lr")(a,n,!1,function(t){s("zZRh")},"data-v-78bcb16a",null);i.default=o.exports},zZRh:function(t,i){}});