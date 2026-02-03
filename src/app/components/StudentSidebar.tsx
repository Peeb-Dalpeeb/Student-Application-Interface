import svgPaths from "@/imports/svg-h88ajj58o2";
import imgAppealingYoungWomanSparkleSunglassesLookingDistancePortraitGlamorousEuropeanModelWithShortHaircutSmiling197531205412 from "figma:asset/c894382827db3b10413ca64cd7e91f888fc38d79.png";
import { imgAppealingYoungWomanSparkleSunglassesLookingDistancePortraitGlamorousEuropeanModelWithShortHaircutSmiling197531205411 } from "@/imports/svg-aoggk";

interface StudentSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onClose?: () => void;
}

function Grid() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 25 25">
      <g clipPath="url(#clip0_1_101)">
        <path d={svgPaths.p3092d00} fill="currentColor" />
        <g>
          <path d={svgPaths.p42b7580} fill="currentColor" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_101">
          <rect fill="white" height="25" width="25" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Archive() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 25 25">
      <g>
        <path d={svgPaths.p8c75e00} fill="currentColor" />
      </g>
    </svg>
  );
}

function Calendar2Week() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 25 25">
      <g clipPath="url(#clip0_1_85)">
        <path d={svgPaths.p8fc9d80} fill="currentColor" />
        <path d={svgPaths.peccbf80} fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_1_85">
          <rect fill="white" height="25" width="25" />
        </clipPath>
      </defs>
    </svg>
  );
}

function People() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 25 25">
      <g>
        <path d={svgPaths.p39e84600} fill="currentColor" />
      </g>
    </svg>
  );
}

function BarChartLine() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 25 25">
      <g>
        <path d={svgPaths.p26567100} fill="currentColor" />
      </g>
    </svg>
  );
}

function Gear() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 25 25">
      <g clipPath="url(#clip0_1_97)">
        <path d={svgPaths.p3fac2a80} fill="currentColor" />
        <path d={svgPaths.p2a042100} fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_1_97">
          <rect fill="white" height="25" width="25" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Trash() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 25 25">
      <g>
        <path d={svgPaths.p38876f80} fill="currentColor" />
        <path clipRule="evenodd" d={svgPaths.p34efca80} fill="currentColor" fillRule="evenodd" />
      </g>
    </svg>
  );
}

function BoxArrowRight() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 25 25">
      <g clipPath="url(#clip0_1_74)">
        <path clipRule="evenodd" d={svgPaths.p1e00db00} fill="currentColor" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3f8bd7f0} fill="currentColor" fillRule="evenodd" />
      </g>
      <defs>
        <clipPath id="clip0_1_74">
          <rect fill="white" height="25" width="25" />
        </clipPath>
      </defs>
    </svg>
  );
}

function CloudArrowDown() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 25 25">
      <g>
        <path clipRule="evenodd" d={svgPaths.p1fa4be00} fill="currentColor" fillRule="evenodd" />
        <path d={svgPaths.p1e81b300} fill="currentColor" />
      </g>
    </svg>
  );
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function MenuItem({ icon, label, isActive, onClick }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 w-full px-5 py-4 rounded-[18px] transition-all ${
        isActive
          ? 'bg-[#1294f2] text-white'
          : 'text-[#7a7e86] hover:bg-gray-100'
      }`}
    >
      <div className={isActive ? 'text-white' : 'text-[#A5AAB5]'}>
        {icon}
      </div>
      <span className="font-['Poppins',sans-serif] text-[18px]">
        {label}
      </span>
    </button>
  );
}

export default function StudentSidebar({ activeTab, onTabChange, onClose }: StudentSidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Grid /> },
    { id: 'classes', label: 'Classes', icon: <Archive /> },
    { id: 'groups', label: 'Groups', icon: <People /> },
    { id: 'schedule', label: 'Schedule', icon: <Calendar2Week /> },
    { id: 'grades', label: 'Grades', icon: <BarChartLine /> },
    { id: 'downloads', label: 'Downloads', icon: <CloudArrowDown /> },
    { id: 'settings', label: 'Settings', icon: <Gear /> },
    { id: 'trash', label: 'Trash', icon: <Trash /> },
    { id: 'logout', label: 'Log Out', icon: <BoxArrowRight /> },
  ];

  const handleMenuClick = (id: string) => {
    onTabChange(id);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="bg-white h-full flex flex-col rounded-[30px] overflow-hidden">
      {/* User Profile */}
      <div className="flex flex-col items-center pt-12 pb-8">
        <div className="size-[100px] rounded-full overflow-hidden mb-4">
          <div className="size-full mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[100px_100px]" style={{ maskImage: `url('${imgAppealingYoungWomanSparkleSunglassesLookingDistancePortraitGlamorousEuropeanModelWithShortHaircutSmiling197531205411}')` }}>
            <img alt="Aster Seawalker" className="size-full object-cover" src={imgAppealingYoungWomanSparkleSunglassesLookingDistancePortraitGlamorousEuropeanModelWithShortHaircutSmiling197531205412} />
          </div>
        </div>
        <p className="font-['Poppins',sans-serif] font-medium text-[18px] text-black text-center">
          Aster Seawalker
        </p>
        <p className="font-['Poppins',sans-serif] font-light text-[16px] text-[#7a7e86] text-center mt-1">
          Computer Science
        </p>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-5 space-y-2">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeTab === item.id}
            onClick={() => handleMenuClick(item.id)}
          />
        ))}
      </nav>
    </div>
  );
}
