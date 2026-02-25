import imgImage3 from "figma:asset/8fec67cc8fdf9e55080b2e9252c35b4b3ccd8fd5.png";
import imgUnsplashPUhxoSapPfa from "figma:asset/979824744bc981500901d17583fc75b95e4a8640.png";

function Frame2() {
  return (
    <div className="absolute inset-[6.49%_70.46%_89.45%_10.36%]">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-[39px] opacity-90 text-[32px] text-white top-0">Define</p>
      <div className="absolute left-0 size-[32px] top-[4px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[95px] relative shrink-0 text-[14px] text-white w-[266px]">
      <p className="absolute font-['Montserrat:Black',sans-serif] font-black leading-[17px] left-[0.75%] right-[51.88%] top-[calc(50%-48.09px)]">Point Take away</p>
      <ul className="absolute block font-['Montserrat:Regular',sans-serif] font-normal leading-[0] left-0 list-disc top-[22px] whitespace-nowrap whitespace-pre-wrap">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">User background</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">Personality</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[24px]">Goals</span>
        </li>
      </ul>
      <ul className="absolute block font-['Montserrat:Regular',sans-serif] font-normal leading-[0] left-[163px] top-[22px] whitespace-nowrap">
        <li className="list-disc ms-[21px] whitespace-pre-wrap">
          <span className="leading-[24px]">Frustation</span>
        </li>
      </ul>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[160px] items-center justify-center left-[145px] top-[calc(50%-302.09px)]">
      <p className="font-['Kodchasan:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[64px] text-white w-[560px] whitespace-pre-wrap">USER PERSONA</p>
      <Frame1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[145px] top-[60.04px]">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[145px] top-[60.04px]">
      <Group />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <p className="relative shrink-0 w-[120px] whitespace-pre-wrap">Full Name</p>
      <p className="relative shrink-0">:</p>
      <p className="relative shrink-0">Alex Turner</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <p className="relative shrink-0 w-[120px] whitespace-pre-wrap">Date of birth</p>
      <p className="relative shrink-0">:</p>
      <p className="relative shrink-0">August 19, 1992</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <p className="relative shrink-0 w-[120px] whitespace-pre-wrap">Age</p>
      <p className="relative shrink-0">:</p>
      <p className="relative shrink-0">33 years old</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <p className="relative shrink-0 w-[120px] whitespace-pre-wrap">Job</p>
      <p className="relative shrink-0">:</p>
      <p className="relative shrink-0">Product Manager</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <p className="relative shrink-0 w-[120px] whitespace-pre-wrap">Location</p>
      <p className="relative shrink-0">:</p>
      <p className="relative shrink-0">Toronto, Canada</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Montserrat:Medium',sans-serif] font-medium gap-[12px] items-start left-[16px] top-[314px]">
      <Frame9 />
      <Frame10 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[506px] whitespace-pre-wrap">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold relative shrink-0 w-[120px]">Statement</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium h-[50px] relative shrink-0 w-[340px]">I just want one app to control all my smart devices — not five different ones that each do one thing.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#383838] h-[620px] leading-[24px] left-[145px] overflow-clip rounded-[16px] text-[14px] text-white top-[240px] w-[372.667px]">
      <Frame11 />
      <Frame15 />
    </div>
  );
}

function UnsplashPUhxoSapPfa() {
  return (
    <div className="absolute h-[292px] left-[153px] rounded-[16px] top-[248px] w-[356px]" data-name="unsplash:pUhxoSapPFA">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute bg-[#272727] inset-0 rounded-[16px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgUnsplashPUhxoSapPfa} />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start leading-[24px] left-[16.33px] not-italic text-white top-[16px] whitespace-pre-wrap">
      <p className="font-['Kodchasan:Bold',sans-serif] relative shrink-0 text-[24px] w-[120px]">About</p>
      <p className="font-['Kodchasan:Medium',sans-serif] h-[232px] relative shrink-0 text-[14px] w-[370px]">
        Alex is a busy professional living in an urban apartment equipped with multiple smart devices — from Philips Hue lights to a Nest thermostat and Ring camera.
        <br aria-hidden="true" />
        {` While he enjoys using smart tech, managing them through separate apps has become frustrating and time-consuming.`}
        <br aria-hidden="true" />
        {` He values simplicity, clean design, and fast access to control all his devices without navigating multiple interfaces.`}
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[#383838] h-[300px] left-[541.67px] overflow-clip rounded-[16px] top-[240px] w-[402.67px]">
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[16.33px] not-italic top-[16px] whitespace-pre-wrap">
      <p className="font-['Kodchasan:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#00c48c] text-[24px] w-[120px]">Goals</p>
      <ul className="block font-['Kodchasan:Medium',sans-serif] h-[232px] leading-[0] list-disc relative shrink-0 text-[14px] text-white w-[370px]">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">Manage all smart home devices through one unified app</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">Save time by reducing app-switching</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">Easily monitor and control lighting, temperature, and security</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">Have a consistent and simple interface</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[24px]">Ensure reliable performance across all devices</span>
        </li>
      </ul>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#383838] h-[300px] left-[541.67px] overflow-clip rounded-[16px] top-[560px] w-[402.67px]">
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[16.67px] not-italic top-[16px] whitespace-pre-wrap">
      <p className="font-['Kodchasan:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#fecf29] text-[24px] w-[176px]">Personality</p>
      <ul className="block font-['Kodchasan:Medium',sans-serif] h-[232px] leading-[0] list-disc relative shrink-0 text-[14px] text-white w-[370px]">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">Tech-savvy</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">Organised</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">Practical</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">Curious</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">Appreciates clean design</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[24px]">Prefers functionality over flash</span>
        </li>
      </ul>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#383838] h-[300px] left-[964.33px] overflow-clip rounded-[16px] top-[240px] w-[402.67px]">
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[16.67px] not-italic top-[16px] whitespace-pre-wrap">
      <p className="font-['Kodchasan:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#ff3d3d] text-[24px] w-[182px]">Frustations</p>
      <ul className="block font-['Kodchasan:Medium',sans-serif] h-[232px] leading-[0] list-disc relative shrink-0 text-[14px] text-white w-[370px]">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">Needs multiple apps for different brands</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">Each app has different layouts and features</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">Devices sometimes disconnect or desync</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[24px]">Time wasted switching between interfaces</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[24px]">Overly complex automation setups he doesn’t need</span>
        </li>
      </ul>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[#383838] h-[300px] left-[964.33px] overflow-clip rounded-[16px] top-[560px] w-[402.67px]">
      <Frame19 />
    </div>
  );
}

export default function Mockup() {
  return (
    <div className="bg-[#272727] relative size-full" data-name="mockup">
      <Group1 />
      <Frame4 />
      <UnsplashPUhxoSapPfa />
      <Frame5 />
      <Frame7 />
      <Frame6 />
      <Frame8 />
    </div>
  );
}