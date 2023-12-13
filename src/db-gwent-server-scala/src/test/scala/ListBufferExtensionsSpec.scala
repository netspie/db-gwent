import org.scalatest.flatspec.AnyFlatSpec

import scala.collection.mutable.ListBuffer

import com.basic.{removeIf, isEqualTo}

class ListBufferExtensionsSpec extends AnyFlatSpec:
  behavior of "removeIf"

  it should s"remove existing item successfully" in:
    assert:
      ListBuffer(3)
        .removeIf(isEqualTo(3))
        .isDefined