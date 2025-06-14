import logo from "./assets/Dummy Logo.png"
import doctor from "./assets/business-3d-waving-goodbye-man-1-close-up 1.png"
import details from "./assets/Details.png"
import photo from "./assets/Photo.png"
import frame from "./assets/Frame.png"
import frame1 from "./assets/Frame — копия.png"
import frame2 from "./assets/Frame — копия 2.png"
import dashboard from "./assets/Dashboard.png"
import frame3 from "./assets/Frame 3.png"
import frame5 from "./assets/Frame 5.png"
import frame6 from "./assets/Frame 6.png"
import frame8 from "./assets/Frame 8.png"
import left from "./assets/Left.png"
import right from "./assets/Right.png"
import rec6 from "./assets/Rectangle 6.png"
import rec8 from "./assets/Rectangle 8.png"
import rec7 from "./assets/Rectangle 7.png"
import joez from "./assets/joez.png"
import "./App.css"





export default function App() {
  return (
    <div>
      <header>
        <div className="flex justify-between items-center">
          <img src={logo} alt="" />
          <ul className="flex gap-[20px]">
            <li>About</li>
            <li>Services</li>
            <li>Client</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <section className="flex justify-between items-center">
          <aside className="pl-[75px] flex flex-col gap-[30px] text-white">
            <h1 className="text-[50px] font-bold">Go digital with us</h1>
            <p className="text-[18px]">We have designed hundreds of websites and helped <br /> improve their online performance through SEO, <br /> SEM and Social Media Marketing</p>
            <button className="bg-white text-black p-[20px] rounded-[35px]">See Portofolio</button>
          </aside>
          <aside>
            <img className="rounded-[35px]" src={doctor} alt="" />
          </aside>
        </section>
      </header>
      <main className="mb-[50px]">
        <section className="bg-[#14213D] text-white flex flex-col justify-center pl-[80px] gap-[20px] w-[80%] h-[326px] rounded-[35px] relative top-[-100px] left-[150px]">
          <h1 className="text-[36px] font-medium">We are experienced</h1>
          <p className="text-[18px]">We have been around for a long time since 2010, thousands of products have been created, we are <br /> balways here to provide new innovations for you</p>
        </section>
        <section className="flex flex-col gap-[30px] items-center">
          <h1 className="text-[36px]">Client</h1>
          <p className="text-[18px]">Using Our Experience To Make Your Digital Experience Brighter</p>
          <img src={details} alt="" />
        </section>
        <section className="flex relative top-[50px] gap-[100px] items-center">
          <aside>
            <img src={photo} alt="" />
          </aside>
          <aside className="flex flex-col gap-[30px]">
            <div>
              <p className="text-[18px]">Who We Help</p>
              <h1 className="text-[36px]">Specific challenges require <br /> specific solutions</h1>
              <p className="text-[18px]">Some of the industries our digital agency specialises in</p>
            </div>
            <div className="flex flex-wrap w-[90%] gap-[80px]">
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center">
                  <img src={frame} alt="" />
                  <b>Web & Mobile Apps</b>
                </div>
                <p>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit.</p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center">
                  <img src={dashboard} alt="" />
                  <b>Design Services</b>
                </div>
                <p>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit.</p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center">
                  <img src={frame1} alt="" />
                  <b>SEO</b>
                </div>
                <p>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit.</p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center">
                  <img src={frame2} alt="" />
                  <b>Security Tester</b>
                </div>
                <p>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit.</p>
              </div>
            </div>
          </aside>
        </section>
        <section className="flex justify-between items-center mt-[100px]">
          <aside className="flex flex-col gap-[50px]">
            <h1 className="text-[36px]">How does our process work?</h1>
            <p className="text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex <br /> ea commodo consequat.</p>
            <button className="bg-[#14213D] text-white p-[20px] rounded-[30px]">See Details</button>
          </aside>
          <aside className="flex flex-wrap w-[50%] gap-[20px]">
            <img src={frame3} alt="" />
            <img src={frame5} alt="" />
            <img src={frame6} alt="" />
            <img src={frame8} alt="" />
          </aside>
        </section>
        <section className="mt-[100px]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[20px]">
              <p className="text-[18px]">Our Product</p>
              <h1 className="text-[36px]">We’ll let our work speak for itself</h1>
              <b className="text-[18px]">Ut enim ad minim veniam, quis nostrud exercitation ullamco </b>
            </div>
            <div className="flex items-center">
              <img src={left} alt="" />
              <img src={right} alt="" className="relative top-[25px]" />
            </div>
          </div>
          <div className="flex mt-[75px] justify-center gap-[50px]">
            <article className="flex flex-col gap-[20px] text-center">
              <img src={rec6} alt="" className="rounded-[35px]" />
              <h1 className="text-[36px]">PT. ABCDE</h1>
              <p className="text-[18px]">Web Development</p>
              <button className="bg-[#14213D] rounded-[35px] text-white p-[20px]">See Details</button>
            </article>
            <article className="flex flex-col gap-[20px] text-center">
              <img src={rec8} alt="" className="rounded-[35px]" />
              <h1 className="text-[36px]">Rose Wood</h1>
              <p className="text-[18px]">SEO</p>
              <button className="bg-[#14213D] rounded-[35px] text-white p-[20px]">See Details</button>
            </article>
            <article className="flex flex-col gap-[20px] text-center">
              <img className="rounded-[35px]" src={rec7} alt="" />
              <h1 className="text-[36px]"> CoSpace</h1>
              <p className="text-[18px]">Presentation Template</p>
              <button className="bg-[#14213D] rounded-[35px] text-white p-[20px]">See Details</button>
            </article>
          </div>
        </section>
        <section className="flex justify-evenly gap-[100px] mt-[100px] items-center">
          <aside>
            <img src={joez} alt="" />
          </aside>
          <aside className="flex flex-col gap-[50px]">
            <h1 className="text-[36px]">Testimonials by them</h1>
            <p className="text-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex <br /> ea commodo consequat. -Joe Z</p>
          </aside>
        </section>
      </main>
      <footer className="flex justify-between items-start pt-[100px] px-[50px]">
        <div className="flex flex-col gap-[30px] items-start">
          <img src={logo} alt="" />
          <p>Go digital with us <br /> <br />
            50 Raya Building <br />
            Call us: 123-456-678</p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <b className="font-bold">Company</b>
          <span>About</span>
          <span>Blog</span>
          <span>Gallery</span>
          <span>Contact</span>
        </div>
        <div className="flex flex-col gap-[20px]">
          <b className="font-bold">Social Media</b>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Twitter</span>
        </div>
      </footer>
    </div >
  )
}