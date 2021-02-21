export const sortValue = (value, key) => {
    const sorted = value && value?.sort((firstValue, secondValue) => {
      const textA = firstValue[key].toUpperCase()
      const textB = secondValue[key].toUpperCase()
      return textA < textB ? -1 : textA > textB ? 1 : 0
    })
    return sorted
  }