import { DELETE_ARTICLE, INCREMENT, FILTER_ARTICLES, FILTER_DATE_ARTICLES } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function filterArticles(filter) {
  return {
    type: FILTER_ARTICLES,
    payload: { filter }
  }
}

export function filterDateArticles(date) {
  return {
    type: FILTER_DATE_ARTICLES,
    payload: { date }
  }
}
