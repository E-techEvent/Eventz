import Hero from "../../components/home/hero";

export function meta() {
  return [
    { title: "Events" },
    { name: "description", content: "The hub for all your favorite events" },
  ];
}

export default function Home() {
  return <Hero />;
}