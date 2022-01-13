<template>
  <div class="live">
    <div class="live_head">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path d="M901.12 579.584c-20.48-40.96-34.816-83.968-65.536-120.832-16.384-16.384-38.912-22.528-60.62-22.733-2.663.82-2.868 5.12-2.049 7.578 2.253 8.192-3.481 16.179-9.625 21.913-6.144 5.735-13.312 11.47-15.156 19.661-1.228 5.325 0 11.264-2.867 15.77-1.638 2.457-4.3 4.096-6.758 5.734-15.155 8.602-31.744 14.131-47.719 21.095-78.438 33.587-142.336 97.28-223.846 122.265-8.602 2.663-20.07 7.373-26.42 1.024-10.24-10.24-28.671-6.144-30.72 6.144l-1.228 4.915c7.578 27.648 21.914 52.43 38.707 75.367 1.434.41 2.867 1.229 4.096 2.662 7.987 7.987 15.36 16.589 23.347 24.781l1.434 1.434c9.42 6.553 19.456 12.492 29.696 17.817 59.392 24.576 120.832 18.432 184.32 30.72 30.72 6.144 57.344 16.384 83.968 34.816 10.24 6.144 24.576 16.384 36.864 6.144 0-12.288-2.048-26.624-4.096-38.912 0-16.384-4.096-34.816 10.24-49.152 18.432-18.432 38.912-32.768 55.296-53.248 12.288-16.384 22.528-32.768 30.72-51.2 10.24-26.419 12.288-57.139-2.048-83.763z" fill="#DBF083" />
        <path d="M731.136 286.106l-77.21-73.524L512 159.744H378.06l-138.649 58.778-84.992 90.726-16.793 107.93 9.83 52.633 40.55 63.693 62.464 66.15 22.119 24.576v39.322l-24.576 41.78 8.601 22.118 34.407-14.746 74.752-36.864 52.633-28.262L512 642.662l83.149-7.372 100.557-63.079 57.548-101.171 15.975-106.7-38.093-78.234zm-10.445 114.688c-11.469 122.675-128 185.753-236.134 212.172-12.903 3.072-18.227-16.588-5.53-19.66 97.895-23.757 210.74-79.668 221.184-192.308 1.229-13.312 21.709-13.312 20.48-.204z" fill="#7EC3FC" />
        <path d="M262.963 748.954c-6.758 0-13.517-2.253-19.251-6.759-9.83-7.782-13.926-20.48-10.445-32.563 1.229-4.506 2.663-9.216 4.096-13.926 6.144-21.504 17.203-60.416 15.565-73.728-87.245-50.176-139.264-131.072-139.264-217.293 0-147.661 150.528-267.674 335.462-267.674S784.384 257.23 784.384 404.685 633.856 672.358 448.922 672.358c-13.517 0-27.239-.614-40.756-2.048-10.854.41-50.176 25.396-76.39 41.984-18.227 11.47-37.069 23.348-53.862 32.564-4.71 2.662-9.83 4.096-14.95 4.096zM448.922 177.97c-162.407 0-294.503 101.581-294.503 226.714 0 72.294 45.466 140.697 121.856 183.5 27.853 15.565 17.613 58.164 3.277 108.545 10.035-6.144 20.48-12.698 30.72-19.047 50.79-32.153 80.486-50.176 102.195-47.923 12.083 1.229 24.576 1.638 36.66 1.638 162.406 0 294.502-101.58 294.502-226.713-.205-124.928-132.301-226.714-294.707-226.714z" fill="#888" />
        <path d="M923.443 616.243c0-58.982-30.925-115.302-84.992-155.033-9.216-6.759-21.913-4.71-28.672 4.505-6.758 9.216-4.71 21.914 4.506 28.672 44.032 32.359 68.198 75.571 68.198 121.856 0 53.658-33.997 104.448-90.726 136.397-22.119 12.288-17.613 41.574-7.987 76.8l-13.108-8.192c-39.936-25.19-63.078-39.117-81.305-37.478-9.011.819-18.432 1.228-27.648 1.228-74.343 0-143.36-28.467-184.525-76.39-7.373-8.602-20.275-9.42-28.877-2.253-8.601 7.373-9.42 20.275-2.048 28.877.82 1.024 1.843 2.048 2.663 3.072.819.41 1.638 1.024 2.457 1.843 4.506 4.506 8.807 9.216 13.312 13.927 49.357 45.26 121.037 71.68 197.223 71.68 10.24 0 20.684-.41 30.72-1.434 9.216 1.638 37.478 19.456 56.32 31.334 14.13 8.807 28.467 18.023 41.574 25.19 4.3 2.458 9.216 3.687 13.926 3.687 6.35 0 12.493-2.048 17.613-6.349 9.011-7.168 12.903-19.046 9.83-29.9-1.023-3.482-2.047-7.168-3.071-10.855-4.096-14.745-11.674-40.96-11.879-52.224 66.765-39.117 106.496-101.99 106.496-168.96z" fill="#888" />
      </svg>
      {{ statusText }}{{ clientAmount !== null  ? `（${clientAmount}）` : '' }}
    </div>

    <div class="live_body">
      <div class="live_body__item" v-for="item in messages" :key="item.time">

        <!-- 聊天内容 -->
        <div v-if="item.type === 'CHAT' || item.type === 'IMG'" class="live_body__item--chat">

          <!-- 其他人信息 -->
          <div v-if="item.id !== currentUser.id" class="left">
            <img @touchstart="onLongTouchStart(item, $event)" @touchend="onLongTouchEnd" class="avatar" v-lazy="`https://thirdqq.qlogo.cn/g?b=qq&nk=${item.qq}&s=100`" />
            <div class="msg" :class="item.type === 'IMG' ? 'isImg' : ''">
              <template v-if="item.type === 'CHAT'">{{ item.msg }}</template>
              <img @click="onPreviewImage(item.msg)" class="img" v-else v-lazy="item.msg">
            </div>
            <div class="nick">{{ item.nick }} {{ item.time | format('HH:mm:ss') }}</div>
          </div>

          <!-- 自己的信息 -->
          <div v-else class="right">
            <div class="msg" :class="item.type === 'IMG' ? 'isImg' : ''">
              <template v-if="item.type === 'CHAT'">{{ item.msg }} </template>
              <img @click="onPreviewImage(item.msg)" class="img" v-else v-lazy="item.msg">
            </div>
            <img class="avatar" v-lazy="`https://thirdqq.qlogo.cn/g?b=qq&nk=${item.qq}&s=100`" />
          </div>
        </div>

        <!-- 用户上下线动作 -->
        <div class="live_body__item--act" v-else>
          <span class="nick">{{ item.nick }}</span>
          <span class="msg">{{ item.msg }}</span>
        </div>
      </div>
    </div>

    <div class="live_foot">
      <transition name="scale">
        <div @click="tipsVisible = false; scrollToBottom();" class="live_foot__tips" v-show="tipsVisible">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M159.417 157.45L512.17 501.218l357.258-345.263 41.976 1.495L512.17 579.666 112.95 157.45h46.468zm0 281.305l352.753 343.77 357.258-344.762 41.976.992L512.17 861.472 112.95 438.755h46.468z" />
          </svg>
          新消息
        </div>
      </transition>
      <div class="live_foot__text">
        <input ref="newMsgRef" maxlength="120" @keyup.enter="onSendMessage" v-model.trim="newMsg" type="text" placeholder="有爱发言，说点儿好听的~" />
        <svg @click="onSendMessage" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path d="M910.336 56.678a92.59 92.59 0 0 0-94.551-5.155l-693.31 356.89a93.594 93.594 0 0 0 22.421 174.566l158.612 35.46a25.324 25.324 0 0 1 19.17 18.714l54.19 218.21a72.745 72.745 0 0 0 127.022 28.364l53.166-65.31a25.472 25.472 0 0 1 37.228-2.468L739.092 952.32a92.954 92.954 0 0 0 63.929 25.6 94.356 94.356 0 0 0 34.217-6.472 92.841 92.841 0 0 0 59.458-80.353l55.348-749.46a92.488 92.488 0 0 0-41.708-84.957zm-81.628 829.405a25.472 25.472 0 0 1-42.865 16.655L641.024 766.356a93.957 93.957 0 0 0-64.271-25.477q-3.072 0-6.144.2a93.932 93.932 0 0 0-66.468 34.34l-53.136 65.285a4.562 4.562 0 0 1-7.971-1.777l-54.19-218.183a93.097 93.097 0 0 0-70.441-68.808l-158.608-35.461a25.457 25.457 0 0 1-6.108-47.483l693.3-356.864a25.472 25.472 0 0 1 37.068 24.51z" fill="#556FB5" />
          <path d="M690.15 321.94L482.345 556.59a86.487 86.487 0 0 0-22.636 50.176l-7.367 74.619a34.074 34.074 0 0 0 30.571 37.253q1.71.169 3.39.169a34.084 34.084 0 0 0 33.879-30.72l7.373-74.614a17.976 17.976 0 0 1 4.807-10.537l208.84-235.832a34.079 34.079 0 0 0-51.052-45.164z" fill="#F19149" />
        </svg>
      </div>
      <div class="live_foot__image">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path d="M823.3 180.5H173.1c-18.8 0-36.4 7.5-49.6 21-13 13.4-20.2 31.5-20.2 50.8v535.4c0 19.2 7 36.6 19.6 48.9 12.6 12.2 30.4 18.9 50.2 18.9h650.2c38.5 0 69.8-31.3 69.8-69.8V250.3c0-38.5-31.3-69.8-69.8-69.8zm-671.6 71.8c0-13.1 9.4-23.3 21.3-23.3h650.2c11.8 0 21.3 9.6 21.3 21.3v535.4c0 11.8-9.6 21.3-21.3 21.3H173.1c-9.7 0-21.3-3.4-21.3-19.3V252.3z" fill="#4E30DC" />
          <path d="M798.3 625L682.8 513.7l-.6-.6-1.1-.7c-9.9-6.4-22.8-5.1-31.3 3.2L553 611.5 359.5 409.2l-.4-.4c-5.4-5.2-12.7-7.7-20.1-6.8-7.4.8-14.1 4.8-18.2 11.1L180.7 625.3c-3.7 5.6-5.1 12.3-3.8 18.9 1.3 6.6 5.1 12.3 10.7 16 11.5 7.7 27.2 4.6 34.9-7l123.1-186.6 189.5 198.2.4.4c4.7 4.5 10.9 7 17.4 7 6.6 0 12.9-2.6 17.6-7.2l98.5-97.5 98.6 97.2 1 1 1.2.8c5.6 3.7 12.4 4.9 18.9 3.5 6.6-1.4 12.2-5.3 15.9-10.9 7.2-11.4 4.4-26.2-6.3-34.1zM583.6 435.7h1.9c25.3-.9 45.9-21.5 46.9-46.8.5-13.4-4.3-26.1-13.6-35.8-9.3-9.6-21.8-15-35.2-15-26.9 0-48.8 21.9-48.8 48.8 0 13.4 5.3 25.9 14.9 35.1 9.2 8.9 21.2 13.7 33.9 13.7z" fill="#FF4E7D" />
        </svg>
        <input multiple @change="onSendImage" type="file" accept="image/png,image/jpeg,image/jpg,image/bmp,image/webp" />
      </div>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import { compressImage } from '@vbs/utils';
