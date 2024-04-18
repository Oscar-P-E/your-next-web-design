import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <div className="w-full bg-white pb-24 pt-12">
        <div className="prose prose-xl prose-slate mx-auto w-[90%]">
          {/* <div className="mx-auto flex w-full flex-col justify-center"> */}
          <h4 className="pb-2 text-center text-lg opacity-35">
            Your Next Web Design
          </h4>
          <h1 className="mx-auto max-w-xl pb-12 text-center text-7xl font-extrabold tracking-tight text-oj-500">
            Some of the things I do
          </h1>
          {/* </div> */}
          <div className="mx-auto flex grid-cols-2 flex-col gap-x-[5%] gap-y-12 prose-h3:my-0 prose-p:my-0 md:grid md:items-center lg:w-full">
            {/* <div className="col-span-2 border-y"></div> */}

            <h3 className="text-transparen bg-gradient-to-r from-black bg-clip-text font-bold tracking-tight text-indigo-500">
              Website Design & Development
            </h3>
            <p className="">
              I can design and build you a website that looks good and works
              well. I can also help you with your website&apos;s content and
              search engine optimisation (SEO).
            </p>

            <div className="col-span-2 border-y"></div>

            <h3
              className="text-transparen bg-gradient-to-r from-black
bg-clip-text font-bold tracking-tight text-oj-500"
            >
              Website Redesign & Optimisation
            </h3>

            <p>
              If you already have a website, I can help you make it better. I
              can improve the design, make it faster, and help you get more
              visitors.
            </p>

            <div className="col-span-2 border-y"></div>

            <h3
              className="text-transparen bg-gradient-to-r from-black
bg-clip-text font-bold tracking-tight text-yellow-500"
            >
              Responsive Design
            </h3>
            <p>
              Over half of all web traffic is on mobile devices. I will make
              sure your website looks good on any device.
            </p>

            <div className="col-span-2 border-y"></div>

            <h3
              className="text-transparen bg-gradient-to-r from-black
bg-clip-text font-bold tracking-tight text-emerald-500"
            >
              Content Creation
            </h3>
            <p>
              I can help you create content for your website. This includes
              writing, images, and video.
            </p>

            <div className="col-span-2 border-y"></div>

            <h3
              className="text-transparen bg-gradient-to-r from-black
