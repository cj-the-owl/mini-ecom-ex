<template>
    <form @submit.prevent="register">
        <input type="text" v-model="firstName" placeholder="Enter firstname here">
        <input type="text" v-model="email" placeholder="Enter email here">
        <input type="text" v-model="password" placeholder="Enter passwrod here">
        <button type="submit">Register</button>
    </form>

    <div v-if="user">Welcome {{ user.firstname }}</div>
</template>

<script>
    export default {
        data() {
            return {
                firstName: "",
                email: "",
                password: "",
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
                    email: this.email,
                    password: this.password
                });
            },
        },
    }
</script>