export default {
  data() {
    return {
      // 聊天频道
      channel: 521,
      // 本地用户信息
      currentUser: {
        id: null,
        nick: null,
        qq: null,
      },
      // 发送新消息的内容
      newMsg: '',
      // 消息列表
      messages: [],
      // 加载状态
      statusText: '',
      // 上次发送文本消息的时间
      throttleTextTime: null,
      // 上次发送图片消息的时间
      throttleImageTime: null,
      // 在线人数
      clientAmount: null,
      // 是否有新消息
      tipsVisible: false,
      // 长按事件
      longTouchTimer: null,
    };
  },
  created() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return this.$router.push('/');
    this.currentUser = JSON.parse(currentUser);
    this.connectGoEasy();
  },
  mounted() {
    document.addEventListener('scroll', () => {
      if (!this.tipsVisible) return;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = document.body.scrollHeight;
      const screenHeight = window.screen.height;
      // 如果用户向上方滚动距离超出了屏幕 4 分之 1 时，则不再进行自动滚动
      if (scrollHeight - scrollTop - screenHeight < screenHeight / 4) this.tipsVisible = false;
    });
  },
  methods: {
    /**
     * @description: 连接到GoEasy
     * @param {*}
     * @return {*}
     */
    connectGoEasy() {
      this.goEasy.connect({
        id: this.currentUser.id,
        data: this.currentUser,
        onSuccess: () => {
          this.statusText = '聊天中';
          this.loadHistory();
          this.loadOnlineUsers();
          this.listenNewMessage();
          this.listenUsersOnlineOffline();
        },
        onFailed: () => {
          this.statusText = '连接失败';
        },
        onProgress: () => {
          this.statusText = '连接中';
        },
      });
    },

    /**
     * @description: 加载在线用户
     * @param {*}
     * @return {*}
     */
    loadOnlineUsers() {
      this.pubSub.hereNow({
        channels: [this.channel],
        includeUsers: true,
        distinct: true,
        onSuccess: (result) => {
          this.clientAmount = result.content.channels[this.channel].userAmount;
        },
      });
    },

    /**
     * @description: 加载最后 20 条消息历史
     * @param {*}
     * @return {*}
     */
    loadHistory() {
      this.pubSub.history({
        channel: this.channel,
        limit: 20,
        onSuccess: ({ code, content }) => {
          if (code !== 200) return;
          const { messages } = content;
          this.messages = messages.map((item) => ({ time: item.time, ...JSON.parse(item.content) }));
          this.scrollToBottom();
        },
      });
    },

    /**
     * @description: 监听新消息
     * @param {*}
     * @return {*}
     */
    listenNewMessage() {
      this.pubSub.subscribe({
        channel: this.channel,
        onMessage: ({ time, content }) => {
          if (this.messages.some((i) => i.time === time)) return;
          const newMsg = { time, ...JSON.parse(content) };
          this.messages.push(newMsg);
          if (newMsg.id === this.currentUser.id) this.scrollToBottom();
          else this.handleMessageScroll();
        },
      });
    },

    /**
     * @description: 监听用户上下线
     * @param {*}
     * @return {*}
     */
    listenUsersOnlineOffline() {
      this.pubSub.subscribePresence({
        channel: this.channel,
        onPresence: (presenceEvents) => {
          this.clientAmount = presenceEvents.userAmount;
          presenceEvents.events.forEach((item) => {
            if (item.id === this.currentUser.id || this.messages.some((i) => i.time === item.time)) return;
            this.messages.push({
              time: item.time,
              msg: `${item.action === 'join' || item.action === 'online' ? '进入' : '离开'}了群聊`,
              type: 'ACT',
              ...item.data,
            });
            this.handleMessageScroll();
          });
        },
      });
    },

    /**
     * @description: 处理新消息滚动事件
     * @param {*}
     * @return {*}
     */
    handleMessageScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = document.body.scrollHeight;
      const screenHeight = window.screen.height;
      // 如果用户向上方滚动距离超出了屏幕 4 分之 1 时，则不再进行自动滚动
      if (scrollHeight - scrollTop - screenHeight < screenHeight / 4) {
        this.tipsVisible = false;
        this.$nextTick(() => window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' }));
      } else {
        this.tipsVisible = true;
      }
    },

    /**
     * @description: 滚动到底部
     * @param {*}
     * @return {*}
     */
    scrollToBottom() {
      this.$nextTick(() => window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' }));
    },

    /**
     * @description: 发送新消息
     * @param {*}
     * @return {*}
     */
    onSendMessage() {
      const now = +new Date();
      if (now - this.throttleTextTime < 5000) return this.$toast({ message: '请休息片刻', forbidClick: true });
      if (!this.newMsg) return this.$toast({ message: '请输入发言内容', forbidClick: true });
      if (this.newMsg.length > 120) return this.$toast({ message: '最大支持120字符', forbidClick: true });
      this.throttleTextTime = now;
      this.pubSub.publish({
        channel: this.channel,
        message: JSON.stringify({ type: 'CHAT', msg: this.newMsg, ...this.currentUser }),
        onSuccess: () => (this.newMsg = ''),
        onFailed: () => this.$toast.fail({ message: '发送失败', forbidClick: true, icon: 'warning-o' }),
      });
    },

    /**
     * @description: 发送图片
     * @param {*}
     * @return {*}
     */
    async onSendImage(event) {
      if (!event.target || !event.target.files) return;
      if (event.target.files.length > 3) return this.$toast({ message: '最大仅支持 3 张', forbidClick: true });

      // 节流
      const now = +new Date();
      if (now - this.throttleImageTime < 5000) return this.$toast({ message: '请休息片刻', forbidClick: true });
      this.throttleImageTime = now;

      for (let i = 0; i < event.target.files.length; i++) {
        const file = event.target.files[i];

        if (!/\.(png|jpeg|jpg|bmp|webp)$/i.test(file.name)) {
          this.$toast('文件类型不被支持');
          continue;
        }

        if (!file.size) {
          this.$toast('图片大小异常');
          continue;
        }

        if (file.size > 1024 * 1024 * 3) {
          this.$toast(`请上传小于 3MB 的图片`);
          continue;
        }

        this.$toast.loading({ message: '发送中...', forbidClick: true, duration: 0 });

        // 压缩图片
        const compressedFile = await compressImage(file, 0.1);

        // 上传到图床上
        const { Hash } = await this.uploadFile(compressedFile);

        this.$toast.clear();

        // 发布消息
        this.pubSub.publish({
          channel: this.channel,
          message: JSON.stringify({ type: 'IMG', msg: `https://cf-ipfs.com/ipfs/${Hash}`, ...this.currentUser }),
          onFailed: () => this.$toast.fail({ message: '发送失败', forbidClick: true, icon: 'warning-o' }),
        });
      }

      event.target.value = null;
    },

    /**
     * @description: 预览
     * @param {*}
     * @return {*}
     */
    onPreviewImage(images) {
      ImagePreview({
        images: [images],
        closeable: true,
      });
    },

    /**
     * @description: 长按事件开始
     * @param {*}
     * @return {*}
     */
    onLongTouchStart(item, e) {
      e.preventDefault();
      clearTimeout(this.loop);
      this.loop = setTimeout(() => {
        this.newMsg = `@${item.nick} ` + this.newMsg;
        this.$nextTick(() => this.$refs['newMsgRef'].focus());
      }, 550);
    },

    /**
     * @description: 长按事件结束
     * @param {*}
     * @return {*}
     */
    onLongTouchEnd() {
      clearTimeout(this.longTouchTimer);
    },

    /**
     * @description: 上传文件
     * @param {*}
     * @return {*}
     */
    uploadFile(file) {
      return new Promise((resolve, reject) => {
        const data = new FormData();
        data.append('file', file);
        fetch('https://ipfs.staging.infura.org:5001/api/v0/add?pin=true', { method: 'post', body: data })
          .then(async (response) => {
            const res = await response.text();
            resolve(JSON.parse(res));
          })
          .catch((err) => reject(err));
      });
    },
  },
  destroyed() {
    this.goEasy.disconnect();
  },
};
</script>

