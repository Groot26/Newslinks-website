
import Image from 'next/image'
import img from "@/assets/Mockup.jpg"

export default function Home() {
  return (
    <div className="home-section" id="home">
      
      <div className="home-container">
       
        <div className="home-image ">
          
          <Image src={img} alt="Image" height={600} />
        </div>

        
        <div className="home-content">
          <h1 style={{fontSize: "44px"}}>Stay Informed, Stay Ahead with NewsLinks</h1>
          <p style={{fontSize: "22px"}}>Welcome to NewsLinks, your go-to app for the latest and trending news from around the world. With a sleek and simple user interface, NewsLinks makes it easy to stay updated on the stories that matter most to you. Whether you want to search for specific news, check the publisher, view publishing dates, or see images, NewsLinks has got you covered. Explore the news from trusted sources and never miss a beat with NewsLinks.</p>
        </div>
      </div>
    </div>
  );
}
