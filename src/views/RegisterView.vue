<template>
  <div class="Register">
    <div class="row">
      <div class="col-lg-4 mx-auto border shadow rounded p-4 mt-3">
        <h1 class="text-center mt-3 mb-4">Login</h1>
        <form @submit.prevent="doLogin">
          <div class="mb-3">
            <label for="usernameInput" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="usernameInput"
              v-model="username"
              :class="{
                'is-invalid': usernameE === true,
                'is-valid': usernameE === false,
              }"
            />
            <div class="invalid-feedback" v-if="usernameE">
              {{ usernameEM }}
            </div>
          </div>
          <div class="mb-3">
            <label for="passwordInput" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="passwordInput"
              v-model="password"
              :class="{
                'is-invalid': passwordE === true,
                'is-valid': passwordE === false,
              }"
            />
            <div class="invalid-feedback" v-if="passwordE">
              {{ passwordEM }}
            </div>
          </div>
          <div class="mb-3">
            <label for="passwordInput2" class="form-label"
              >Repeat Password</label
            >
            <input
              type="password"
              class="form-control"
              id="passwordInput2"
              v-model="password2"
              :class="{
                'is-invalid': password2E === true,
                'is-valid': password2E === false,
              }"
            />
            <div class="invalid-feedback" v-if="password2E">
              {{ password2EM }}
            </div>
          </div>
          <div>
            <button type="submit" class="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      usernameE: null,
      passwordE: null,
      password2E: null,
      usernameEM: null,
      passwordEM: null,
      password2EM: null,
    };
  },
  methods: {
    doLogin() {
      let access = true;

      if (this.username.length < 5) {
        access = false;
        if (this.username.length == 0) {
          this.usernameE = true;
          this.usernameEM = "username required";
        } else {
          this.usernameEM = "username must be at least 4 characters long.";
        }
      } else {
        this.usernameE = false;
        this.usernameEM = "";
      }

      if (this.password.length < 8) {
        access = false;
        if (this.password.length == 0) {
          this.passwordE = true;
          this.passwordEM = "Password required";
        } else {
          this.passwordEM = "Password must be at least 8 characters long.";
        }
      } else {
        this.passwordE = false;
        this.passwordEM = "";
      }

      if (this.password2.length < 8) {
        access = false;
        if (this.password2.length == 0) {
          this.password2E = true;
          this.password2EM = "Repeat password required";
        } else {
          this.passwordEM =
            "Repeat password must be at least 8 characters long.";
        }
      } else {
        this.passwordE = false;
        this.passwordEM = "";
      }

      if (this.password != this.password2) {
        access = false;
        this.passwordE = true;
        this.password2E = true;
        this.password2EM = "Password arn't same.";
      } else {
        if (!this.passwordEM && !this.password2EM) {
          this.password2EM = "";
        }
      }

      if (access) {
        this.$store.commit("login", `${this.username}:${this.password}`);
        this.$router.push("/profile");
      }
    },
  },
};
</script>