export default {
    data() {
        return {
            title: null,
            author: null,
            subject: null
        }
    },
    methods:{
        async search() {
            const value = this.orderSearch();
            if (value) {
                await this.$store.dispatch('searchBooks', { search: value });
            } else {
                console.error('No se ha incorporado valores de busqueda');
            }
        },
        orderSearch() {
            if (this.title) {
                return 'title=' + this.title.replace(/ /g,"+");
            } else if (this.author) {
                return 'author=' + this.author.replace(/ /g,"+");
            } else if (this.subject) {
                return 'q=' + this.subject.replace(/ /g,"+");
            }
        }
    }    
}