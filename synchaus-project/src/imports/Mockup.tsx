import svgPaths from "./svg-b88s3xqarf";
import imgShadow from "figma:asset/7e996bda7ca419fe99d918d8e6c056c13cbb2d63.png";
import imgScreen from "figma:asset/f63f181554845c90cfdc4301f2900bff3f383c7f.png";
import imgHome7 from "figma:asset/654bba2545ef5f91d2cc4f3b25c2763769ba1b6d.png";
import { imgHome6 } from "./svg-pi1uv";

function CircleBg() {
  return (
    <div className="-translate-y-1/2 absolute opacity-30 right-[855px] size-[486px] top-[calc(50%-158px)]" data-name="Circle BG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 486 486">
        <g id="Circle BG">
          <circle cx="243" cy="243" id="Ellipse 1" r="235" stroke="var(--stroke-0, #1F1F1F)" strokeWidth="16" />
          <g filter="url(#filter0_d_1_1137)" id="Ellipse 2">
            <circle cx="243" cy="243" fill="var(--fill-0, #1F1F1F)" r="170" />
          </g>
          <circle cx="243" cy="243" fill="var(--fill-0, #282828)" id="Ellipse 3" r="100" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="368" id="filter0_d_1_1137" width="368" x="59" y="63">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="7" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.312356 0 0 0 0 0.312356 0 0 0 0 0.312356 0 0 0 0.05 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1137" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1137" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function FavoriteBorderBlack24Dp() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="favorite_border_black_24dp (1) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_1106)" id="favorite_border_black_24dp (1) 1">
          <g id="Vector" />
          <path d={svgPaths.p3650ba00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1106">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#383838] left-[270px] opacity-30 overflow-clip rounded-[64px] shadow-[4px_4px_34px_0px_rgba(108,108,108,0.08)] size-[64px] top-[163px]">
      <FavoriteBorderBlack24Dp />
    </div>
  );
}

function AccountBalanceBlack24Dp() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="account_balance_black_24dp (1) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_1121)" id="account_balance_black_24dp (1) 1">
          <g id="Vector" />
          <path d={svgPaths.p142c8e00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1121">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#383838] left-[185px] opacity-30 overflow-clip rounded-[64px] shadow-[4px_4px_34px_0px_rgba(108,108,108,0.08)] size-[64px] top-[303px]">
      <AccountBalanceBlack24Dp />
    </div>
  );
}

function ReceiptLongBlack24Dp() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="receipt_long_black_24dp (1) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_1110)" id="receipt_long_black_24dp (1) 1">
          <g id="Vector" />
          <g id="Group">
            <path d={svgPaths.p19e0b000} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p13dfc300} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p20ec9780} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p19d6e580} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p33d841c0} fill="var(--fill-0, white)" id="Vector_6" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1110">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[#383838] left-[355px] opacity-30 overflow-clip rounded-[64px] shadow-[4px_4px_34px_0px_rgba(108,108,108,0.08)] size-[64px] top-[303px]">
      <ReceiptLongBlack24Dp />
    </div>
  );
}

function InnerCircleLogos() {
  return (
    <div className="absolute contents left-[185px] top-[163px]" data-name="Inner Circle Logos">
      <Frame6 />
      <Frame4 />
      <Frame9 />
    </div>
  );
}

function PhoneIphoneBlack24Dp() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="phone_iphone_black_24dp (1) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="phone_iphone_black_24dp (1) 1">
          <path d={svgPaths.p39155c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#383838] left-[51px] opacity-30 overflow-clip rounded-[64px] size-[64px] top-[135px]">
      <PhoneIphoneBlack24Dp />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_4.17%_9.68%_16.67%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3333 28.9033">
        <g id="Group">
          <path d={svgPaths.p2c5d8440} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AddLocationAltBlack24Dp() {
  return (
    <div className="absolute left-[16px] overflow-clip size-[32px] top-[16px]" data-name="add_location_alt_black_24dp 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <g id="Vector" />
        </g>
      </svg>
      <Group />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#383838] left-[489px] opacity-30 overflow-clip rounded-[64px] size-[64px] top-[135px]">
      <AddLocationAltBlack24Dp />
    </div>
  );
}

function ShoppingBagBlack24Dp() {
  return (
    <div className="absolute left-[16px] overflow-clip size-[32px] top-[16px]" data-name="shopping_bag_black_24dp 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <g id="Vector" />
          <path d={svgPaths.p24463f80} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#383838] left-[270px] opacity-30 overflow-clip rounded-[64px] size-[64px] top-0">
      <ShoppingBagBlack24Dp />
    </div>
  );
}

function CardMembershipBlack24Dp() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="card_membership_black_24dp 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_1078)" id="card_membership_black_24dp 1">
          <g id="Vector" />
          <path d={svgPaths.p230ae00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1078">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[#383838] left-[270px] opacity-30 overflow-clip rounded-[64px] size-[64px] top-[486px]">
      <CardMembershipBlack24Dp />
    </div>
  );
}

