import redArrow from "./assets/redArrow.svg";
import greenArrow from "./assets/greenArrow.svg";

function App() {
  const pageData = [
    {
      id: 1,
      heading: "Sebum Balance",
      content:
        "Sebum is an oily substance produced by the sebaceous glands in the dermis of the skin, and it plays a crucial role in maintaining the health and integrity of the skin.",
      barPercent: 30,
    },
    {
      id: 2,
      heading: "Inflammation Observed",
      content:
        "Inflammation on the skin signify the presence of an injury, physical trauma, infection, or irritation in that area, which is commonly associated with acne",
      barPercent: 75,
    },
    {
      id: 3,
      heading: "Sensitivity Range",
      content:
        "Skin condition characterized by heightened reactivity and a low tolerance threshold to various external factors such as burning, itching, dryness etc.",
      barPercent: 45,
    },
    {
      id: 4,
      heading: "Skin Renewal Rate",
      content:
        "The process of shedding dead skin cells & replacing them with new ones maintains its health, appearance, and functionality through this renewal cycle.",
      barPercent: 20,
    },
    {
      id: 5,
      heading: "Skin Radiance",
      content:
        "Skin radiance is the natural glow, vitality, and luminosity of skin described by healthy, well-hydrated, and youthful visual appearance.",
      barPercent: 60,
    },
    {
      id: 6,
      heading: "Skin Damage Rate",
      content:
        "The frequency at which damage occurs to the skin tissues can result from various factors like inflammatory acne.",
      barPercent: 80,
    },
  ];
  const foreGroundGreenColor = "#5FA653";
  const foreGroundRedColor = "#D66736";
  const backgroundGreenColor = "#EBF1CE";
  const backgroundRedColor = "#F9E7D7";
  return (
    <main className="bg-[#FEFEFE] font-notoSans">
      <div className="max-w-[20rem] mx-auto">
        {pageData?.map((sectionData) => {
          return (
            <section id={sectionData?.id} className="my-10">
              <div className="aspect-square w-12 bg-slate-300 mb-4"></div>
              <h1 className="font-bold text-[1.125rem] leading-[1.63rem]">
                {sectionData?.heading}
              </h1>
              <p className="text-[0.75rem] leading-[1.125rem]">
                {sectionData?.content}
              </p>
              <div>
                {/* main bar */}
                <div className="h-[0.8125rem] flex mt-10 relative">
                  {/* red zone 1 */}
                  <div
                    style={{
                      background:
                        sectionData.barPercent >= 26 &&
                        sectionData.barPercent <= 65
                          ? "#E0E0E0"
                          : backgroundRedColor,
                    }}
                    className="h-full bg-[#F9E7D7] flex-[0.3]"
                  ></div>
                  {/* green zone  */}
                  <div
                    style={{
                      background:
                        sectionData.barPercent >= 26 &&
                        sectionData.barPercent <= 65
                          ? backgroundGreenColor
                          : "#E0E0E0",
                    }}
                    className="h-full bg-[#EBF1CE] flex-[0.4] relative"
                  >
                    {/* brackets */}
                    <div className="border-l border-t border-b h-[2.3319rem] w-[0.5719rem] border-black absolute left-0 translate-y-[-30%]"></div>
                    <div className="border-r border-t border-b h-[2.3319rem] w-[0.5719rem] border-black absolute right-0 translate-y-[-30%]"></div>
                  </div>
                  {/* red zone 2 */}
                  <div
                    style={{
                      background:
                        sectionData.barPercent >= 26 &&
                        sectionData.barPercent <= 65
                          ? "#E0E0E0"
                          : backgroundRedColor,
                    }}
                    className="h-full bg-[#F9E7D7] flex-[0.3]"
                  ></div>

                  {/*percentage pointer */}
                  <div
                    style={{
                      left: sectionData.barPercent + "%",
                      color:
                        sectionData.barPercent >= 26 &&
                        sectionData.barPercent <= 65
                          ? foreGroundGreenColor
                          : foreGroundRedColor,
                    }}
                    className={`absolute bottom-0`}
                  >
                    <h3 className="text-[0.75rem] leading-[1.125rem] font-bold mb-1">
                      You
                    </h3>
                    <img
                      src={
                        sectionData.barPercent >= 26 &&
                        sectionData.barPercent <= 65
                          ? greenArrow
                          : redArrow
                      }
                      alt="arrow"
                      className="mx-auto"
                    />

                    <div
                      style={{
                        background:
                          sectionData.barPercent >= 26 &&
                          sectionData.barPercent <= 65
                            ? foreGroundGreenColor
                            : foreGroundRedColor,
                      }}
                      className="w-[1.8938rem] h-[0.8125rem]"
                    ></div>
                  </div>
                </div>
                {/* bottom text */}
                <div className="flex justify-between items-center ">
                  <span className="font-bold text-[0.5rem] leading-[1.125rem]">
                    LOW
                  </span>
                  <span className=" text-[0.625rem] leading-[1.125rem] translate-y-[5px]">
                    Estimated Range
                  </span>
                  <span className="font-bold text-[0.5rem] leading-[1.125rem]">
                    HIGH
                  </span>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

export default App;
