import { subtitle, title } from "@/components/primitives";
import Image from "next/image";
import bgimage from "@/public/pexels-andrejcook-131723.jpg"
import { FaClock } from "react-icons/fa";

export default function AboutPage() {
	return (
    <section className="">
      <div className=" min-h-dvh flex flex-col md:flex-row top-2 space-x-10 items-center justify-center ">
        <div>
          <p className={title()}>NatureWalks</p>
          <p className={subtitle()}>Trail Guide</p>
        </div>
        <Image
          src={bgimage}
          alt="forest"
          width={500}
          height={500}
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col space-y-8 gap-2 text-left items-center justify-center bg-slate-100 min-h-screen">
        <h1 className={title()}>Trail Overview</h1>
        <p className="text-center px-10 md:w-1/2">
          Experience the beauty of the forest reserve through guided nature
          walks and trail runs. Discover hidden gems and connect with nature
        </p>
        <div className="flex flex-col md:flex-row gap-2 px-6 *:px-6 *:bg-slate-200 *:rounded-2xl *:w-1/2">
          <div>
            <h2 className={subtitle()}>Trail Guide</h2>
            <p>
              Our trail guides are experienced hikers and runners who know the
              forest reserve like the back of their hand. They will guide you
              through the trails, pointing out interesting sights and sounds
              along the way.
            </p>
          </div>
          <div>
            <h2 className={subtitle()}>Trail Difficulty</h2>
            <p>
              Our trails range from easy to challenging, so there is something
              for everyone. Whether you are a beginner or an experienced hiker,
              you will find a trail that suits your fitness level.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col   gap-2 px-6  ">
        <p className="text-3xl text-center font-semibold">
          Essential items for a comfortable and enjoyable forest adventure.
				</p>
				<div className="grid grid-cols-4 *:rounded-xl">
{
					Array.from({ length: 20 }).map((_, index) => (
							<div key={index} className="w-48 h-56 ">
								<FaClock size={24} />
								<h1 className="">Trail Map</h1>
							</div>
						
					))
					}
				</div>
				
       
      </div>
    </section>
  );
}
