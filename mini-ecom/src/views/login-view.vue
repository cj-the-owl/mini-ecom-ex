<template>
    <div>
        <form @submit.prevent="login">
            <input type="text" v-model="email" placeholder="Enter email here">
            <input type="text" v-model="password" placeholder="Enter password here">
        </form>

        <div v-if="user">
            Welcome {{ user.firstName }}
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            user() {
                return this.$store.state.user
            }
        },

        data() {
            return {
                email: "",
                password: ""
            }
        },

        methods: {
            login() {
                this.$store.dispatch("login", {
                    email: this.email,
                    password: this.password
                })
            }
        }
    }
</script>

