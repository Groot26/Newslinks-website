import Image from "next/image";
import img from "@/assets/Mockup-2.png";

export default function Features() {
  return (
    <div className="features-section" id="features">

      <div className="features-content">
        <h1 style={{fontSize: "44px"}}>Features</h1>
        <div className="features-list"  style={{fontSize: "20px"}}>
          <ul>
            <li>
              <strong>Comprehensive News Coverage</strong>: Get the latest and
              trending news across various categories.
            </li>
            <li>
              <strong>Easy Search</strong>: Quickly find news articles by
              keywords or topics.
            </li>
            <li>
              <strong>Trusted Sources</strong>: Access news from reputable
              publishers to ensure you get accurate information.
            </li>
            <li>
              <strong>Publisher Information</strong>: Check the source and
              publishing date of each news article.
            </li>
            <li>
              <strong>Engaging Visuals</strong>: View images related to the news
              to get a better understanding of the story.
            </li>
            <li>
              <strong>User-Friendly Interface</strong>: Enjoy a simple and
              intuitive design for a seamless news browsing experience.
            </li>
          </ul>
        </div>
      </div>

      <div className="home-image ">
        <Image src={img} alt="Image" height={500} />
      </div>


    </div>
  );
}
