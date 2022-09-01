<template>
  <v-row class="d-flex justify-center pt-4" style="
      margin: 0;
      height: 100%;
      background: #f6f6f6;
      border: 3px solid #f6f6f6;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    ">
    <div>

      <h2 class="header">Changes password</h2>
      <v-row cols="12" class="box">
        <v-col cols="6" md="5" lg="5" sm="6" xl="3">
          <div>
            <div>
              <label for="username">Laste Password</label>
              <input type="password" id="username" style="width: 260px; padding-left: 10px" />
            </div>
            <div class="fs">
              <label for="firstname">New Password</label>
              <input type="password" id="user" style="width: 260px; padding-left: 10px" />
            </div>
            <div class="fs">
              <label for="password">Confirme Password</label>
              <!-- <VuePassword v-model="password" id="password" placeholder="" style="width: 260px; padding-left: 10px"/> -->
              <input type="password" id="password" style="width: 260px; padding-left: 10px" />
            </div>

          </div>
          <div class="pt-6">
            <v-btn href="SignUp" color="blue lighten-3" dark v-bind="attrs" v-on="on">
              Changes password
            </v-btn>
          </div>
        </v-col>

      </v-row>

    </div>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>
</style>



<style scoped>
p {
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}

a {
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #476d73;
  margin-left: 15px;
}

.links {
  display: flex;
  flex-direction: row;
  margin-left: 194px;
  width: 100%;
  margin-top: 10px;
}

.header {
  text-align: center;
  font-family: "Space Grotesk", sans-serif;
  font-weight: bold;
  color: rgb(1, 1, 1);
  margin-top: 0px;
}

.fs {
  margin-top: 10px;
}

.box {
  margin: 1% 0px;
  padding: 10px;
  background: rgba(57, 92, 115, 0.22);
  border: 1px solid rgba(0, 0, 0, 0.47);
  border-radius: 10px;
  height: 400px;
}

.bg {
  background: #a4ced1;
}

label {
  color: black;
  margin-left: 10px;
  margin-top: 10px;
}

::placeholder {
  color: #ffff;
}

input {
  border: 1px solid white;
  border-radius: 5px;
  width: 253px;
  height: 32px;
}

input:focus {
  color: #ffff;
}

.colu {
  width: 300px;
}

#btn {
  color: #ffff;
  background-color: #284a5e;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-top: -26px;
  margin-left: 152px;
  border: none;
  border-radius: 2px;
}

.VuePassword__Meter {
  display: none;
}
</style>
<style>
select option {
  color: black;
}

.VuePassword__Meter {
  display: none;
}

.VuePassword__Input {
  padding: 0.5rem 0.75rem;
  border: none;
}

.VuePassword {
  width: 260px;
}

#password {
  width: 260px;
  border: 1px solid #ffff;
  border-radius: 6px;
  height: 31px;
  outline: none;
}

* {
  outline: none;
}
</style>
