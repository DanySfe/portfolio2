import svgPaths from "./svg-foq0grj625";

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
    </div>
  );
}

function Card() {
  return <div className="absolute contents h-[616px] left-[26px] top-[97px] w-[357px]" data-name="Card" />;
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p30163e00} fill="var(--fill-0, #FFC107)" id="Vector" />
          <path d={svgPaths.p2ef9ee80} fill="var(--fill-0, #FF3D00)" id="Vector_2" />
          <path d={svgPaths.p30894c0} fill="var(--fill-0, #4CAF50)" id="Vector_3" />
          <path d={svgPaths.p157ed900} fill="var(--fill-0, #1976D2)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function AkarIconsFacebookFill() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="akar-icons:facebook-fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_5_1233)" id="akar-icons:facebook-fill">
          <path clipRule="evenodd" d={svgPaths.p28eb7100} fill="var(--fill-0, #4267B2)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_5_1233">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-[46px] top-[184px]" data-name="Form">
      <div className="h-[42px] relative shrink-0 w-[290px]" data-name="Title">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Kodchasan:Bold',sans-serif] h-[42px] justify-center leading-[0] left-[145px] not-italic text-[24px] text-center text-white top-[21px] w-[290px]">
          <p className="leading-[normal] whitespace-pre-wrap">{`Log in `}</p>
        </div>
      </div>
      <div className="bg-[#2b2b2b] content-stretch flex h-[45px] items-center px-[12px] py-[15px] relative rounded-[8px] shrink-0 w-[317px]" data-name="txtEmail">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#585858] text-[12px]">Email</p>
      </div>
      <div className="bg-[#2b2b2b] content-stretch flex h-[45px] items-start px-[12px] py-[15px] relative rounded-[8px] shrink-0 w-[317px]" data-name="txtPassword">
        <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[12px] leading-[normal] not-italic relative shrink-0 text-[#585858] text-[12px] w-[65px] whitespace-pre-wrap">
          <p className="mb-0">Password</p>
          <p>&nbsp;</p>
        </div>
      </div>
      <div className="h-[20px] relative shrink-0 w-[317px]" data-name="forgotPassword">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[250px] not-italic text-[#00d5fa] text-[10px] text-center top-[10px] w-[134px]">
          <p className="leading-[normal] whitespace-pre-wrap">Forgot your password?</p>
        </div>
      </div>
      <div className="bg-[#3c57c5] content-stretch flex h-[45px] items-center justify-center p-[5px] relative rounded-[10px] shrink-0 w-[317px]" data-name="VIEW NOW">
        <div aria-hidden="true" className="absolute border-40 border-[#3d54c5] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <p className="font-['Kodchasan:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-white">LOG IN</p>
      </div>
      <div className="content-stretch flex h-[32px] items-center justify-between py-[10px] relative shrink-0 w-[317px]" data-name="or">
        <div className="h-0 relative shrink-0 w-[85px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 1">
              <line id="Line 1" stroke="var(--stroke-0, #00D5FA)" x2="85" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#00d5fa] text-[12px] text-center w-[108px]">
          <p className="leading-[normal] whitespace-pre-wrap">or continue with</p>
        </div>
        <div className="h-0 relative shrink-0 w-[85px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 1">
              <line id="Line 1" stroke="var(--stroke-0, #00D5FA)" x2="85" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#222] content-stretch flex gap-[8px] h-[45px] items-center justify-center relative rounded-[8px] shrink-0 w-[317px]" data-name="btnGoogle">
        <div aria-hidden="true" className="absolute border border-[#343434] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Frame />
        <p className="font-['Inter:Bold',sans-serif] font-bold h-[16px] leading-[normal] not-italic relative shrink-0 text-[12px] text-white w-[42px] whitespace-pre-wrap">Log in</p>
      </div>
      <div className="bg-[#222] content-stretch flex gap-[8px] h-[45px] items-center justify-center relative rounded-[8px] shrink-0 w-[317px]" data-name="btnFacebook">
        <div aria-hidden="true" className="absolute border border-[#343434] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <AkarIconsFacebookFill />
        <p className="font-['Inter:Bold',sans-serif] font-bold h-[16px] leading-[normal] not-italic relative shrink-0 text-[12px] text-white w-[42px] whitespace-pre-wrap">Log in</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#242c3b] overflow-clip relative rounded-[50px] size-full" data-name="1">
      <Bg />
      <Top />
      <div className="absolute h-[729px] left-[28px] top-[80px] w-[346px]" data-name="mikkel-bech-yjAFnkLtKY0-unsplash-removebg-preview 5">
        <div className="absolute inset-[-5.49%_-17.34%_-9.85%_-17.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 466 840.796">
            <g data-figma-bg-blur-radius="100" filter="url(#filter0_d_5_1244)" id="mikkel-bech-yjAFnkLtKY0-unsplash-removebg-preview 5">
              <path d={svgPaths.p1700940} fill="url(#paint0_linear_5_1244)" fillOpacity="0.6" shapeRendering="crispEdges" />
              <path d={svgPaths.p25416880} shapeRendering="crispEdges" stroke="url(#paint1_linear_5_1244)" strokeOpacity="0.2" strokeWidth="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="920.796" id="filter0_d_5_1244" width="546" x="-40" y="-60">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="20" />
                <feGaussianBlur stdDeviation="30" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0640972 0 0 0 0 0.0794837 0 0 0 0 0.108333 0 0 0 0.6 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1244" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1244" mode="normal" result="shape" />
              </filter>
              <clipPath id="bgblur_0_5_1244_clip_path" transform="translate(40 60)">
                <path d={svgPaths.p1700940} />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1244" x1="184.77" x2="333.974" y1="233.593" y2="634.578">
                <stop stopColor="#353F54" />
                <stop offset="1" stopColor="#222834" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1244" x1="98.7939" x2="424.998" y1="67.2241" y2="218.848">
                <stop stopColor="white" />
                <stop offset="0.844522" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute blur-[2px] h-[1001px] left-[-99px] top-[-40px] w-[542px]" data-name="image 1" />
      <Card />
      <Form />
    </div>
  );
}