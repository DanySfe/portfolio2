import svgPaths from "./svg-dgk31p0lbk";
import imgMapA1 from "figma:asset/cf2b644a46edb2c54d24f09a86f010e654a4e617.png";

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

function AngleLeft() {
  return (
    <div className="absolute left-[20px] size-[44px] top-[39px]" data-name="angle-left">
      <div className="absolute inset-[-113.64%_-68.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 144">
          <g filter="url(#filter0_dd_5_1207)" id="angle-left">
            <rect fill="url(#paint0_linear_5_1207)" height="44" rx="10" shapeRendering="crispEdges" width="44" x="30" y="50" />
            <rect height="43" rx="9.5" shapeRendering="crispEdges" stroke="url(#paint1_linear_5_1207)" strokeOpacity="0.6" style={{ mixBlendMode: "overlay" }} width="43" x="30.5" y="50.5" />
            <path d={svgPaths.p45f6600} fill="var(--fill-0, white)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="144" id="filter0_dd_5_1207" width="104" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0640972 0 0 0 0 0.0794837 0 0 0 0 0.108333 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1207" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="-20" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.167014 0 0 0 0 0.203125 0 0 0 0 0.270833 0 0 0 0.5 0" />
              <feBlend in2="effect1_dropShadow_5_1207" mode="normal" result="effect2_dropShadow_5_1207" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_5_1207" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1207" x1="32.2" x2="62.8464" y1="50" y2="109.431">
              <stop stopColor="#34C8E8" />
              <stop offset="1" stopColor="#4E4AF2" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1207" x1="30" x2="54.9884" y1="50" y2="102.969">
              <stop stopColor="white" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function TopNavigation() {
  return (
    <div className="absolute contents left-[20px] top-[39px]" data-name="Top Navigation">
      <AngleLeft />
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[107px] not-italic text-[20px] text-white top-[44px] tracking-[-0.3px]">SECURITY</p>
    </div>
  );
}

function Key() {
  return (
    <div className="absolute h-[42px] left-0 right-[calc(90%+5.4px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">Q</p>
      </div>
    </div>
  );
}

function Key1() {
  return (
    <div className="absolute h-[42px] left-[calc(10%+0.6px)] right-[calc(80%+4.8px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">W</p>
      </div>
    </div>
  );
}

function Key2() {
  return (
    <div className="absolute h-[42px] left-[calc(20%+1.2px)] right-[calc(70%+4.2px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">E</p>
      </div>
    </div>
  );
}

function Key3() {
  return (
    <div className="absolute h-[42px] left-[calc(30%+1.8px)] right-[calc(60%+3.6px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">R</p>
      </div>
    </div>
  );
}

function Key4() {
  return (
    <div className="absolute h-[42px] left-[calc(40%+2.4px)] right-[calc(50%+3px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">T</p>
      </div>
    </div>
  );
}

function Key5() {
  return (
    <div className="absolute h-[42px] left-[calc(50%+3px)] right-[calc(40%+2.4px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">Y</p>
      </div>
    </div>
  );
}

function Key6() {
  return (
    <div className="absolute h-[42px] left-[calc(60%+3.6px)] right-[calc(30%+1.8px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">U</p>
      </div>
    </div>
  );
}

function Key7() {
  return (
    <div className="absolute h-[42px] left-[calc(70%+4.2px)] right-[calc(20%+1.2px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">I</p>
      </div>
    </div>
  );
}

function Key8() {
  return (
    <div className="absolute h-[42px] left-[calc(80%+4.8px)] right-[calc(10%+0.6px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">O</p>
      </div>
    </div>
  );
}

function Key9() {
  return (
    <div className="absolute h-[42px] left-[calc(90%+5.4px)] right-0 top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">P</p>
      </div>
    </div>
  );
}

function TopRow() {
  return (
    <div className="absolute h-[42px] left-0 right-0 top-0" data-name="Top Row">
      <Key />
      <Key1 />
      <Key2 />
      <Key3 />
      <Key4 />
      <Key5 />
      <Key6 />
      <Key7 />
      <Key8 />
      <Key9 />
    </div>
  );
}

function Key10() {
  return (
    <div className="absolute h-[42px] left-0 right-[calc(88.89%+5.44px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">A</p>
      </div>
    </div>
  );
}

function Key11() {
  return (
    <div className="absolute h-[42px] left-[calc(11.11%+0.56px)] right-[calc(77.78%+4.89px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">S</p>
      </div>
    </div>
  );
}

function Key12() {
  return (
    <div className="absolute h-[42px] left-[calc(22.22%+1.11px)] right-[calc(66.67%+4.33px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">D</p>
      </div>
    </div>
  );
}

function Key13() {
  return (
    <div className="absolute h-[42px] left-[calc(33.33%+1.67px)] right-[calc(55.56%+2.78px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">F</p>
      </div>
    </div>
  );
}

function Key14() {
  return (
    <div className="absolute h-[42px] left-[calc(44.44%+3.22px)] right-[calc(44.44%+3.22px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">G</p>
      </div>
    </div>
  );
}

function Key15() {
  return (
    <div className="absolute h-[42px] left-[calc(55.56%+2.78px)] right-[calc(33.33%+1.67px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">H</p>
      </div>
    </div>
  );
}

function Key16() {
  return (
    <div className="absolute h-[42px] left-[calc(66.67%+4.33px)] right-[calc(22.22%+1.11px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">J</p>
      </div>
    </div>
  );
}

function Key17() {
  return (
    <div className="absolute h-[42px] left-[calc(77.78%+4.89px)] right-[calc(11.11%+0.56px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">K</p>
      </div>
    </div>
  );
}

function Key18() {
  return (
    <div className="absolute h-[42px] left-[calc(88.89%+5.44px)] right-0 top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">L</p>
      </div>
    </div>
  );
}

function MiddleRow() {
  return (
    <div className="absolute h-[42px] left-[19px] right-[19px] top-[54px]" data-name="Middle Row">
      <Key10 />
      <Key11 />
      <Key12 />
      <Key13 />
      <Key14 />
      <Key15 />
      <Key16 />
      <Key17 />
      <Key18 />
    </div>
  );
}

function Key19() {
  return (
    <div className="absolute h-[42px] left-0 right-[calc(85.71%+5.29px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">Z</p>
      </div>
    </div>
  );
}

function Key20() {
  return (
    <div className="absolute h-[42px] left-[calc(14.29%+0.71px)] right-[calc(71.43%+4.57px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">X</p>
      </div>
    </div>
  );
}

function Key21() {
  return (
    <div className="absolute h-[42px] left-[calc(28.57%+1.43px)] right-[calc(57.14%+3.86px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">C</p>
      </div>
    </div>
  );
}

function Key22() {
  return (
    <div className="absolute h-[42px] left-[calc(42.86%+2.14px)] right-[calc(42.86%+2.14px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">V</p>
      </div>
    </div>
  );
}

function Key23() {
  return (
    <div className="absolute h-[42px] left-[calc(71.43%+3.57px)] right-[calc(14.29%+0.71px)] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">N</p>
      </div>
    </div>
  );
}

function Key24() {
  return (
    <div className="absolute h-[42px] left-[calc(85.71%+5.29px)] right-0 top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[22px] text-center text-white top-1/2 tracking-[0.35px]">
        <p className="leading-[28px] whitespace-pre-wrap">M</p>
      </div>
    </div>
  );
}

function Keys1() {
  return (
    <div className="absolute h-[42px] left-[58px] right-[58px] top-0" data-name="Keys">
      <Key19 />
      <Key20 />
      <Key21 />
      <Key22 />
      <Key23 />
      <Key24 />
    </div>
  );
}

function Key25() {
  return (
    <div className="absolute left-0 size-[42px] top-0" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.3px] left-1/2 top-[calc(50%+0.15px)] w-[19px]" data-name="Shift Active">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16.3">
          <path d={svgPaths.p1fa9a780} fill="var(--fill-0, white)" id="Shift Active" />
        </svg>
      </div>
    </div>
  );
}

function Key26() {
  return (
    <div className="absolute right-0 size-[42px] top-0" data-name="_Key">
      <div className="absolute bg-[#4a5771] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-0.5px)] top-[calc(50%-0.5px)] w-[23px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 17">
          <g id="Union">
            <path d={svgPaths.p308e9e00} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p320b9800} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BottomRow() {
  return (
    <div className="absolute h-[42px] left-0 right-0 top-[108px]" data-name="Bottom Row">
      <Keys1 />
      <Key25 />
      <Key26 />
    </div>
  );
}

function Keys() {
  return (
    <div className="absolute h-[150px] left-[3px] right-[3px] top-[8px]" data-name="Keys">
      <TopRow />
      <MiddleRow />
      <BottomRow />
    </div>
  );
}

function Key27() {
  return (
    <div className="h-[42px] relative shrink-0 w-[91px]" data-name="_Key">
      <div className="absolute bg-[#4a5771] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[16px] text-center text-white top-[calc(50%+0.5px)] tracking-[-0.32px]">
        <p className="leading-[21px] whitespace-pre-wrap">123</p>
      </div>
    </div>
  );
}

function Key28() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative" data-name="_Key">
      <div className="absolute bg-[#353f54] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[16px] text-center text-white top-[calc(50%+0.5px)] tracking-[-0.32px]">
        <p className="leading-[21px] whitespace-pre-wrap">space</p>
      </div>
    </div>
  );
}

