import svgPaths from "./svg-2w4hgy5hf5";
import imgLight1 from "figma:asset/6389346f9c49ac6945ecf982fb1aaa118ee4cd3c.png";
import imgImage1 from "figma:asset/d38251e2f598f5cbc50c9a527136ec8b47fefbb5.png";
import imgCamra1 from "figma:asset/a734b0335fbeb91985147e51495923084cf81987.png";
import imgAirpurifier1 from "figma:asset/102cb7aab370eb0bc40fb8e704699a0e91af74d7.png";

function Bg() {
  return (
    <div className="absolute h-[720.5px] left-[-20px] top-[149px] w-[413.5px]" data-name="BG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 413.5 720.5">
        <g id="BG">
          <path d={svgPaths.p1f1a2380} fill="url(#paint0_linear_5_1224)" id="Rectangle 474" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1224" x1="188.5" x2="392.499" y1="0.500004" y2="720.5">
            <stop stopColor="#37B6E9" />
            <stop offset="1" stopColor="#4B4CED" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute contents right-[14.34px] top-[17.33px]" data-name="Battery">
      <div className="absolute border border-black border-solid h-[11.333px] opacity-35 right-[16.67px] rounded-[2.667px] top-[17.33px] w-[22px]" data-name="Border" />
      <div className="absolute h-[4px] right-[14.34px] top-[21px] w-[1.328px]" data-name="Cap">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4">
          <path d={svgPaths.p32d253c0} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bg-black h-[7.333px] right-[18.67px] rounded-[1.333px] top-[19.33px] w-[18px]" data-name="Capacity" />
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute h-[21px] left-[21px] top-[7.33px] w-[54px]" data-name="Time Style">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[27px] not-italic text-[15px] text-center text-white top-[calc(50%-3.5px)] tracking-[-0.3px] w-[54px] whitespace-pre-wrap">9:41</p>
    </div>
  );
}

function CartButton() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Cart Button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Cart Button">
          <rect fill="url(#paint0_linear_5_1227)" height="44" rx="10" width="44" />
          <rect height="43" rx="9.5" stroke="url(#paint1_linear_5_1227)" strokeOpacity="0.6" style={{ mixBlendMode: "overlay" }} width="43" x="0.5" y="0.5" />
          <path d={svgPaths.p2479bf00} fill="var(--fill-0, #FAFEFF)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1227" x1="2.2" x2="32.8464" y1="-2.33764e-07" y2="59.4315">
            <stop stopColor="#34C8E8" />
            <stop offset="1" stopColor="#4E4AF2" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1227" x1="0" x2="24.9884" y1="0" y2="52.9688">
            <stop stopColor="white" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TopNavigation() {
  return (
    <div className="absolute content-stretch flex gap-[127px] items-center left-[20px] top-[60px]" data-name="Top Navigation">
      <p className="font-['Kodchasan:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white w-[179px] whitespace-pre-wrap">Welcome back</p>
      <CartButton />
    </div>
  );
}

function Top() {
  return (
    <div className="absolute backdrop-blur-[50px] bg-[rgba(37,45,60,0.4)] h-[104px] left-0 overflow-clip top-0 w-[390px]" data-name="Top">
      <div className="absolute h-[44px] left-[7px] top-0 w-[375px]" data-name="Status Bar">
        <Battery />
        <div className="absolute h-[11px] right-[43.67px] top-[17.33px] w-[15.333px]" data-name="Wifi">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.333 10.9999">
            <path d={svgPaths.p39712400} fill="var(--fill-0, white)" id="Wifi" />
          </svg>
        </div>
        <div className="absolute h-[10.667px] right-[64px] top-[17.67px] w-[17px]" data-name="Cellular Connection">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
            <path d={svgPaths.p26d17600} fill="var(--fill-0, white)" id="Cellular Connection" />
          </svg>
        </div>
        <TimeStyle />
      </div>
      <TopNavigation />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="-translate-x-1/2 absolute h-[34px] left-[calc(50%-2.5px)] top-[62px] w-[375px]" data-name="HomeIndicator">
      <div className="-translate-x-1/2 absolute bg-white bottom-[8px] h-[5px] left-[calc(50%+4.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function MaterialSymbolsHomeOutlineRounded() {
  return (
    <div className="absolute left-[26px] size-[41px] top-[25px]" data-name="material-symbols:home-outline-rounded">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
        <g id="material-symbols:home-outline-rounded">
          <path d={svgPaths.p3bea47f0} fill="var(--fill-0, #E6E6E6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TypcnPlusOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="typcn:plus-outline">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="typcn:plus-outline">
          <path d={svgPaths.p3ca83ff0} fill="var(--fill-0, #E6E6E6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#0059ff] h-[27px] items-center justify-center left-[156px] rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] to-[#a16263] top-[33px] w-[81px]">
      <TypcnPlusOutline />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Group">
      <div className="absolute inset-[-1.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.6667 35.6667">
          <g id="Group">
            <path d={svgPaths.p294fa080} id="Vector" stroke="var(--stroke-0, #E6E6E6)" strokeLinejoin="round" />
            <path d={svgPaths.p38e54d00} id="Vector_2" stroke="var(--stroke-0, #E6E6E6)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconamoonProfileThin() {
  return (
    <div className="overflow-clip relative shrink-0 size-[52px]" data-name="iconamoon:profile-thin">
      <Group />
    </div>
  );
}

function TabBar1() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[346px] top-[17px] w-[28px]" data-name="TabBar">
      <IconamoonProfileThin />
    </div>
  );
}

