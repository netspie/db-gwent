import org.scalatest.flatspec.AnyFlatSpec

import scala.collection.mutable.ListBuffer

import com.basic.removeIf

class ListBufferExtensionsSpec extends AnyFlatSpec:
  behavior of "removeIf"

  it should s"remove existing item successfully" in:
    assert:
      ListBuffer(3)
        .removeIf(x => x == 3)
        .isDefined
