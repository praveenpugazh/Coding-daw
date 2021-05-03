/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Fast Performance",
    text: "We deliver course content with best industry practices.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Partnership deal",
    title: "Partnership deal",
    text: "Get to work with us on our freelance projects",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Pro Subscription",
    title: "Pro Subscription",
    text: "Becoming a pro you can enjoy much more added benefits",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Customer Support",
    text: "24x7 voice and chat support to resolve your queries",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader slogan="Why us?" title="Because we care" />
        <Grid sx={styles.grid}>
          {data.map((dataItem) => (
            <FeatureCardColumn
              key={dataItem.id}
              alt={dataItem.alt}
              text={dataItem.text}
              src={dataItem.imgSrc}
              title={dataItem.title}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
