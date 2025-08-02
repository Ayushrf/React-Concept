import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
const Main = (props) => {
     useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    return (
        <>
            <section>
                <div className='d1 d' data-aos="fade-right" data-aos-duration="2500">
                    {/* <h1>Example1</h1> */}
                    <h1>{props.title}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error est animi nemo. Excepturi, fuga accusantium! Molestias sint deserunt nemo veritatis similique ut voluptatem harum aliquam. Voluptates eaque totam, necessitatibus ex impedit eius fuga vero adipisci fugiat tempora iure facilis nihil error atque?</p>
                </div>
                <div className='d2 d' data-aos="fade-left" data-aos-duration="2500">
                    <h1>Example2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia error est animi nemo. Excepturi, fuga accusantium! Molestias sint deserunt nemo veritatis similique ut voluptatem harum aliquam. Voluptates eaque totam, necessitatibus ex impedit eius fuga vero adipisci fugiat tempora iure facilis nihil error atque?</p>
                </div>
            </section>
        </>
    )
}

export default Main;