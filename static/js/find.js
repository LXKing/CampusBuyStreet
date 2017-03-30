/**
 * Created by Administrator on 2017/3/27.
 */
export default {
  name: 'find',
  data () {
    return {
      scrollTop: 0,
      content_title: '发现'
    }
  },
  created: function () {
    this.showNavId();
  },
  methods:{
    showNavId: function () {
      this.$emit('showNavId',2)
    },
    returnPage: function () {
      history.go(-1);
      this.$nextTick(function () {
        //记录一下滚动条的位置
        var _this = this;
        var timer = window.setInterval(function(){
          var ele = window.document.querySelector('.container-list');
          if(!ele) return;
          else {
            ele.scrollTop = _this.scrollTop;
            clearInterval(timer);
          }
        },5);
        window.setTimeout(function(){
          if(timer) clearInterval(timer);
        },2000);
      });
    },
    showTitle: function (content_title) {
      this.content_title = content_title;
    },
    returnScroll: function (scrollTop) {
     this.scrollTop = scrollTop;
    }
  },
  activated: function () {
    var ele = document.querySelector('.container-list');
    //记录一下滚动条的位置
    ele && (ele.scrollTop = this.scrollTop);
    //document.querySelector('.container-list').scrollTop = this.scrollTop;
  },
  deactivated: function () {
    var ele = document.querySelector('.container-list');
    //记录一下滚动条的位置
    ele && (this.scrollTop = ele.scrollTop);
  }
}
