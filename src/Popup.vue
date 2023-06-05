<template>
  <div class="container">
    <div class="logo"><img src="assets/icons/icon128.png" alt="Logo">
    </div>
    <div
        v-if="!isLogged"
    >
      <a href="#" class="create-account">Create account</a>

      <div class="form-group">
        <div class="title">Log in to your account</div>
        <button
            @click="openTab('login')"
            type="submit" id="submit" class="btn btn-primary"><i class="fas fa-sign-in-alt"></i>Log in</button>
      </div>
      <div class="form-group">
        <div class="title">Or sigh up</div>
        <button
            @click="openTab('register')"
            type="submit" id="submit" class="btn btn-primary outline"><i class="fas fa-sign-in-alt"></i>Sigh Up</button>
      </div>
    </div>
    <div v-else>
      <div class="header">
        <img class="avatar" src="assets/images/male-avatar.jpg" alt="User Avatar">
        <div class="user-info">
          <h3 class="name">John Doe</h3>
          <p class="plan">Starter Plan</p>
        </div>
      </div>
      <div class="content">
        <p>You can now access all the features of our Starter Plan.</p>
        <button
            @click="openTab('account')"
            type="submit" id="submit" class="btn btn-primary outline"><i class="fas fa-sign-in-alt"></i>Account</button>

        <input type="text">
        <div
            @click="loaded = !loaded"
            :class="{'loaded': loaded}"
            class="loader">
          <div class="drop"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import CryptoJS from 'crypto-js';
export default {
    name: 'Popup',
    components: {
    },
    data: () => ({
        host: 'type.1291053-ck68557.tw1.ru',
        email: '',
        pass: '',
        encryptString: '',
        loaded: false
    }),
    methods: {
        openTab(url) {
            console.log(this.$root)
            // const queryParams = this.formatQueryParams({ email: this.email, password: this.pass });
            // const queryParamsEncrypt = this.formatQueryParams({ request: CryptoJS.AES.encrypt(queryParams, 'secret')});
            // const url = `https://example.com/login?${this.formatQueryParams(queryParamsEncrypt)}`;
            // window.open(`https://example.com/${url}`, '_blank');
        },
        // formatQueryParams(params) {
        //     return Object.keys(params)
        //         .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        //         .join('&');
        // },
        openSighUpTab() {
            window.open('https://example.com/sighup', '_blank');
        },
        getCookie(name) {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.startsWith(`${name}=`)) {
                    return cookie.substring(name.length + 1, cookie.length);
                }
            }
            return null;
        }
    },
    computed: {
      isLogged() {
          return this.getCookie('TH_islogged');
      }
    },
    created() {
        document.cookie = "TH_islogged=true; expires=Sat, 30 Apr 2045 23:59:59 GMT; path=/";
        console.log(this.getCookie('TH_islogged'))
    }

}
</script>
<style>
.loader {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #ccc;
    animation: rotate 2s linear infinite;
    overflow: hidden;
}

.drop {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #007bff;
    border-radius: 50%;
    animation: drop 2s ease-in-out infinite;
}
.loader.loaded .drop {
    animation: fill 0.5s ease-out forwards;
}
.loader.loaded .drop {
     animation: fill 0.5s ease-out forwards;
 }
@keyframes rotate {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes drop {
    0% {
        transform: translate(-50%, -50%) translateX(0) rotate(0deg);
    }
    50% {
        transform: translate(-50%, -50%) translateX(-calc(25px * cos(45deg))) rotate(180deg);
    }
    100% {
        transform: translate(-50%, -50%) translateX(0) rotate(360deg);
    }
}

@keyframes fill {
    0% {
        transform: translate(-50%, -50%) translateX(-20px) scale(1);
    }
    100% {
        transform: translate(-50%, -50%) translateX(-20px) scale(20);
    }
}
</style>