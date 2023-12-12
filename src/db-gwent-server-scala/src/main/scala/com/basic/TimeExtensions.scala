package com.basic

import java.time.{ZoneId, ZonedDateTime}

def getUtcTimeNow: ZonedDateTime = ZonedDateTime.now.withZoneSameInstant(ZoneId.of("UTC"))