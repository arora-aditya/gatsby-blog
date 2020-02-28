export function formatReadingTime(minutes) {
  const cups = Math.round(minutes / 2.5)
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill('🍱')
      .join('')} ${minutes} min read`
  }
  minutes *= 2
  return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`
}

export function formatPostDate(date) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date
  }

  return new Date(date).toLocaleDateString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
