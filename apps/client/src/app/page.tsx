import { Button } from "@monorepo/ui";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen flex-col gap-10">
      <h1 className="text-4xl text-red text-center">Hello MonoRepo!</h1>
      <div className="flex ">
        <Button size="sm">Click Me!</Button>
        <Button size="md">Click Me!</Button>
      </div>
    </main>
  );
}
