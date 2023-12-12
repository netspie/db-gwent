import java.time.{LocalDateTime, ZoneId, ZonedDateTime}
import scala.annotation.targetName
import scala.collection.mutable.ListBuffer
import basic

object Main extends App {
}

def getUtcTimeNow: ZonedDateTime = ZonedDateTime.now.withZoneSameInstant(ZoneId.of("UTC"))



