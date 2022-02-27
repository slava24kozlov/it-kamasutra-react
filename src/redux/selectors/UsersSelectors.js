export const getUsers = (state) => (
  state.usersPage.users
)

export const getCurrentPage = (state) => (
  state.usersPage.currentPage
)

export const getTotalUsersCount = (state) => (
  state.usersPage.totalUsersCount
)

export const getPageSize = (state) => (
  state.usersPage.pageSize
)

export const getIsFetching = (state) => (
  state.usersPage.isFetching
)

export const getIsFollowing = (state) => (
  state.usersPage.isFollowing
)
