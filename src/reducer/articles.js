import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, FILTER_ARTICLES, FILTER_DATE_ARTICLES } from '../constants'

const initialState = {
  articles: defaultArticles,
  visiblesArticles: defaultArticles,
  selectOption: null,
  selectDate: {
    from: null,
    to: null
  }
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      let visiblesArticles = state.articles.filter((article) => article.id !== payload.id)

      return {
        ...state,
        visiblesArticles
      }

    case FILTER_ARTICLES:
      const selectOption = payload.filter
      visiblesArticles = state.articles.filter(
        (article) => payload.filter.findIndex((item) => item.value === article.id) !== -1
      )

      return {
        ...state,
        visiblesArticles,
        selectOption
      }

    case FILTER_DATE_ARTICLES:
      const selectDate = payload.date
      const from = +new Date(selectDate.from)
      const to = +new Date(selectDate.to)
      visiblesArticles = state.articles.filter(
        (article) => +new Date(article.date) <= to && +new Date(article.date) >= from
      )

      return {
        ...state,
        visiblesArticles,
        selectDate
      }

    default:
      return state
  }
}
