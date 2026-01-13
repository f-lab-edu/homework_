export const formatPublishedDate = (date: string) => {
  const _date = new Date(date)
  if (Number.isNaN(_date.getTime())) return ''
  return _date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
