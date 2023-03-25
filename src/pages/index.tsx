import { Hero } from "@/components/Hero/Hero";
import { Methodology } from "@/components/Methodology/Methodology";
import { Nav } from "@/components/Nav/Nav";
import { WhatWeTeach } from "@/components/WhatWeTeach/WhatWeTeach";

export default function IndexPage() {
  return (
    <main>
      <Nav />
      <Hero />
      <WhatWeTeach />
      <Methodology />
    </main>
  );
}
