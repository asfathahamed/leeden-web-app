import Carousel from "./components/carousel";
import Content from "./components/content";

export default function Home() {
  return (
    <>
      <main className="container mx-auto p-4 h-full">
        <Carousel />
        <Content title="PT Leeden Indonesia">
          <>
            <p className="mb-3">
              PT Leeden Indonesia is the complete solutions provider for all
              your welding needs. We offer a comprehensive range of welding
              products including, semi-automated welding machines, welding
              equipment, filler metals and other complementary accessories such
              as power tools, abrasives and hand tools. Backed by our parent
              company headquartered in Singapore, our decades of experience,
              exposure and presence in the region's top industries allowed us to
              garner the position as one of the leading integration specialist
              in welding, gas and safety. As a result, we are also able to
              provide you with consultancy and supportive services for whichever
              project you endeavour.
            </p>
            <p>
              To learn more about our parent company, Leeden National Oxygen
              Ltd, please visit their website{" "}
              <a
                href="http://www.leedennox.com/"
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                here
              </a>
            </p>
          </>
        </Content>
      </main>
    </>
  );
}
