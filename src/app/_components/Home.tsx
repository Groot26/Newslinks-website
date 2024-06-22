
import Image from 'next/image'
export default function Home() {
  return (
    <div className="home-section" id="home">
      
      <div className="home-container">
       
        <div className="home-image">
          
          <Image src="/assets/phone.webp" alt="Image" width={50} height={50} />
        </div>

        
        <div className="home-content">
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod!</p>
        </div>
      </div>
    </div>
  );
}
