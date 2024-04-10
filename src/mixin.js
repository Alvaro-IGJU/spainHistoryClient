export const mixin = {

    data() {
        return {
            token: null
        }
    },

    methods: {
        getToken(token) {
            this.token=token;
            return this.token;

        }
    }
}