
fun<T> MutableCollection<T>.removeAndGetIf(predicate: (T) -> Boolean): T? {
    val item = this.find(predicate) ?: return null
    if (!this.removeIf(predicate))
        return null

    return item
}
