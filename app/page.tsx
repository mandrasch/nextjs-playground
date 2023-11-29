import Image from "next/image";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import ScrollAnimation from "@/components/ScrollAnimation";

// https://gsap.com/resources/React/

export default function Home() {
  return (
    <main>
      <h1>Hello, NextJS!</h1>
      <div className="flex flex-row gap-2">
        <Link href="/rockets/" className="underline">
          Rockets (GraphQL)
        </Link>
        <Link href="/planet/" className="underline" scroll={false}>
          Planet (spline)
        </Link>
      </div>

      <ProductCard></ProductCard>

      <ScrollAnimation></ScrollAnimation>
    </main>
  );
}
