import axios from 'axios';

export const state = () => ({
    _booksSearch: [],
    _booksFavorites: [],
    _book: null
});

export const getters = {
    getBooks(state) {
        return (state._booksSearch.length > 0) ? state._booksSearch : JSON.parse(localStorage.getItem('books'));
    },
    getBooksFavorites(state) {
        return (state._booksFavorites.length > 0) ? state._booksFavorites : JSON.parse(localStorage.getItem('favorites'));
    },
    getBook(state) {
        return state._book ? state._book : JSON.parse(localStorage.getItem('book'));
    }
}

export const actions = {
    async searchBooks({ commit }, { search }) {
        const data = await axios.get('http://openlibrary.org/search.json?' + search);
        commit('setBooks', data.data.docs);
    },
    addFavorite({ commit }, { book }) {
        commit('setBooksFavorite', book);
    },
    viewBook({ commit }, { book }) {
        commit('setBook', book)
    }
}

export const mutations = {
    setBooks(state, books) {
        state._booksSearch = books;
        localStorage.setItem('books', JSON.stringify(state._booksSearch));
    },
    setBooksFavorite(state, book) {
        state._booksFavorites = (state._booksFavorites.length > 0) ? state._booksFavorites : JSON.parse(localStorage.getItem('favorites'));
        state._booksFavorites.push(book);
        localStorage.setItem('favorites', JSON.stringify(state._booksFavorites));
    },
    setBook(state, book) {
        state._book = book;
        localStorage.setItem('book', JSON.stringify(book));
    }
}