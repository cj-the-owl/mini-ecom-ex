<template>
    <form @submit.prevent="register">
        <input type="text" v-model="firstName" placeholder="Enter firstname here">
        <input type="text" v-model="userEmail" placeholder="Enter email here">
        <input type="text" v-model="userPassword" placeholder="Enter passwrod here">
        <button type="submit">Register</button>
    </form>

    <div v-if="user">Welcome {{ user.firstName }}</div>
</template>

<script>
    export default {
        data() {
            return {
                firstName: "",
                userEmail: "",
                userPassword: "",
            };
        },
        computed: {
            user() {
                return this.$store.state.user;
            },
        },
        method: {
            register() {
                return this.$store.dispatch("register", {
                    firstName: this.firstName,
                    userEmail: this.userEmail,
                    userPassword: this.userPassword
                });
            },
        },
    }
</script>