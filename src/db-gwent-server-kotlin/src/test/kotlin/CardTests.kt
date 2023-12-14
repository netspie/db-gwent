import com.entities.Card
import org.junit.jupiter.api.Test
import kotlin.test.assertFalse

class CardTests {
    @Test
    fun shouldDoDopeStuff() {
        assertFalse {
            Card.doDopeStuff()
        }
    }
}
