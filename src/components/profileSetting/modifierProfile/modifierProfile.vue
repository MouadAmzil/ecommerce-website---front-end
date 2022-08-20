<template>
  <v-row
    class="d-flex justify-center pt-4"

    style="
      margin: 0;
      height: 100%;
      background: #f6f6f6;
      border: 3px solid #f6f6f6;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    "
  >
   <div>

    <h2 class="header">Let's get you started</h2>
    <v-row cols="12" class="box">
      <v-col cols="6" md="5" lg="5" sm="6" xl="3">
        <div>
          <div>
            <label for="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              style="width: 260px; padding-left: 10px"
            />
          </div>
          <div class="fs">
            <label for="firstname">Firstname</label>
            <input
              type="text"
              placeholder="Firstname"
              id="user"
              style="width: 260px; padding-left: 10px"
            />
          </div>
          <div class="fs">
            <label for="password">Create password</label>
            <VuePassword v-model="password" id="password" placeholder="" />
          </div>
          <div class="fs">
            <label for="location">Country</label>
            <country-select
              v-model="country"
              :country="country"
              topCountry="US"
              id="select"
              style="
                border: 1px solid #ffff;
                border-radius: 4px;
                padding-left: 10px;
                height: 30px;
                color: #ffff;
                height: 30px;
                width: 260px;
              "
            />
          </div>
          <div class="fs">
            <label for="genre">Genre</label>
            <input
              type="text"
              placeholder="Genre"
              id="genre"
              style="width: 260px; padding-left: 10px"
            />
          </div>
        </div>
      </v-col>
      <v-col class="" cols="6" md="5" lg="5" sm="6" xl="3">
        <div style="margin-left: 24px">
          <label for="lastname">Lastname</label>
          <input
            type="text"
            placeholder="Lastname"
            id="lastname"
            class="colu"
            style="padding-left: 10px; width: 290px"
          />
          <div class="fs">
            <label for="email">Email adress</label>
            <input
              type="email"
              id="email"
              placeholder="axz@gmail.com"
              class="colu"
              style="padding-left: 10px; width: 290px"
            />
          </div>
          <div style="margin-top: 9px">
            <label for="tel"> Phone number </label>
            <vue-tel-input
              v-model="vueTel.phone"
              v-bind="vueTel.props"
              style="
                width: 290px;
                margin-left: -1px;
                border: 1px solid rgb(255, 255, 255);
                border-radius: 6px;
                height: 32px;
              "
            ></vue-tel-input>
          </div>
          <div class="fs">
            <label for="postal">Code Postal</label>
            <input
              type="tel"
              id="postal"
              class="colu"
              placeholder="Code Postal"
              style="height: 30px; padding-left: 10px; width: 290px"
            />
          </div>
          <div class="fs">
            <label for="adress">Adresse :</label>
            <input
              type="text"
              placeholder="Adresse"
              id="adress"
              style="width: 290px; padding-left: 10px"
            />
          </div>
        </div>
      </v-col>
    </v-row>
   
    </div>
  </v-row>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    phoneNumber: "",
    email: "",
    select: "",
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
    vueTel: {
        phone: "",
        props: {
          preferredCountries: ["US", "GB"],
          placeholder: "Enter your phone",
          mode: "international",
          inputOptions: {
            showDialCode: true,
          },
          disabledFormatting: false,
          wrapperClasses: "country-phone-input",
        },
      },
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.$refs.observer.reset();
    },
  },
};
</script>

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
