export const selectNews = state => state.news.items;
export const selectTotalPages = state => state.news.totalPages;
export const selectCurrentPage = state => state.news.page;
export const selectSearchQuery = state => state.news.search;
export const selectLoading = state => state.news.loading;
export const selectError = state => state.news.error;