function Key29() {
  return (
    <div className="h-[42px] relative shrink-0 w-[91px]" data-name="_Key">
      <div className="absolute bg-[#4a5771] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.3)]" data-name="_KeyContainer" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[16px] text-center text-white top-[calc(50%+0.5px)] tracking-[-0.32px]">
        <p className="leading-[21px] whitespace-pre-wrap">return</p>
      </div>
    </div>
  );
}

function BottomRow1() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-start left-[3px] right-[3px] top-[170px]" data-name="Bottom Row">
      <Key27 />
      <Key28 />
      <Key29 />
    </div>
  );
}

function EmojiDictation() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[31px] right-[31px] top-[235px]" data-name="Emoji & Dictation">
      <div className="relative shrink-0 size-[27px]" data-name="Icon / Emoji">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <path clipRule="evenodd" d={svgPaths.p7205000} fill="var(--fill-0, white)" fillOpacity="0.6" fillRule="evenodd" id="Icon / Emoji" />
        </svg>
      </div>
      <div className="h-[28px] relative shrink-0 w-[19px]" data-name="Icon / Dictation">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 28">
          <path d={svgPaths.p33b21b00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon / Dictation" />
        </svg>
      </div>
    </div>
  );
}

function AlphabeticKeyboard() {
  return (
    <div className="absolute backdrop-blur-[54.366px] bg-[#1b202d] h-[290px] left-0 top-[844px] w-[390px]" data-name="AlphabeticKeyboard">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Keys />
        <BottomRow1 />
        <EmojiDictation />
        <div className="absolute bottom-0 h-[34px] left-px right-0" data-name="HomeIndicator">
          <div className="-translate-x-1/2 absolute bg-white bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-[-0.5px] pointer-events-none" />
    </div>
  );
}

