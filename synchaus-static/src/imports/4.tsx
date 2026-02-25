import svgPaths from "./svg-jz9c2jjfgp";

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
          <g filter="url(#filter0_dd_5_1079)" id="angle-left">
            <rect fill="url(#paint0_linear_5_1079)" height="44" rx="10" shapeRendering="crispEdges" width="44" x="30" y="50" />
            <rect height="43" rx="9.5" shapeRendering="crispEdges" stroke="url(#paint1_linear_5_1079)" strokeOpacity="0.6" style={{ mixBlendMode: "overlay" }} width="43" x="30.5" y="50.5" />
            <path d={svgPaths.p45f6600} fill="var(--fill-0, white)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="144" id="filter0_dd_5_1079" width="104" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0640972 0 0 0 0 0.0794837 0 0 0 0 0.108333 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1079" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="-20" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.167014 0 0 0 0 0.203125 0 0 0 0 0.270833 0 0 0 0.5 0" />
              <feBlend in2="effect1_dropShadow_5_1079" mode="normal" result="effect2_dropShadow_5_1079" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_5_1079" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1079" x1="32.2" x2="62.8464" y1="50" y2="109.431">
              <stop stopColor="#34C8E8" />
              <stop offset="1" stopColor="#4E4AF2" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1079" x1="30" x2="54.9884" y1="50" y2="102.969">
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
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[107px] not-italic text-[20px] text-white top-[44px] tracking-[-0.3px]">LIGHTS</p>
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
            <path d={svgPaths.p2862ae00} fill="url(#paint0_linear_5_1063)" fillOpacity="0.4" />
            <path d={svgPaths.p2b855d80} stroke="url(#paint1_linear_5_1063)" strokeOpacity="0.2" strokeWidth="2" style={{ mixBlendMode: "overlay" }} />
          </g>
          <defs>
            <clipPath id="bgblur_0_5_1063_clip_path" transform="translate(100 100)">
              <path d={svgPaths.p2862ae00} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1063" x1="195" x2="195" y1="-5" y2="121">
              <stop stopColor="#363E51" />
              <stop offset="1" stopColor="#181C24" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1063" x1="192.5" x2="191" y1="-3.49999" y2="41.5">
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

function Group1() {
  return (
    <div className="absolute inset-[6.25%_6.25%_0.78%_6.25%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.75 31.6115">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1a7c48f0} fill="var(--fill-0, #E6E6E6)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcutePowerFill() {
  return (
    <div className="absolute bg-[#0f0] left-[80px] overflow-clip rounded-[20px] size-[34px] top-[487px]" data-name="mingcute:power-fill">
      <Group1 />
    </div>
  );
}