<style lang="less" scoped>
.live {
  padding: 50px 0 60px;
  &_head {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: #fff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    color: #303133;
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.35);
    font-weight: 500;
    font-size: 18px;
    z-index: 999;
    svg {
      width: 22px;
      margin-right: 5px;
    }
  }
  &_body {
    padding: 20px 10px;
    &__item {
      margin-bottom: 20px;
      user-select: none;

      &--chat {
        .avatar {
          width: 38px;
          height: 38px;
          object-fit: cover;
          border-radius: 5px;
        }

        .msg {
          color: #303133;
          position: relative;
          display: flex;
          align-items: center;
          text-align: justify;
          padding: 5px 10px;
          border-radius: 5px;
          line-height: 1.5;
          min-height: 38px;
          word-break: break-all;
          &.isImg {
            padding: 7px;
          }
          .img {
            max-width: 100%;
            max-height: 200px;
            border-radius: 5px;
          }
        }

        .left {
          position: relative;
          display: flex;
          justify-content: flex-start;
          padding-right: 38px;
          .nick {
            position: absolute;
            top: -6px;
            left: 48px;
            font-size: 12px;
            color: #909399;
            max-width: 150px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .msg {
            background-color: #fff;
            border: 1px solid #e4e7ed;
            margin-left: 10px;
            margin-top: 12px;
            &::before {
              content: '';
              position: absolute;
              top: 8px;
              left: -6px;
              width: 10px;
              height: 10px;
              background-color: #fff;
              border-top-left-radius: 2px;
              transform: rotate(-45deg);
              border-top: 1px solid #e4e7ed;
              border-left: 1px solid #e4e7ed;
            }
          }
        }

        .right {
          display: flex;
          justify-content: flex-end;
          padding-left: 38px;
          .msg {
            background-color: #98e165;
            margin-right: 10px;
            &::after {
              content: '';
              position: absolute;
              top: 14px;
              right: -4px;
              width: 10px;
              height: 10px;
              background-color: #98e165;
              border-radius: 2px;
              transform: rotate(45deg);
              z-index: -1;
            }
          }
        }
      }

      &--act {
        text-align: center;
        font-size: 12px;
        color: #909399;
        .nick {
          color: #5aa5f2;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &_foot {
    position: relative;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    z-index: 999;
    &__tips {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -32px;
      left: 10px;
      height: 22px;
      border-radius: 11px;
      font-size: 12px;
      padding: 0 8px;
      color: #fff;
      background-color: #4fcafc;
      svg {
        width: 12px;
        fill: #fff;
        margin-right: 5px;
      }
    }
    &__text {
      flex: 1;
      display: flex;
      align-items: center;
      position: relative;
      margin-right: 10px;
      input {
        width: 100%;
        height: 40px;
        border-radius: 20px;
        padding: 0 35px 0 15px;
        transition: color 0.25s, border-color 0.25s;
        &:focus {
          color: #6c5ce7;
          border-color: #6c5ce7;
        }
      }
      svg {
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
        width: 22px;
      }
    }
    &__image {
      position: relative;
      overflow: hidden;
      svg {
        width: 25px;
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
      }
    }
  }
}

.scale-enter-active,
.scale-leave-active {
  transition: opacity 0.35s, transform 0.35s;
}
.scale-enter,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.25) translateY(-40px);
}
</style>