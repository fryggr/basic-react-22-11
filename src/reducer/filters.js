import defaultFilters from '../fixtures'
import { FILTER_ARTICLES } from '../constants'

export default (filtersState = defaultFilters, action) => {
  const { type, payload } = action

  return filtersState
}
