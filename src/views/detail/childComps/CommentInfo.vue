<template>
  <div class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>

    <div class="user-info" v-if="commentInfo.user">
      <img :src="commentInfo.user.avatar" alt="">
      <div class="user-name">{{commentInfo.user.uname}}</div>
    </div>

    <div class="detail-info">
      <span>{{commentInfo.content}}</span>
      <div class="other-info">
        <span>{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>

    <div class="image-info">
      <img :src="commentInfo.images" alt="">
    </div>

    <div class="replace-info">
      <div v-show="!commentInfo.canExplain">{{commentInfo.explain}}</div>
    </div>

  </div>
</template>

<script>
import {formatDate} from "../../../common/utils";

export default {
  name: "CommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters:{
    showDate(value){
      const date = new Date(value*1000)
      return formatDate(date,'yyyy/MM/dd')
    }
  }
}
</script>

<style scoped>
.comment-info{
  margin-left: 10px;
  margin-right: 10px;
  border-bottom: 5px solid rgba(100, 100, 100, 0.1);
  padding-bottom: 20px;
}

.info-header {
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
  height: 50px;
  line-height: 50px;
}

.header-title {
  position: absolute;
}

.header-more {
  position: absolute;
  left: 85%;
}

.user-info{
  display: flex;
}

.user-info img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-top: 5px;
}

.user-name{
  line-height: 55px;
  padding-left: 20px;
  font-size: 15px;
}

.detail-info{
  margin-top: 15px;
  font-size: 14px;
}

.other-info{
  margin-top: 15px;
  font-size: 13px;
  color: #969896;
}

.image-info{
  margin-top: 10px;
}

.image-info img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}

.replace-info{
  background-color: #f6f6f6;
  font-size: 13px;

}
</style>
