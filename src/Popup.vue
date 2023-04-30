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
        email: '',
        pass: '',
        encryptString: ''
    }),
    methods: {
        openTab(url) {
            // const queryParams = this.formatQueryParams({ email: this.email, password: this.pass });
            // const queryParamsEncrypt = this.formatQueryParams({ request: CryptoJS.AES.encrypt(queryParams, 'secret')});
            // const url = `https://example.com/login?${this.formatQueryParams(queryParamsEncrypt)}`;
            window.open(`https://example.com/${url}`, '_blank');
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
