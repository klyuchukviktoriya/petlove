export const selectUser = state => state.auth.user;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectAuthError = state => state.auth.error;
export const selectAuthLoading = state => state.auth.isLoading;
