import defaultArticles from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import { FILTER_ARTICLES } from '../constants'

const initialState = {
  articles: defaultArticles,
  visiblesArticles: defaultArticles
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      const articles = state.articles.filter((article) => article.id !== payload.id)

      return {
        ...state,
        articles
      }

    case FILTER_ARTICLES:
      const visiblesArticles = state.articles.filter(
        (article) => payload.filter.findIndex((item) => item.value === article.id) !== -1
      )

      return {
        ...state,
        visiblesArticles
      }

    default:
      return state
  }
}
