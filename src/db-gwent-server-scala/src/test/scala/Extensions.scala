
extension (value: Any)
  def s: String =
    s"${"\\.(?!.*\\.)\\s*(.*?)\\$\\$".r
      .findFirstMatchIn(value.getClass.getName)
      .map(_.group(1))
      .get}.${value.toString}"