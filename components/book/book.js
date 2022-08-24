export default {
    computed: {
        book() {
            return this.$store.getters['getBook']
        }
    }
}