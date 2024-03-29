# DB Gwent

&nbsp;&nbsp;&nbsp;&nbsp; Prototype of a clone of The Witcher 3: Gwent card game.

### Current State

&nbsp;&nbsp;&nbsp;&nbsp; Project is in very early stage of development and for now consists of minimal frontend project and backend domain logic layer only.  
</br>
&nbsp;&nbsp;&nbsp;&nbsp; The prototype with basic card selection and movement is available at [https://db-gwent.vercel.app/games/test](https://db-gwent.vercel.app/games/test)  
</br>
&nbsp;&nbsp;&nbsp;&nbsp; _The repository consists of few projects:_
- [Frontend Client](https://github.com/netspie/db-gwent/tree/main/src/dbgwent-gameplay-client) - Next.js/Typescript, Zustand
  - [Game Page Code](https://github.com/netspie/db-gwent/blob/main/src/dbgwent-gameplay-client/src/app/games/%5Bid%5D/page.tsx)
  - [React Components](https://github.com/netspie/db-gwent/tree/main/src/dbgwent-gameplay-client/src/app/components)
  - [State](https://github.com/netspie/db-gwent/tree/main/src/dbgwent-gameplay-client/src/app/state)
- [Backend Server](https://github.com/netspie/db-gwent/tree/main/src/db-gwent-server-kotlin) (domain layer only for now) - Kotlin
  - [Main Entry](https://github.com/netspie/db-gwent/blob/main/src/db-gwent-server-kotlin/src/main/kotlin/Main.kt) (as example of domain layer usage)
  - [Root Game Entity Class](https://github.com/netspie/db-gwent/blob/main/src/db-gwent-server-kotlin/src/main/kotlin/com/entities/Game.kt)
  - [Card Ability Classes](https://github.com/netspie/db-gwent/tree/main/src/db-gwent-server-kotlin/src/main/kotlin/com/entities/abilities)
