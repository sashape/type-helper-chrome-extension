<template>
  <popup/>
</template>

<script>

import Popup from "@/Popup.vue";

export default {
  name: 'App',
  components: {
      Popup

  }
}
</script>

<style lang="scss">
body {
  background-color: #f7f7f8;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 1.4;
  color: #0f0f0f;
  * {
    box-sizing: border-box;
  }
}

.container {
  position: relative;
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;

  .logo {
    margin-bottom: 30px;

    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }
  }

  .title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.4;

    &:focus {
      outline: none;
      border-color: #4d90fe;
      box-shadow: 0 0 0 3px rgba(77, 144, 254, 0.1);
    }

    &::-webkit-input-placeholder {
      color: #bbb;
    }

    &:-ms-input-placeholder {
      color: #bbb;
    }

    &::-ms-input-placeholder {
      color: #bbb;
    }

    &::placeholder {
      color: #bbb;
    }

    &-label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      text-align: left;
      margin-bottom: 5px;
    }
  }

  .btn {
    display: inline-block;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 4px;
    background-color: #4d90fe;
    color: #fff;
    border: none;
    transition: all 0.3s ease;
    margin-bottom: 10px;
    &:hover {
      background-color: #4787ed;
    }

    &:active {
      transform: translateY(1px);
    }

    &:focus {
      outline: none;
    }

    i {
      margin-right: 5px;
    }
    &.outline {
      background-color: #fff;
      color: #0f0f0f;
      border: 1px solid #4d90fe;
    }
  }

  .btn-google {
    background-color: #fff;
    border: 1px solid #dcdfe6;
    color: #606469;

    &:hover {
      background-color: #fafbfc;
    }

    i {
      color: #fbbc05;
    }
  }

  .btn-facebook {
    background-color: #3b5998;

    &:hover {
      background-color: #2d4373;
    }

    i {
      color: #fff;
    }
  }
  .create-account {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #4d90fe;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
.form-group {
  margin-bottom: 15px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 auto;
}

.user-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.name {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
}

.plan {
  margin: 5px 0 0;
  font-size: 14px;
  font-weight: 600;
  color: #9b9b9b;
}

.content {
  padding: 20px;
  text-align: center;
}

.content p {
  margin: 0 0 20px;
  font-size: 16px;
  font-weight: 600;
}

</style>