function RoomServiceBlack24Dp() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="room_service_black_24dp 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_1088)" id="room_service_black_24dp 1">
          <g id="Vector" />
          <path d={svgPaths.p294f270} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1088">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#383838] left-[473px] opacity-30 overflow-clip rounded-[64px] size-[64px] top-[374px]">
      <RoomServiceBlack24Dp />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[20.83%_8.34%_20.83%_8.33%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 18.6667">
        <g id="Group">
          <path d={svgPaths.pe388262} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pbf0c980} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2e67ae00} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[20.83%_8.34%_20.83%_8.33%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[20.83%_8.34%_20.83%_8.33%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function DeliveryDiningBlack24Dp() {
  return (
    <div className="absolute left-[16px] overflow-clip size-[32px] top-[16px]" data-name="delivery_dining_black_24dp 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <g id="Vector" />
        </g>
      </svg>
      <Group1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[#383838] left-[67px] opacity-30 overflow-clip rounded-[64px] size-[64px] top-[374px]">
      <DeliveryDiningBlack24Dp />
    </div>
  );
}

function OuterCircleLogos() {
  return (
    <div className="absolute contents left-[51px] top-0" data-name="Outer Circle Logos">
      <Frame3 />
      <Frame2 />
      <Frame1 />
      <Frame10 />
      <Frame7 />
      <Frame5 />
    </div>
  );
}

function Logos() {
  return (
    <div className="absolute contents left-[51px] top-0" data-name="Logos">
      <CircleBg />
      <InnerCircleLogos />
      <OuterCircleLogos />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute h-[866px] left-0 overflow-clip top-0 w-[1400px]" data-name="Background">
      <div className="absolute h-[432px] left-0 top-0 w-[1400px]" data-name="BG">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1400 432">
          <path d="M0 0H1400V432H0V0Z" data-figma-bg-blur-radius="100" fill="url(#paint0_linear_1_1133)" fillOpacity="0.7" id="BG" />
          <defs>
            <clipPath id="bgblur_0_1_1133_clip_path" transform="translate(100 100)">
              <path d="M0 0H1400V432H0V0Z" />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1133" x1="700" x2="700" y1="18.5" y2="367">
              <stop stopColor="#393939" />
              <stop offset="1" stopColor="#393939" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[937.5px] left-[-57.5px] top-[-70.5px] w-[1261px]">
        <div className="absolute inset-[0_0_-0.11%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1261.96 938.796">
            <path d={svgPaths.p2ffbdc40} id="Vector 1" stroke="var(--stroke-0, #1F1F1F)" strokeDasharray="5 5" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[1042px] size-[100px] top-[66px]">
        <div className="absolute inset-[-10%_-14%_-18%_-14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
            <g filter="url(#filter0_d_1_1119)" id="Ellipse 6">
              <circle cx="64" cy="60" fill="var(--fill-0, #383838)" r="50" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="128" id="filter0_d_1_1119" width="128" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.312356 0 0 0 0 0.312356 0 0 0 0 0.312356 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1119" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1119" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[1072px] size-[40px] top-[96px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #4F6BE7)" id="Ellipse 8" r="20" />
        </svg>
      </div>
      <Logos />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[350px] top-[64px]">
      <p className="absolute font-['Rubik:Regular',sans-serif] font-normal leading-[20px] left-[614px] text-[#4f6be7] text-[24px] top-[64px]">INTRODUCTION</p>
      <p className="absolute font-['Kodchasan:SemiBold',sans-serif] leading-[20px] left-[520px] not-italic text-[42px] text-white top-[116px]">About This Project</p>
      <p className="-translate-x-1/2 absolute font-['Kodchasan:Regular',sans-serif] leading-[1.6] left-[700px] not-italic text-[20px] text-center text-white top-[178px] w-[700px] whitespace-pre-wrap">This project functional UX and UI Designer to overcome the immense difficulty, broad minded and interactive and advanced UI Design.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[36px] top-[136px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4f6be7] text-[24px]">GET STARTED</p>
      <p className="font-['Rubik:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[42px] text-white">Overview</p>
      <p className="font-['Kodchasan:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[20px] text-white w-[700px] whitespace-pre-wrap">This project challenged me as a UX and UI Designer to craft an intuitive and universal smart home platform that eliminates the complexity of managing multiple apps. SyncHaus was built with the vision of merging simplicity, usability, and a sleek, futuristic aesthetic for everyday smart living.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[36px] overflow-clip p-[8px] rounded-[8px] top-[382px]">
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[24px] text-center text-white">Platform</p>
    </div>
  );
}

function PhoneIphoneBlack24Dp1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="phone_iphone_black_24dp (1) 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="phone_iphone_black_24dp (1) 2">
          <path d={svgPaths.p39155c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#4f6be7] content-stretch flex gap-[10px] items-center justify-center left-[36px] overflow-clip p-[8px] rounded-[8px] top-[452px]">
      <PhoneIphoneBlack24Dp1 />
      <p className="font-['Rubik:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[24px] text-center text-white w-[159px] whitespace-pre-wrap">Android/IOS</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[36px] top-[136px]">
      <Frame8 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[36px] top-[136px]">
      <Group6 />
    </div>
  );
}

function Device() {
  return (
    <div className="absolute contents h-[648.751px] left-[853px] top-[-104px] w-[444.378px]" data-name="Device">
      <div className="absolute flex h-[648.45px] items-center justify-center left-[853.17px] top-[-103.79px] w-[443.932px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.11deg]">
          <div className="h-[590.781px] relative w-[291.406px]" data-name="Change Color">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 291.406 590.781">
              <path clipRule="evenodd" d={svgPaths.p25efad00} fill="var(--fill-0, #3A4552)" fillRule="evenodd" id="Change Color" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[648.751px] items-center justify-center left-[853px] mix-blend-multiply top-[-104px] w-[444.378px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.11deg]">
          <div className="h-[590.976px] relative w-[291.814px]" data-name="Shadow">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShadow} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[648.751px] items-center justify-center left-[853px] mix-blend-screen top-[-104px] w-[444.378px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.11deg]">
          <div className="h-[590.976px] relative w-[291.814px]" data-name="Screen">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgScreen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents h-[567.327px] left-[885.15px] top-[-83.86px] w-[392.676px]">
      <div className="absolute flex h-[567.327px] items-center justify-center left-[885.15px] top-[-83.86px] w-[392.676px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.11deg]">
          <div className="h-[515.467px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.229px_6.559px] mask-size-[389.506px_595.152px] relative w-[259.812px]" data-name="Home-6" style={{ maskImage: `url('${imgHome6}')` }}>
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHome7} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Mockup1() {
  return (
    <div className="absolute contents h-[608.204px] left-[874.16px] top-[-83.82px] w-[402.612px]" data-name="Mockup">
      <div className="absolute flex h-[608.204px] items-center justify-center left-[874.16px] top-[-83.82px] w-[402.612px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.11deg]">
          <div className="h-[558.631px] relative w-[257.684px]" data-name="Mask">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257.684 558.631">
              <path clipRule="evenodd" d={svgPaths.p20d7af80} fill="var(--fill-0, #333538)" fillRule="evenodd" id="Mask" />
            </svg>
          </div>
        </div>
      </div>
      <Group7 />
      <div className="absolute flex h-[648.751px] items-center justify-center left-[853px] mix-blend-multiply top-[-104px] w-[444.378px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.11deg]">
          <div className="h-[590.976px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.918px_26.694px] mask-size-[389.506px_595.152px] relative w-[291.814px]" data-name="Shadow" style={{ maskImage: `url('${imgHome6}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShadow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="absolute contents h-[648.751px] left-[853px] top-[-104px] w-[444.378px]" data-name="Phone 51">
      <Device />
      <Mockup1 />
      <div className="absolute flex h-[608.032px] items-center justify-center left-[874.51px] top-[-83.73px] w-[402.352px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.11deg]">
          <div className="h-[558.521px] relative w-[257.446px]" data-name="Border">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257.802 558.877">
              <path clipRule="evenodd" d={svgPaths.pbda4400} fill="var(--fill-0, #ECF1F3)" fillOpacity="0.01" fillRule="evenodd" id="Border" stroke="var(--stroke-0, #C4D1D7)" strokeLinejoin="round" strokeOpacity="0.38" strokeWidth="0.356189" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[984px] left-[76px] top-[276px] w-[1248px]">
      <Group4 />
      <Phone />
    </div>
  );
}

export default function Mockup() {
  return (
    <div className="bg-[#272727] relative size-full" data-name="mockup">
      <Background />
      <Group5 />
      <Frame />
    </div>
  );
}