<template>
        <div class="login-div">
            <div id="login_div" class="login-div">
                <h1>Login</h1>
                <br>
                <br>
                <input type="" placeholder="Username..." id="username_field"/>
                <input type="password" placeholder="Password..." id="password_field"/>

                <button id="loginButton" onclick=login()>Login</button>
                <button onclick=loadSignUpPage()>Sign Up</button>
            </div>

            <div id="signUp_div" class="signUp-div">
                <h1>Sign Up</h1>
                <br>
                <br>
                <input type="" placeholder="Username..." id="newUsername_field"/>
                <input type="email" placeholder="Email..." id="newEmail_field"/>
                <input type="password" placeholder="Password..." id="newPassword_field"/>
                <input type="password" placeholder="Confrim Password..." id="confirmPassword_field"/>

                <button id="signUpButton" onclick=signUp()>Sign Up</button>
                <button onclick=loadLoginPage()>Cancel</button>

            </div>

            <div id="user_div" class="loggedin-div">
                <h1 id="user_header">Welcome User!</h1>
                <p2 id="subscriptionStatus_para">You are currently <span>x</span></p2><br>
                <p2 id="tokens_para">You have <span>x</span> tokens</p2><br>
                <p2 id="expiration_para">Your subscription expires on x</p2><br>
                <p2 id="daysleft_para">You have x days left on your subscription!</p2>
                <br><br><br>
                <p3 id="user_para">You're currently logged in</p3>
                <button onclick="logout()">Logout</button>

            </div>
        </div>

</template>

<script lang="ts">

export default 
{
  name: "Login",
}
</script>

<style scoped>

</style>