function MdiAirFilter({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[269px] size-[45px] top-[485px]"} data-name="mdi:air-filter">
      <div className="absolute inset-[8.33%_8.32%_8.33%_8.33%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5047 37.5">
          <path d={svgPaths.p3c73200} fill="var(--fill-0, #E6E6E6)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#242c3b] overflow-clip relative rounded-[50px] size-full" data-name="4">
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
      <div className="absolute h-[345px] left-[10px] top-[99px] w-[374px]" data-name="mikkel-bech-yjAFnkLtKY0-unsplash-removebg-preview 5">
        <div className="absolute inset-[0_-1.07%_-2.32%_-1.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 382 353">
            <g filter="url(#filter0_d_5_1065)" id="mikkel-bech-yjAFnkLtKY0-unsplash-removebg-preview 5">
              <path d={svgPaths.pdf8b300} fill="url(#paint0_linear_5_1065)" fillOpacity="0.6" shapeRendering="crispEdges" />
              <path d={svgPaths.p47ec4c0} shapeRendering="crispEdges" stroke="url(#paint1_linear_5_1065)" strokeOpacity="0.2" strokeWidth="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="353" id="filter0_d_5_1065" width="382" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1065" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1065" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1065" x1="138.867" x2="177.241" y1="97.081" y2="319.379">
                <stop stopColor="#353F54" />
                <stop offset="1" stopColor="#222834" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1065" x1="45.9333" x2="259.914" y1="13.652" y2="228.043">
                <stop stopColor="white" />
                <stop offset="0.844522" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[157px] left-[10px] top-[471px] w-[177px]" data-name="mikkel-bech-yjAFnkLtKY0-unsplash-removebg-preview 8">
        <div className="absolute inset-[0_-2.26%_-5.1%_-2.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185 165">
            <g filter="url(#filter0_d_5_1045)" id="mikkel-bech-yjAFnkLtKY0-unsplash-removebg-preview 8">
              <path d={svgPaths.p2a21b600} fill="url(#paint0_linear_5_1045)" fillOpacity="0.6" shapeRendering="crispEdges" />
              <path d={svgPaths.p1adb8070} shapeRendering="crispEdges" stroke="url(#paint1_linear_5_1045)" strokeOpacity="0.2" strokeWidth="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="165" id="filter0_d_5_1045" width="185" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1045" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1045" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1045" x1="67.8273" x2="84.6558" y1="44.1789" y2="145.562">
                <stop stopColor="#353F54" />
                <stop offset="1" stopColor="#222834" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1045" x1="23.8455" x2="121.14" y1="6.21266" y2="107.59">
                <stop stopColor="white" />
                <stop offset="0.844522" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[157px] left-[206px] top-[474px] w-[177px]" data-name="mikkel-bech-yjAFnkLtKY0-unsplash-removebg-preview 12">
        <div className="absolute inset-[0_-2.26%_-5.1%_-2.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185 165">
            <g filter="url(#filter0_d_5_1045)" id="mikkel-bech-yjAFnkLtKY0-unsplash-removebg-preview 8">
              <path d={svgPaths.p2a21b600} fill="url(#paint0_linear_5_1045)" fillOpacity="0.6" shapeRendering="crispEdges" />
              <path d={svgPaths.p1adb8070} shapeRendering="crispEdges" stroke="url(#paint1_linear_5_1045)" strokeOpacity="0.2" strokeWidth="2" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="165" id="filter0_d_5_1045" width="185" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1045" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1045" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1045" x1="67.8273" x2="84.6558" y1="44.1789" y2="145.562">
                <stop stopColor="#353F54" />
                <stop offset="1" stopColor="#222834" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1045" x1="23.8455" x2="121.14" y1="6.21266" y2="107.59">
                <stop stopColor="white" />
                <stop offset="0.844522" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[39px] items-center justify-center left-[145px] top-[351px] w-[106px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[39px] relative w-[106px]" data-name="mikkel-bech-yjAFnkLtKY0-unsplash-removebg-preview 11">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 39">
              <g id="mikkel-bech-yjAFnkLtKY0-unsplash-removebg-preview 11">
                <path d={svgPaths.p39e3f1f0} fill="url(#paint0_linear_5_1035)" fillOpacity="0.1" />
                <path d={svgPaths.p7cd2d80} stroke="url(#paint1_linear_5_1035)" strokeOpacity="0.05" strokeWidth="2" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_1035" x1="38.2242" x2="39.9976" y1="10.9744" y2="36.7304">
                  <stop offset="0.235577" stopColor="white" />
                  <stop offset="1" stopColor="#FFBE98" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_5_1035" x1="11.8848" x2="28.5092" y1="1.54327" y2="43.3037">
                  <stop stopColor="white" />
                  <stop offset="0.844522" stopColor="#FB5B01" />
                  <stop offset="1" stopColor="#FF0000" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <Items />
      <TabBar />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[145px] not-italic text-[0px] text-[50px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white top-[241px] tracking-[-0.3px]">
        <span className="leading-[normal]">35</span>
        <span className="leading-[normal] tracking-[-10px]">{` `}</span>
        <span className="leading-[normal]">%</span>
      </p>
      <div className="absolute h-[141px] left-[68px] top-[170px] w-[255px]">
        <div className="absolute inset-[-7.09%_-5.49%_-12.77%_-5.49%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 283 169">
            <g filter="url(#filter0_d_5_1031)" id="Vector 1">
              <g clipPath="url(#paint0_angular_5_1031_clip_path)" data-figma-skip-parse="true">
                <g transform="matrix(0.0850971 -0.0942093 0.0931136 0.0836965 141.124 151.07)" />
              </g>
              <path d={svgPaths.p24428f00} data-figma-gradient-fill="{'type':'GRADIENT_ANGULAR','stops':[{'color':{'r':1.0,'g':0.34999999403953552,'b':0.0,'a':1.0},'position':0.095141544938087463},{'color':{'r':1.0,'g':1.0,'b':1.0,'a':1.0},'position':0.90717828273773193},{'color':{'r':0.89423078298568726,'g':0.41960057616233826,'b':0.0042991861701011658,'a':0.97500002384185791},'position':0.91229814291000366}],'stopsVar':[{'color':{'r':1.0,'g':0.34999999403953552,'b':0.0,'a':1.0},'position':0.095141544938087463},{'color':{'r':1.0,'g':1.0,'b':1.0,'a':1.0},'position':0.90717828273773193},{'color':{'r':0.89423078298568726,'g':0.41960057616233826,'b':0.0042991861701011658,'a':0.97500002384185791},'position':0.91229814291000366}],'transform':{'m00':170.19422912597656,'m01':186.22714233398438,'m02':-37.086788177490234,'m10':-188.41859436035156,'m11':167.39291381835938,'m12':161.58282470703125},'opacity':1.0,'blendMode':'NORMAL','visible':true}" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="169" id="filter0_d_5_1031" width="283" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_1031" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_1031" mode="normal" result="shape" />
              </filter>
              <clipPath id="paint0_angular_5_1031_clip_path">
                <path d={svgPaths.p24428f00} />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Kodchasan:Bold',sans-serif] h-[21px] leading-[normal] left-[195px] not-italic text-[16px] text-center text-white top-[360px] tracking-[-0.3px] w-[70px] whitespace-pre-wrap">Medium</p>
      <MingcutePowerFill />
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[62px] not-italic text-[24px] text-white top-[535px] tracking-[-0.3px]">Power</p>
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[231px] not-italic text-[22px] text-white top-[541px] tracking-[-0.3px] w-[139px] whitespace-pre-wrap">Filter status</p>
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[73px] not-italic text-[#4091ed] text-[32px] top-[576px] tracking-[-0.3px]">ON</p>
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[262px] not-italic text-[#11c700] text-[24px] top-[581px] tracking-[-0.3px]">Good</p>
      <MdiAirFilter />
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[46px] not-italic text-[24px] text-white top-[325px] tracking-[-0.3px]">100</p>
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[314px] not-italic text-[24px] text-white top-[325px] tracking-[-0.3px]">0</p>
      <p className="absolute font-['Kodchasan:Bold',sans-serif] leading-[normal] left-[26px] not-italic text-[32px] text-white top-[103px] tracking-[-0.3px]">Bedroom</p>
    </div>
  );
}