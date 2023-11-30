async function getGameById(gameId: string) {
  const response = await fetch(`http://localhost:3000/api/games/${gameId}`, {
    method: "GET",
    next: {
      revalidate: 5000,
    },
  });

  return response.json();
}

export default async function Games({ params }: any) {
  const { game } = await getGameById("game-1");
  console.log(game);

  return (
    <>
      <div className="flex items-center">
        <div className="">
          <h1>{game.name}</h1>
        </div>
      </div>
    </>
  );
}
