import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/react";


export default function Home() {
  return (
    <main>
      <Button className="my-2">Press me</Button>
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />

    </main>
  );
}
