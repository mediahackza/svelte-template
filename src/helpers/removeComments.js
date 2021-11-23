export function removeComments(input) {
  return input.filter((f) => f.type !== 'comment')
}