function TabBar() {
  return (
    <div className="absolute h-[125px] left-0 overflow-clip top-[741px] w-[390px]" data-name="Tab Bar">
      <div className="absolute h-[103.5px] left-0 top-0 w-[390px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 103.5">
          <g data-figma-bg-blur-radius="100" id="Rectangle 24">
            <path d={svgPaths.p2862ae00} fill="url(#paint0_linear_5_1186)" fillOpacity="0.4" />
            <path d={svgPaths.p2b855d80} stroke="url(#paint1_linear_5_1186)" strokeOpacity="0.2" strokeWidth="2" style={{ mixBlendMode: "overlay" }} />
          </g>
          <defs>
            <clipPath id="bgblur_0_5_1186_clip_path" transform="translate(100 100)">
              <path d={svgPaths.p2862ae00} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1186" x1="195" x2="195" y1="-5" y2="121">
              <stop stopColor="#363E51" />
              <stop offset="1" stopColor="#181C24" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1186" x1="192.5" x2="191" y1="-3.49999" y2="41.5">
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <HomeIndicator />
      <MaterialSymbolsHomeOutlineRounded />
      <Frame />
      <TabBar1 />
    </div>
  );
}

function Items1() {
  return (
    <div className="absolute contents left-[197px] top-[189px]" data-name="Items 20">
      <div className="absolute h-[191px] left-[197px] top-[189px] w-[163.562px]">
        <div className="absolute inset-[1.4%_0_1.63%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163.562 185.212">
            <g data-figma-bg-blur-radius="60" id="Rectangle 166">
              <path d={svgPaths.p445fd00} fill="url(#paint0_linear_5_1220)" fillOpacity="0.6" />
              <path d={svgPaths.p12dd1380} stroke="url(#paint1_linear_5_1220)" strokeOpacity="0.2" strokeWidth="2" style={{ mixBlendMode: "overlay" }} />
            </g>
            <defs>
              <clipPath id="bgblur_0_5_1220_clip_path" transform="translate(60 60)">
                <path d={svgPaths.p445fd00} />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1220" x1="45.5992" x2="69.7756" y1="46.0356" y2="138.626">
                <stop stopColor="#363E51" />
                <stop offset="1" stopColor="#191E26" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1220" x1="17.3475" x2="123.112" y1="2.55814" y2="67.4738">
                <stop stopColor="white" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[48.095px] items-center justify-center left-[217.54px] top-[320.67px] w-[128.098px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-8 flex-none">
          <p className="font-['Kodchasan:Bold',sans-serif] leading-[normal] not-italic relative text-[24px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.5)] text-white tracking-[-0.3px]">SECURITY</p>
        </div>
      </div>
    </div>
  );
}

function Items() {
  return (
    <div className="absolute contents left-[11px] top-[214px]" data-name="Items 19">
      <div className="absolute h-[191px] left-[11px] top-[214px] w-[163.562px]">
        <div className="absolute inset-[1.4%_0_1.63%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163.562 185.212">
            <g data-figma-bg-blur-radius="60" id="Rectangle 166">
              <path d={svgPaths.p445fd00} fill="url(#paint0_linear_5_1220)" fillOpacity="0.6" />
              <path d={svgPaths.p12dd1380} stroke="url(#paint1_linear_5_1220)" strokeOpacity="0.2" strokeWidth="2" style={{ mixBlendMode: "overlay" }} />
            </g>
            <defs>
              <clipPath id="bgblur_0_5_1220_clip_path" transform="translate(60 60)">
                <path d={svgPaths.p445fd00} />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1220" x1="45.5992" x2="69.7756" y1="46.0356" y2="138.626">
                <stop stopColor="#363E51" />
                <stop offset="1" stopColor="#191E26" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1220" x1="17.3475" x2="123.112" y1="2.55814" y2="67.4738">
                <stop stopColor="white" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[40.342px] items-center justify-center left-[44.72px] top-[350.55px] w-[93.742px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-6 flex-none">
          <p className="font-['Kodchasan:Bold',sans-serif] leading-[normal] not-italic relative text-[24px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.5)] text-white tracking-[-0.3px]">LIGHTS</p>
        </div>
      </div>
    </div>
  );
}

function Items2() {
  return (
    <div className="absolute contents left-[29px] top-[539px]" data-name="Items 21">
      <div className="absolute flex h-[44.396px] items-center justify-center left-[29px] top-[539px] w-[136.314px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-8 flex-none">
          <p className="font-['Kodchasan:Bold',sans-serif] leading-[normal] not-italic relative text-[20px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.5)] text-white tracking-[-0.3px]">AIR PURIFIER</p>
        </div>
      </div>
    </div>
  );
}

function Items3() {
  return (
    <div className="absolute contents left-[200px] top-[380px]" data-name="Items 22">
      <div className="absolute h-[191px] left-[200px] top-[380px] w-[163.562px]">
        <div className="absolute inset-[1.4%_0_1.63%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163.562 185.212">
            <g data-figma-bg-blur-radius="60" id="Rectangle 166">
              <path d={svgPaths.p445fd00} fill="url(#paint0_linear_5_1220)" fillOpacity="0.6" />
              <path d={svgPaths.p12dd1380} stroke="url(#paint1_linear_5_1220)" strokeOpacity="0.2" strokeWidth="2" style={{ mixBlendMode: "overlay" }} />
            </g>
            <defs>
              <clipPath id="bgblur_0_5_1220_clip_path" transform="translate(60 60)">
                <path d={svgPaths.p445fd00} />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1220" x1="45.5992" x2="69.7756" y1="46.0356" y2="138.626">
                <stop stopColor="#363E51" />
                <stop offset="1" stopColor="#191E26" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1220" x1="17.3475" x2="123.112" y1="2.55814" y2="67.4738">
                <stop stopColor="white" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[49.208px] items-center justify-center left-[218px] top-[507px] w-[136.02px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-8 flex-none">
          <p className="font-['Kodchasan:Bold',sans-serif] leading-[normal] not-italic relative text-[24px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.5)] text-white tracking-[-0.3px]">SPEAKERS</p>
        </div>
      </div>
    </div>
  );
}

function Scolling() {
  return (
    <div className="absolute h-[716px] left-[20px] top-[128px] w-[350px]" data-name="Scolling">
      <div className="absolute h-[191px] left-[15px] top-[405px] w-[163.562px]">
        <div className="absolute inset-[1.4%_0_1.63%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163.562 185.212">
            <g data-figma-bg-blur-radius="60" id="Rectangle 166">
              <path d={svgPaths.p445fd00} fill="url(#paint0_linear_5_1222)" fillOpacity="0.6" />
              <path d={svgPaths.p12dd1380} stroke="url(#paint1_linear_5_1222)" strokeOpacity="0.2" strokeWidth="2" style={{ mixBlendMode: "overlay" }} />
            </g>
            <defs>
              <clipPath id="bgblur_0_5_1222_clip_path" transform="translate(60 60)">
                <path d={svgPaths.p445fd00} />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1222" x1="45.5992" x2="69.7756" y1="46.0356" y2="138.626">
                <stop stopColor="#363E51" />
                <stop offset="1" stopColor="#191E26" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1222" x1="17.3475" x2="123.112" y1="2.55814" y2="67.4738">
                <stop stopColor="white" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Items1 />
      <div className="absolute h-[216px] left-[10px] top-[-12px] w-[350px]" data-name="mikkel-bech-yjAFnkLtKY0-unsplash-removebg-preview 5">
        <div className="absolute inset-[-18.52%_-17.14%_-36.04%_-17.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 470 333.839">
            <g data-figma-bg-blur-radius="100" filter="url(#filter0_d_5_1215)" id="mikkel-bech-yjAFnkLtKY0-unsplash-removebg-preview 5">
              <path d={svgPaths.p1b5c1f00} fill="url(#paint0_linear_5_1215)" fillOpacity="0.6" shapeRendering="crispEdges" />
              <path d={svgPaths.pa9ccb80} shapeRendering="crispEdges" stroke="url(#paint1_linear_5_1215)" strokeOpacity="0.2" strokeWidth="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="413.839" id="filter0_d_5_1215" width="550" x="-40" y="-60">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="20" />
                <feGaussianBlur stdDeviation="30" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0640972 0 0 0 0 0.0794837 0 0 0 0 0.108333 0 0 0 0.6 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1215" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1215" mode="normal" result="shape" />
              </filter>
              <clipPath id="bgblur_0_5_1215_clip_path" transform="translate(40 60)">
                <path d={svgPaths.p1b5c1f00} />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1215" x1="186.212" x2="200.781" y1="97.361" y2="231.033">
                <stop stopColor="#353F54" />
                <stop offset="1" stopColor="#222834" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1215" x1="99.2424" x2="213.297" y1="48.0664" y2="229.058">
                <stop stopColor="white" />
                <stop offset="0.844522" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Items />
      <Items2 />
      <Items3 />
      <p className="absolute font-['Teko:Bold',sans-serif] font-bold leading-[normal] left-[156px] text-[40px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white top-[61px] tracking-[-0.3px]">21</p>
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[143px] not-italic text-[20px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white top-[119px] tracking-[2px]">Temp</p>
      <div className="absolute h-[93.953px] left-[90px] top-[18px] w-[169.5px]">
        <div className="absolute inset-[-16.5%_-11.5%_-25.01%_-11.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208.5 132.953">
            <g filter="url(#filter0_d_5_1007)" id="Vector 1">
              <path d={svgPaths.p1a8d9200} shapeRendering="crispEdges" stroke="url(#paint0_linear_5_1007)" strokeLinecap="round" strokeWidth="31" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="132.953" id="filter0_d_5_1007" width="208.5" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1007" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1007" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1007" x1="188.5" x2="19.5" y1="109.5" y2="109.5">
                <stop stopColor="#C70000" stopOpacity="0.95" />
                <stop offset="1" stopColor="#0095FF" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[16.218px] items-center justify-center left-[209.74px] top-[19.53px] w-[11.356px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-55 flex-none">
          <div className="h-0 relative w-[19.799px]">
            <div className="absolute inset-[-3.5px_-37.88%_-11.5px_-37.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.799 15">
                <g filter="url(#filter0_d_5_999)" id="Line 6">
                  <path d="M7.5 3.5H27.299" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="7" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="15" id="filter0_d_5_999" width="34.799" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_999" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_999" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[194px] size-[9px] top-[68px]">
        <div className="absolute inset-[0_-44.44%_-88.89%_-44.44%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <g filter="url(#filter0_d_5_997)" id="Ellipse 12">
              <circle cx="8.5" cy="4.5" r="3.5" shapeRendering="crispEdges" stroke="var(--stroke-0, white)" strokeWidth="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17" id="filter0_d_5_997" width="17" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_997" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_997" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[122px] left-[52px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] top-[230px] w-[85px]" data-name="light 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[182.14%] left-[-80.77%] max-w-none top-[-41.07%] w-[261.54%]" src={imgLight1} />
        </div>
      </div>
      <div className="absolute left-[215px] size-[133px] top-[391px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute h-[104px] left-[235px] top-[217px] w-[101px]" data-name="CAMRA 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[118.48%] left-[-11.24%] max-w-none top-[-1.09%] w-[122.47%]" src={imgCamra1} />
        </div>
      </div>
      <div className="absolute h-[128px] left-[62px] top-[421px] w-[76px]" data-name="AIRPURIFIER 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[154.69%] left-[-81.58%] max-w-none top-[-27.34%] w-[260.53%]" src={imgAirpurifier1} />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#242c3b] overflow-clip relative rounded-[50px] size-full" data-name="2">
      <Bg />
      <Top />
      <TabBar />
      <Scolling />
    </div>
  );
}