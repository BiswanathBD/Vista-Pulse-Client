import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import LatestBlogs from "@/components/home/LatestBlogs";
import Newsletter from "@/components/home/Newsletter";
import UserReviews from "@/components/home/UserReviews";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Features />
      <LatestBlogs />
      <UserReviews/>
      <Newsletter/>
    </div>
  );
}