bg-clip-text font-bold tracking-tight text-cyan-500"
            >
              Conversion Rate & Search Engine Optimisation
            </h3>

            <p>
              I can help you get more visitors to your website and help you turn
              those visitors into customers.
            </p>

            <div className="col-span-2 border-y"></div>
          </div>
          <div className="">
            <h2 className="font-bold tracking-tight text-oj-500">
              How I Design Websites
            </h2>

            <p>
              I start by figuring out what your visitors really need. Then, I
              build your website around those needs. This way, we keep
              everything straightforward but still creative.
            </p>

            <p>
              I study what makes a website good, what design choices data and
              research has shown lead to better outcomes, and I use that
              knowledge to make you a website.
            </p>

            <h4 className="">
              Here are just some of the stats that show the importance of good
              web design:
            </h4>

            <ul className="prose-base">
              <li>
                38% of visitors will leave a website if the layout is ugly.
                <sup>
                  <a href="https://blogs.adobe.com/creative/files/2015/12/Adobe-State-of-Content-Report.pdf">
                    (source)
                  </a>
                </sup>
              </li>
              <li>
                93% of people leave a website if it doesn&apos;t display
                properly on their device.
                <sup>
                  <a href="https://blog.hubspot.com/marketing/web-design-stats-for-2020">
                    (source)
                  </a>
                </sup>
              </li>
              <li>
                75% of judgments about a company&apos;s credibility are based on
                the company&apos;s website design.
                <sup>
                  <a href="http://credibility.stanford.edu/guidelines/index.html">
                    (source)
                  </a>
                </sup>
              </li>
              <li>
                Good UX can increase conversion rates by up to 400%.
                <sup>
                  <a href="https://www.forbes.com/sites/forbesagencycouncil/2017/03/23/the-bottom-line-why-good-ux-design-means-better-business/#42f4defa2396">
                    (source)
                  </a>
                </sup>
              </li>

              <li>
                40% of users, and 53% of mobile users will leave a website if it
                takes longer than 3 seconds to load.
                <sup>
                  <a href="https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/">
                    (source)
                  </a>
                </sup>
              </li>
              <li>
                94% of online shoppers don&apos;t trust outdated or badly
                designed websites.
                <sup>
                  <a href="https://www.ukwebhostreview.com/website-and-ux-statistics/">
                    (source)
                  </a>
                </sup>
              </li>

              <li>
                Custom content increases 82% of users&apos; trust in a company.
                <sup>
                  <a href="https://blog.red-website-design.co.uk/2018/07/16/web-design-stats-2018-2019-infographic/">
                    (source)
                  </a>
                </sup>
              </li>
              <li>
                You are 53 times more likely to get on the first page of Google
                if you include video content.
                <sup>
                  <a href="https://www.ukwebhostreview.com/website-and-ux-statistics/">
                    (source)
                  </a>
                </sup>
              </li>
              <li>
                51% of respondents mentioned thorough contact information as the
                most lacking content on vendor websites, and 54% said they would
                leave the website.
                <sup>
                  <a href="https://www.huffindustrialmarketing.com/2015-Report.pdf">
                    (source)
                  </a>
                </sup>
              </li>
              <li>
                70% of people look at lists with bullet points (such as this
                one), vs 55% for lists without bullets.
                <sup>
                  <a href="https://www.nngroup.com/reports/how-people-read-web-eyetracking-evidence/">
                    (source)
                  </a>
                </sup>
              </li>
              <li>
                86% of visitors want to see a company&apos;s products and
                services, 64% want to contact the company, and 52% want to see
                the About Us section.
                <sup>
                  <a href="https://www.huffindustrialmarketing.com/2015-Report.pdf">
                    (source)
                  </a>
                </sup>
              </li>

              <li>
                Only 8% want to see your blog, and only 2% mentioned wanting to
                see pricing information on the home page.
                <sup>
                  <a href="https://www.huffindustrialmarketing.com/2015-Report.pdf">
                    (source)
                  </a>
                </sup>
              </li>

              <li>
                Improving website loading speed by 1 second were shown to
                increase conversions by 27%.
                <sup>
                  <a href="https://www.mageplaza.com/blog/page-loading-1-second-faster-increase-conversion-rate.html">
                    (source)
                  </a>
                </sup>
              </li>
              <li>
                Personalised call to actions (CTAs) perform 202% better than
                basic CTAs.
                <sup>
                  <a href="https://blog.hubspot.com/marketing/personalized-calls-to-action-convert-better-data">
                    (source)
                  </a>
                </sup>
              </li>

              <li>
                Customers are 16 times more likely to share on social media that
                they made a purchase if they see a CTA button on the post
                purchase page.
                <sup>
                  <a href="https://www.digitaloasis.com.au/10-ctas-that-increase-sales/">
                    (source)
                  </a>
                </sup>
              </li>
              <li>
                If you increase the number of elements on a page from 400 to
                6,000, conversion rates drop by 95%.
                <sup>
                  <a href="https://www.thinkwithgoogle.com/data/mobile-page-speed-new-industry-benchmarks-elements-reduce-conversion/">
                    (source)
                  </a>
                </sup>
              </li>

              <li>
                Users spend an average of 5.94 seconds looking at a
                website&apos;s main image, and colour pictures in general hold
                attention longer than black & white pictures &ndash; 2 seconds
                vs 0.6 seconds.
                <sup>
                  <a href="https://apiumtech.com/blog/key-statistics-colors-affect-sales-consciously-unconsciously/">
                    (source)
                  </a>
                </sup>
              </li>

              <li>
                Users spend 80% of their browsing time looking at the left half
                of the page.
                <sup>
                  <a href="https://www.nngroup.com/articles/horizontal-attention-leans-left/">
                    (source)
                  </a>
                </sup>
              </li>
              <li>
                84% of marketers believe design driven companies outperform
                other businesses.
                <sup>
                  <a href="https://econsultancy.com/reports/digital-intelligence-briefing-2018-digital-trends/">
                    (source)
                  </a>
                </sup>
              </li>

              <li>
                58% of people searched for information about a local business
                using voice search.
                <sup>
                  <a href="https://review42.com/resources/voice-search-stats/">
                    (source)
                  </a>
                </sup>
              </li>

              <li>
                Updating old blog posts with new images and content can increase
                your traffic by up to 111%.
                <sup>
                  <a href="https://backlinko.com/seo-techniques">(source)</a>
                </sup>
              </li>
            </ul>

            <p>
              My websites don&apos;t just look nice; they work nicely too.
              They&apos;re fast and friendly for everyone who visits.
            </p>

            <h3 className="font-bold tracking-tight">Want a Better Website?</h3>

            <p>
              Let&apos;s have a chat and see if I can help you. I&apos;ll give
              you a free quote and some advice on how to make your website
              better.
            </p>

            <div className="mx-auto mt-12 flex w-full justify-center">
              <a
                href="#contact"
                className="rounded bg-oj-500 px-8 py-4 text-xl font-semibold text-white no-underline hover:bg-oj-700 focus:outline-none focus:ring-4 focus:ring-oj-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" />
      <Contact />
      <Footer />
    </main>
  );
}