function Items() {
  return <div className="absolute h-[107.995px] left-[2px] top-[595px] w-[389.995px]" data-name="Items 4" />;
}

function Group1() {
  return (
    <div className="absolute contents left-[74px] top-[286px]">
      <div className="absolute left-[74px] size-[21px] top-[286px]">
        <div className="absolute inset-[0_-19.05%_-38.1%_-19.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
            <g filter="url(#filter0_d_5_1190)" id="Ellipse 13">
              <circle cx="14.5" cy="10.5" fill="var(--fill-0, white)" r="10.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="29" id="filter0_d_5_1190" width="29" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1190" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1190" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[76px] not-italic text-[8px] text-[rgba(0,0,0,0.87)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[292px] tracking-[-0.3px]">TAP</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[233px] top-[286px]">
      <div className="absolute left-[233px] size-[21px] top-[286px]">
        <div className="absolute inset-[0_-19.05%_-38.1%_-19.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
            <g filter="url(#filter0_d_5_1190)" id="Ellipse 13">
              <circle cx="14.5" cy="10.5" fill="var(--fill-0, white)" r="10.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="29" id="filter0_d_5_1190" width="29" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1190" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1190" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[235px] not-italic text-[8px] text-[rgba(0,0,0,0.87)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[292px] tracking-[-0.3px]">TAP</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[294px] top-[217px]">
      <div className="absolute left-[294px] size-[21px] top-[217px]">
        <div className="absolute inset-[0_-19.05%_-38.1%_-19.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
            <g filter="url(#filter0_d_5_1190)" id="Ellipse 13">
              <circle cx="14.5" cy="10.5" fill="var(--fill-0, white)" r="10.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="29" id="filter0_d_5_1190" width="29" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1190" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1190" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[296px] not-italic text-[8px] text-[rgba(0,0,0,0.87)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[223px] tracking-[-0.3px]">TAP</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[233px] top-[127px]">
      <div className="absolute left-[233px] size-[21px] top-[127px]">
        <div className="absolute inset-[0_-19.05%_-38.1%_-19.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
            <g filter="url(#filter0_d_5_1190)" id="Ellipse 13">
              <circle cx="14.5" cy="10.5" fill="var(--fill-0, white)" r="10.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="29" id="filter0_d_5_1190" width="29" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1190" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1190" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[235px] not-italic text-[8px] text-[rgba(0,0,0,0.87)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[133px] tracking-[-0.3px]">TAP</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[233px] top-[353px]">
      <div className="absolute left-[233px] size-[21px] top-[353px]">
        <div className="absolute inset-[0_-19.05%_-38.1%_-19.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
            <g filter="url(#filter0_d_5_1190)" id="Ellipse 13">
              <circle cx="14.5" cy="10.5" fill="var(--fill-0, white)" r="10.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="29" id="filter0_d_5_1190" width="29" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1190" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1190" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[235px] not-italic text-[8px] text-[rgba(0,0,0,0.87)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[359px] tracking-[-0.3px]">TAP</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[164px] top-[171px]">
      <div className="absolute left-[164px] size-[21px] top-[171px]">
        <div className="absolute inset-[0_-19.05%_-38.1%_-19.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
            <g filter="url(#filter0_d_5_1190)" id="Ellipse 13">
              <circle cx="14.5" cy="10.5" fill="var(--fill-0, white)" r="10.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="29" id="filter0_d_5_1190" width="29" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1190" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1190" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[166px] not-italic text-[8px] text-[rgba(0,0,0,0.87)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[177px] tracking-[-0.3px]">TAP</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[31px] top-[330px]">
      <div className="absolute left-[31px] size-[21px] top-[330px]">
        <div className="absolute inset-[0_-19.05%_-38.1%_-19.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
            <g filter="url(#filter0_d_5_1190)" id="Ellipse 13">
              <circle cx="14.5" cy="10.5" fill="var(--fill-0, white)" r="10.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="29" id="filter0_d_5_1190" width="29" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1190" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1190" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[33px] not-italic text-[8px] text-[rgba(0,0,0,0.87)] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[336px] tracking-[-0.3px]">TAP</p>
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
    <div className="absolute h-[125px] left-px overflow-clip top-[742px] w-[390px]" data-name="Tab Bar">
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

export default function Component() {
  return (
    <div className="bg-[#242c3b] overflow-clip relative rounded-[50px] size-full" data-name="5">
      <div className="absolute h-[44px] left-[8px] top-0 w-[375px]" data-name="Status Bar">
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
      <AlphabeticKeyboard />
      <div className="absolute h-[293.5px] left-[10px] top-[100px] w-[374px]" data-name="mikkel-bech-yjAFnkLtKY0-unsplash-removebg-preview 5">
        <div className="absolute inset-[0_-1.07%_-2.73%_-1.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 382 301.5">
            <g filter="url(#filter0_d_5_1202)" id="mikkel-bech-yjAFnkLtKY0-unsplash-removebg-preview 5">
              <path d={svgPaths.p303d9940} fill="url(#paint0_linear_5_1202)" fillOpacity="0.6" shapeRendering="crispEdges" />
              <path d={svgPaths.p1a42f280} shapeRendering="crispEdges" stroke="url(#paint1_linear_5_1202)" strokeOpacity="0.2" strokeWidth="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="301.5" id="filter0_d_5_1202" width="382" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1202" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1202" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1202" x1="138.867" x2="166.863" y1="82.5892" y2="273.227">
                <stop stopColor="#353F54" />
                <stop offset="1" stopColor="#222834" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1202" x1="45.9333" x2="225.564" y1="11.6141" y2="223.168">
                <stop stopColor="white" />
                <stop offset="0.844522" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Items />
      <div className="absolute h-[307px] left-[8px] rounded-[22px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[94px] w-[375px]" data-name="MAP A 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[22px]">
          <img alt="" className="absolute h-[123.26%] left-[-0.52%] max-w-none top-[-17.28%] w-[100.79%]" src={imgMapA1} />
        </div>
      </div>
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group7 />
      <Group5 />
      <Group6 />
      <div className="absolute border border-solid border-white h-[90px] left-[45px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[477px] w-[296px]" style={{ backgroundImage: "linear-gradient(-13.1014deg, rgb(0, 255, 255) 7.8031%, rgb(219, 0, 239) 91.328%)" }} />
      <div className="absolute border border-solid border-white h-[90px] left-[45px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[597px] w-[296px]" style={{ backgroundImage: "linear-gradient(-13.1014deg, rgb(125, 27, 29) 19.047%, rgb(0, 52, 169) 91.328%)" }} />
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[82px] not-italic text-[30px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white top-[501px] tracking-[2px]">SLEEP MOOD</p>
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[107px] not-italic text-[30px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white top-[622px] tracking-[2px]">VOCATION</p>
      <div className="absolute flex items-center justify-center left-[228px] size-[148.336px] top-[446px]" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-36.7deg]">
          <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[106px]" data-name="ps-Recovered 1" />
        </div>
      </div>
      <TabBar />
    </div>
  );
}