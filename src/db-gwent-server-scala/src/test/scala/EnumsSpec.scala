import com.entities.{CardRowType, TargetRowType, is}
import org.scalatest.flatspec.AnyFlatSpec

class EnumsSpec extends AnyFlatSpec:
  behavior of "CardRowType and TargetRowType 'is' extension"

  // Positive
  it should s"${CardRowType.Close.s} be ${TargetRowType.Close.s}" in
    assert(CardRowType.Close.is(TargetRowType.Close))

  it should s"${CardRowType.Ranged.s} be ${TargetRowType.Ranged.s}" in
    assert(CardRowType.Ranged.is(TargetRowType.Ranged))

  it should s"${CardRowType.CloseOrRange.s} be ${TargetRowType.Close.s}" in
    assert(CardRowType.CloseOrRange.is(TargetRowType.Close))

  it should s"${CardRowType.CloseOrRange.s} be ${TargetRowType.Ranged.s}" in
    assert(CardRowType.CloseOrRange.is(TargetRowType.Ranged))

  it should s"${CardRowType.Siege.s} be ${TargetRowType.Siege.s}" in
    assert(CardRowType.Siege.is(TargetRowType.Siege))

  // Negative
  it should s"not ${CardRowType.Close.s} be ${TargetRowType.Ranged.s}" in
    assert(!CardRowType.Close.is(TargetRowType.Ranged))

  it should s"not ${CardRowType.Close.s} be ${TargetRowType.Siege.s}" in
    assert(!CardRowType.Close.is(TargetRowType.Siege))

  it should s"not ${CardRowType.Ranged.s} be ${TargetRowType.Close.s}" in
    assert(!CardRowType.Ranged.is(TargetRowType.Close))

  it should s"not ${CardRowType.Ranged.s} be ${TargetRowType.Siege.s}" in
    assert(!CardRowType.Ranged.is(TargetRowType.Siege))

  it should s"not ${CardRowType.CloseOrRange.s} be ${TargetRowType.Siege.s}" in
    assert(!CardRowType.CloseOrRange.is(TargetRowType.Siege))

  it should s"not ${CardRowType.Siege.s} be ${TargetRowType.Close.s}" in
    assert(!CardRowType.Siege.is(TargetRowType.Close))

  it should s"not ${CardRowType.Siege.s} be ${TargetRowType.Ranged.s}" in
    assert(!CardRowType.Siege.is(TargetRowType.Ranged))
