const About = () => {
  return (
    <div className="relative isolate alan_background_color overflow-hidden pt-40 sm:pt-60">
      <img
        src="/src/assets/headshot.png"
        alt=""
        className="absolute inset-0 -z-10 object-cover"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className=""
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className=""
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-6xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="mt-6 text-m leading-8 text-white italics">
            " I don't know what regret looks like, and I'd like to keep it that
            way. "
          </p>
        </div>
      </div>
      <div className="alan_background_color px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-white ">
          <p className="text-base font-semibold leading-7 alan_font_color">
            Introducing
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">
            DadScript: The Beginning
          </h1>
          <figcaption className="mt-4 flex gap-x-2 text-m leading-6 text-gray-400 italics pb-5">
            --About a 3 minute read.
          </figcaption>
          <p className="mt-4 text-2xl leading-8">
            Hello there! I'm Alan, and I'm here to share with you the journey of
            a guy navigating his way through the world of coding. But let's
            rewind a bit, back to 1995, the year of my arrival on this planet.
          </p>
          <div className="mt-10 max-w-2xl ">
            <p className="text-2xl">Well...maybe not that far back...</p>
            <p className="mt-6 text-2xl">
              Like many, my path has been a winding one, filled with trials,
              triumphs, and plenty of detours. After dipping my toes into
              various industries, I found myself drawn to the allure of coding -
              the promise of not just a career, but a passion.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-400">
              The Journey...
            </h2>
            <p className="mt-6">
              My journey began with a flirtation with college, but fear and
              uncertainty led me to take a different route. Community college
              became my launchpad, a decision I now cherish as one of my best.
              From there, I ventured into the world of work, starting as a
              satellite technician - a job that taught me resilience,
              problem-solving, and the value of a steady paycheck. But life has
              a funny way of nudging us toward our true calling. Despite
              dabbling in sales and office jobs, I kept finding myself drawn
              back to the allure of technology. I tinkered with code in my spare
              time, taking Udemy courses and feeling that electric thrill of
              discovery.
            </p>
            <figure className="mt-10 border-l border-white pl-9">
              <blockquote className="font-semibold text-gray-400">
                <p>
                  “It is good to have an end to journey toward; but it is the
                  journey that matters, in the end.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex gap-x-4">
                <div className="text-sm leading-6">
                  <strong className="font-semibold text-gray-400">
                    J.R.R Tolkien
                  </strong>{" "}
                  – The Fellowship of the Ring
                </div>
              </figcaption>
            </figure>
            <p className="mt-10">
              In 2021, I made a bold decision to pursue a degree in Computer
              Science, determined not to let fear hold me back this time.
              Alongside my studies, I enrolled in a coding bootcamp to gain
              hands-on experience and practical skills.
            </p>
          </div>
          <figure className="mt-16"></figure>
          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-400">
              What's next?
            </h2>
            <p className="mt-6">
              This journey of self-discovery and growth inspired me to share my
              experiences through this blog. I want to connect with others who,
              like me, are navigating the twists and turns of life, seeking
              fulfillment and purpose. Whether you're a fellow coder, a
              spiritual seeker, or simply someone striving to make sense of it
              all, I hope this blog resonates with you.
            </p>
            <p className="mt-8">
              So, join me as I unravel the mysteries of software development,
              explore the intersection of technology and spirituality, and share
              the soundtrack of my life. Together, let's embrace the journey and
              keep moving forward, one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
