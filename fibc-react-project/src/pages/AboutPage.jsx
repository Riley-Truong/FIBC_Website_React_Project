import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO.jsx';
import PageHero from '../components/shared/PageHero.jsx';
import SectionHeading from '../components/shared/SectionHeading.jsx';
import church from '../assets/church_image1.jpg';

function AboutPage() {
  return (
    <>
      <SEO
        title="Our History"
        description="Learn about Faith Independent Baptist Church — our mission, vision, and history of serving McDonough, Georgia."
      />

      <PageHero
        backgroundImage={church}
        variant='inverse'
        eyebrow="About"
        title="Our History"
      />

      <section className="section">
        <div className="container-narrow">
          <p>
            Faith Independent Baptist Church was founded in August of 2001, with the very first service held in the living room of our founding pastor, Dr. Myron McIntyre. From those humble beginnings, God began to bless and grow this new church plant in remarkable ways.
          </p>
          <p>
            Shortly after our launch, God provided a storefront location off Hampton Street near the McDonough Square, where we held our first public services. In 2005, the Lord opened yet another door—miraculously allowing us to purchase an existing church building on Highway 81 in McDonough. This continues to be our home, where we gather each week to worship, learn, and serve.
          </p>
          <p>
            Over the years, God has grown our church—not only in number but also in depth. Through faithful preaching, Bible teaching, personal discipleship, outreach, and counseling, our church family has matured spiritually, rooted in the unchanging truths of God’s Word.
          </p>
          <p>
            In March of 2025, after more than two decades of faithful service, Dr. McIntyre followed God’s leading to step down as pastor and pursue new avenues of ministry. In May of 2025, the church voted to call Pastor Randall Rickner as our next pastor.
          </p>
          <p>
            With a renewed vision to reach the lost, disciple believers, and impact our community for Christ, we now move forward with joy and anticipation—trusting God to continue working through Faith Independent Baptist Church for the advancement of the Gospel.
          </p>
        </div>
      </section>

      <style>{`
        p {
          font-size: 18px;
        }
      `}</style>
    </>
  );
}

export default AboutPage;
